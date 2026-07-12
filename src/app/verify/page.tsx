import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function lookupCertificate(code: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("certificates")
    .select("*")
    .eq("credential_number", code.trim().toUpperCase())
    .single();

  if (error || !data) return null;
  return data;
}

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const { code } = await searchParams;
  const cert = code ? await lookupCertificate(code) : null;

  return (
    <main className="min-h-screen bg-offwhite px-6 py-16">
      <div className="mx-auto max-w-xl">
        <Link href="/" className="mb-8 flex items-center gap-2">
          <Image
            src="/images/logo-navy-gold.png"
            alt="MENUMIND"
            width={140}
            height={103}
            className="h-10 w-auto"
          />
        </Link>

        <h1 className="font-display text-[26px] font-semibold text-navy">
          Certificate Verification
        </h1>
        <p className="mt-2 text-[14px] text-dark-text/65">
          Confirm the authenticity of a MENUMIND Academy credential.
        </p>

        <form action="/verify" className="mt-8 flex gap-3">
          <input
            type="text"
            name="code"
            defaultValue={code}
            placeholder="e.g. MMA-2026-EXE-000001"
            className="flex-1 rounded-[8px] border border-light-gray bg-white px-4 py-3 text-[14px] text-dark-text outline-none focus:border-gold"
          />
          <button
            type="submit"
            className="rounded-[8px] bg-navy px-6 py-3 text-[13.5px] font-semibold text-white transition hover:bg-navy-deep"
          >
            Verify
          </button>
        </form>

        {code && !cert && (
          <div className="mt-8 rounded-[10px] border border-red-200 bg-red-50 px-5 py-4">
            <p className="text-[13.5px] font-semibold text-red-700">
              No certificate found for &ldquo;{code}&rdquo;
            </p>
            <p className="mt-1 text-[12.5px] text-red-600/80">
              Check the credential number and try again, or contact
              MENUMIND directly if you believe this is an error.
            </p>
          </div>
        )}

        {cert && (
          <div className="mt-8 overflow-hidden rounded-[14px] border border-light-gray bg-white shadow-[0_8px_30px_rgba(23,35,58,0.08)]">
            <div
              className={`px-6 py-4 text-center text-[12px] font-semibold uppercase tracking-[1.5px] ${
                cert.status === "active"
                  ? "bg-navy text-gold-light"
                  : "bg-red-600 text-white"
              }`}
            >
              {cert.status === "active" ? "Valid Credential" : "Revoked Credential"}
            </div>
            <div className="p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gold">
                Credential No. {cert.credential_number}
              </p>
              <h2 className="mt-2 font-display text-[22px] font-semibold text-navy">
                {cert.recipient_name}
              </h2>
              <p className="mt-1 text-[14.5px] text-dark-text/75">
                {cert.program_title}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-light-gray pt-5 text-[12.5px]">
                <div>
                  <span className="text-dark-text/50">Certificate Level</span>
                  <p className="mt-0.5 font-semibold text-navy">{cert.level_code}</p>
                </div>
                <div>
                  <span className="text-dark-text/50">Learning Hours</span>
                  <p className="mt-0.5 font-semibold text-navy">{cert.learning_hours ?? "—"}</p>
                </div>
                <div>
                  <span className="text-dark-text/50">Issue Date</span>
                  <p className="mt-0.5 font-semibold text-navy">{cert.issue_date}</p>
                </div>
                <div>
                  <span className="text-dark-text/50">Issued By</span>
                  <p className="mt-0.5 font-semibold text-navy">MENUMIND Academy</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
