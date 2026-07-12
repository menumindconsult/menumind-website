import { createClient } from "@/utils/supabase/server";
import QRCode from "qrcode";

export interface IssueCertificateInput {
  userId: string;
  programId: string;
  recipientName: string;
  programTitle: string;
  levelCode: string; // e.g. "EXE", "OPS", "FDN" — matches the brand book format
  learningHours: number;
}

export async function issueCertificate(input: IssueCertificateInput) {
  const supabase = await createClient();

  // Generate the credential number using the database sequence, so numbers
  // are never reused even if two certificates are issued at the same instant.
  const { data: credentialNumber, error: genError } = await supabase.rpc(
    "generate_credential_number",
    { p_level_code: input.levelCode }
  );
  if (genError) throw genError;

  const { data: cert, error: insertError } = await supabase
    .from("certificates")
    .insert({
      credential_number: credentialNumber,
      user_id: input.userId,
      program_id: input.programId,
      recipient_name: input.recipientName,
      program_title: input.programTitle,
      level_code: input.levelCode,
      learning_hours: input.learningHours,
    })
    .select()
    .single();
  if (insertError) throw insertError;

  const verifyUrl = `https://menumindconsult.com/verify?code=${credentialNumber}`;
  const qrCodeDataUrl = await QRCode.toDataURL(verifyUrl, {
    color: { dark: "#0B1F3A", light: "#00000000" },
    margin: 1,
    width: 400,
  });

  return { certificate: cert, verifyUrl, qrCodeDataUrl };
}
