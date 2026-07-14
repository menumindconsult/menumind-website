"use client";

import { useActionState } from "react";
import { issueCertificateAction, IssueCertificateFormState } from "./actions";
import Image from "next/image";

const initialState: IssueCertificateFormState = { success: false, message: "" };

export default function IssueCertificateForm() {
  const [state, formAction, pending] = useActionState(
    issueCertificateAction,
    initialState
  );

  if (state.success) {
    return (
      <div className="mt-8 rounded-[14px] border border-light-gray bg-white p-8 text-center shadow-[0_8px_30px_rgba(23,35,58,0.06)]">
        <p className="text-[12px] font-semibold uppercase tracking-[1.5px] text-gold">
          Certificate Issued
        </p>
        <p className="mt-2 font-display text-[20px] font-semibold text-navy">
          {state.credentialNumber}
        </p>
        {state.qrCodeDataUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={state.qrCodeDataUrl}
            alt="Verification QR code"
            className="mx-auto mt-5 h-40 w-40"
          />
        )}
        <p className="mt-4 break-all text-[12px] text-dark-text/60">
          {state.verifyUrl}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="mt-6 space-y-4">
      <div>
        <label className="mb-1 block text-[12.5px] font-medium text-navy">
          Recipient email (must already be registered)
        </label>
        <input
          required
          type="email"
          name="recipientEmail"
          className="w-full rounded-[8px] border border-light-gray px-3.5 py-2.5 text-[14px] outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="mb-1 block text-[12.5px] font-medium text-navy">
          Recipient full name
        </label>
        <input
          required
          type="text"
          name="recipientName"
          className="w-full rounded-[8px] border border-light-gray px-3.5 py-2.5 text-[14px] outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="mb-1 block text-[12.5px] font-medium text-navy">
          Program title
        </label>
        <input
          required
          type="text"
          name="programTitle"
          placeholder="e.g. Restaurant Operations Executive Program"
          className="w-full rounded-[8px] border border-light-gray px-3.5 py-2.5 text-[14px] outline-none focus:border-gold"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-[12.5px] font-medium text-navy">
            Level code
          </label>
          <input
            required
            type="text"
            name="levelCode"
            placeholder="EXE"
            maxLength={5}
            className="w-full rounded-[8px] border border-light-gray px-3.5 py-2.5 text-[14px] uppercase outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="mb-1 block text-[12.5px] font-medium text-navy">
            Learning hours
          </label>
          <input
            required
            type="number"
            name="learningHours"
            defaultValue={40}
            className="w-full rounded-[8px] border border-light-gray px-3.5 py-2.5 text-[14px] outline-none focus:border-gold"
          />
        </div>
      </div>

      {state.message && !state.success && (
        <p className="text-[12.5px] text-red-600">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-[8px] bg-navy px-6 py-3 text-[13.5px] font-semibold text-white transition hover:bg-navy-deep disabled:opacity-60"
      >
        {pending ? "Issuing..." : "Issue Certificate"}
      </button>
    </form>
  );
}
