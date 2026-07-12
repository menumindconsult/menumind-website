"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
      return;
    }

    // Fill in the two profile fields the signup trigger doesn't set
    if (data.user) {
      await supabase
        .from("profiles")
        .update({ restaurant_or_company: restaurant, role })
        .eq("id", data.user.id);
    }

    setStatus("sent");
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
          {status === "sent" ? (
            <div className="text-center">
              <h1 className="font-display text-[22px] font-semibold text-navy">
                Check your inbox
              </h1>
              <p className="mt-3 text-[13.5px] leading-[1.7] text-dark-text/70">
                We sent a confirmation link to <strong>{email}</strong>. Click
                it to activate your MENUMIND Academy account.
              </p>
            </div>
          ) : (
            <>
              <h1 className="font-display text-[22px] font-semibold text-navy">
                Create your Academy account
              </h1>
              <p className="mt-2 text-[13px] text-dark-text/60">
                Free to join. Track your progress and save your place in every
                course.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="mb-1 block text-[12.5px] font-medium text-navy">
                    Full name
                  </label>
                  <input
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-[8px] border border-light-gray px-3.5 py-2.5 text-[14px] outline-none focus:border-gold"
                  />
                </div>
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
                    minLength={8}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-[8px] border border-light-gray px-3.5 py-2.5 text-[14px] outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[12.5px] font-medium text-navy">
                    Restaurant / company
                  </label>
                  <input
                    type="text"
                    value={restaurant}
                    onChange={(e) => setRestaurant(e.target.value)}
                    className="w-full rounded-[8px] border border-light-gray px-3.5 py-2.5 text-[14px] outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[12.5px] font-medium text-navy">
                    Role
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full rounded-[8px] border border-light-gray px-3.5 py-2.5 text-[14px] outline-none focus:border-gold"
                  >
                    <option value="">Select one</option>
                    <option value="Owner">Owner</option>
                    <option value="General Manager">General Manager</option>
                    <option value="Operations">Operations</option>
                    <option value="Training">Training</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {status === "error" && (
                  <p className="text-[12.5px] text-red-600">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-[8px] bg-gold px-6 py-3 text-[13.5px] font-semibold text-navy transition hover:bg-gold-light disabled:opacity-60"
                >
                  {status === "loading" ? "Creating account..." : "Create account"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
