"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setStatus("error");
      setErrorMsg(
        error.message === "Email not confirmed"
          ? "Please confirm your email first — check the link we sent you when you registered."
          : error.message
      );
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-offwhite px-6 py-16">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 flex justify-center">
          <Image
            src="/images/logo-navy-gold.png"
            alt="MENUMIND"
            width={140}
            height={103}
            className="h-12 w-auto"
          />
        </Link>

        <div className="rounded-[14px] border border-light-gray bg-white p-8 shadow-[0_8px_30px_rgba(23,35,58,0.06)]">
          <h1 className="font-display text-[22px] font-semibold text-navy">
            Sign in
          </h1>
          <p className="mt-2 text-[13px] text-dark-text/60">
            Welcome back to MENUMIND Academy.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-[12.5px] font-medium text-navy">
                Email
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[8px] border border-light-gray px-3.5 py-2.5 text-[14px] outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="mb-1 block text-[12.5px] font-medium text-navy">
                Password
              </label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-[8px] border border-light-gray px-3.5 py-2.5 text-[14px] outline-none focus:border-gold"
              />
            </div>

            {status === "error" && (
              <p className="text-[12.5px] text-red-600">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-[8px] bg-gold px-6 py-3 text-[13.5px] font-semibold text-navy transition hover:bg-gold-light disabled:opacity-60"
            >
              {status === "loading" ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="mt-5 text-center text-[12.5px] text-dark-text/60">
            No account yet?{" "}
            <Link href="/register" className="font-semibold text-navy underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
