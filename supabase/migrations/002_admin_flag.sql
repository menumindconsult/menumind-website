-- Adds an admin flag to profiles, so only Mohamed's account can issue
-- certificates. Run this in Supabase SQL Editor, same as the first migration.

alter table profiles add column if not exists is_admin boolean default false;

-- After running this, set your own account to admin: go to Table Editor →
-- profiles → find your row → set is_admin to true → save. That single row
-- change is what unlocks the /admin/issue-certificate page for your login
-- only — everyone else is blocked.
