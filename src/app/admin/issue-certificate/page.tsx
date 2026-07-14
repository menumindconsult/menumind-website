import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import IssueCertificateForm from "./form";

export default async function IssueCertificatePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/register");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin, full_name")
    .eq("id", user.id)
    .single();

  if (!profile?.is_admin) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-offwhite px-6">
        <p className="text-[14px] text-dark-text/70">
          This page is restricted to MENUMIND administrators.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-offwhite px-6 py-16">
      <div className="mx-auto max-w-lg">
        <h1 className="font-display text-[24px] font-semibold text-navy">
          Issue a Certificate
        </h1>
        <p className="mt-2 text-[13px] text-dark-text/60">
          Signed in as {profile.full_name || user.email}. The recipient must
          already have a registered account.
        </p>
        <IssueCertificateForm />
      </div>
    </main>
  );
}
