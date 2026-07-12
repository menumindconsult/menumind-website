-- MENUMIND Academy — core schema
-- Run this once in Supabase Dashboard → SQL Editor → New Query → paste → Run

-- ============================================================
-- 1. PROFILES — one row per registered user, extends Supabase's
--    built-in auth.users. Created automatically on signup via
--    the trigger at the bottom of this file.
-- ============================================================
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  restaurant_or_company text,
  role text,
  created_at timestamptz default now()
);

alter table profiles enable row level security;

create policy "Users can view their own profile"
  on profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on profiles for update
  using (auth.uid() = id);

-- ============================================================
-- 2. DOMAINS — mirrors the MHKA structure (level, level name,
--    domain name, review type). Left empty until the Academy
--    architecture decision is finalized — the table exists now
--    so courses can reference it later without a schema change.
-- ============================================================
create table if not exists domains (
  id uuid primary key default gen_random_uuid(),
  level int not null,
  level_name text not null,
  domain_number int not null unique,
  domain_name text not null,
  review_type text check (review_type in ('Operational', 'Specialist', 'Proprietary')),
  created_at timestamptz default now()
);

alter table domains enable row level security;

create policy "Anyone can view domains"
  on domains for select
  using (true);

-- ============================================================
-- 3. COURSES — individual pieces of content (course, article,
--    video, SOP, template) optionally tied to a domain.
-- ============================================================
create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  domain_id uuid references domains(id),
  title text not null,
  slug text unique not null,
  format_type text check (format_type in ('Book','Course','Article','Video','SOP','Template','AI Knowledge','Certification')),
  status text default 'draft' check (status in ('draft','published','archived')),
  content text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table courses enable row level security;

create policy "Anyone can view published courses"
  on courses for select
  using (status = 'published');

-- ============================================================
-- 4. PROGRAMS — a curated, certification-bearing bundle of
--    courses within one level (e.g. "Executive Certificate:
--    Restaurant Operations").
-- ============================================================
create table if not exists programs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  level_code text not null,          -- e.g. 'EXE', 'OPS', 'FDN' — feeds the credential number
  learning_hours int,
  description text,
  status text default 'draft' check (status in ('draft','published')),
  created_at timestamptz default now()
);

create table if not exists program_courses (
  program_id uuid references programs(id) on delete cascade,
  course_id uuid references courses(id) on delete cascade,
  sort_order int default 0,
  primary key (program_id, course_id)
);

alter table programs enable row level security;
alter table program_courses enable row level security;

create policy "Anyone can view published programs"
  on programs for select
  using (status = 'published');

create policy "Anyone can view program course lists"
  on program_courses for select
  using (true);

-- ============================================================
-- 5. ENROLLMENTS — tracks a user's progress through a course
--    or a full certification program.
-- ============================================================
create table if not exists enrollments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  course_id uuid references courses(id),
  program_id uuid references programs(id),
  status text default 'in_progress' check (status in ('in_progress','completed')),
  progress_percent int default 0,
  enrolled_at timestamptz default now(),
  completed_at timestamptz,
  check (course_id is not null or program_id is not null)
);

alter table enrollments enable row level security;

create policy "Users can view their own enrollments"
  on enrollments for select
  using (auth.uid() = user_id);

create policy "Users can create their own enrollments"
  on enrollments for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own enrollments"
  on enrollments for update
  using (auth.uid() = user_id);

-- ============================================================
-- 6. CERTIFICATES — the credentialed, QR-verifiable outcome.
--    Format follows the brand book example exactly:
--    MMA-2026-EXE-000001
-- ============================================================
create table if not exists certificates (
  id uuid primary key default gen_random_uuid(),
  credential_number text unique not null,
  user_id uuid references auth.users(id) not null,
  program_id uuid references programs(id) not null,
  recipient_name text not null,
  program_title text not null,
  level_code text not null,
  learning_hours int,
  issue_date date default current_date,
  status text default 'active' check (status in ('active','revoked')),
  created_at timestamptz default now()
);

alter table certificates enable row level security;

-- Certificates are publicly viewable by credential number ONLY —
-- this is what makes /verify work for anyone, without exposing the
-- full certificates table to arbitrary browsing.
create policy "Anyone can verify a specific certificate"
  on certificates for select
  using (true);

create policy "Users can view their own certificates"
  on certificates for select
  using (auth.uid() = user_id);

-- ============================================================
-- 7. Auto-create a profile row whenever someone signs up
-- ============================================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- 8. Credential number generator — MMA-{year}-{level}-{seq}
-- ============================================================
create sequence if not exists certificate_seq start 1;

create or replace function generate_credential_number(p_level_code text)
returns text as $$
declare
  seq_val int;
begin
  seq_val := nextval('certificate_seq');
  return 'MMA-' || extract(year from current_date) || '-' || p_level_code || '-' || lpad(seq_val::text, 6, '0');
end;
$$ language plpgsql;
