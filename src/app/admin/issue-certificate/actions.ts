"use server";

import { createClient } from "@/utils/supabase/server";
import { issueCertificate } from "@/utils/certificates";

export interface IssueCertificateFormState {
  success: boolean;
  message: string;
  verifyUrl?: string;
  qrCodeDataUrl?: string;
  credentialNumber?: string;
}

export async function issueCertificateAction(
  _prevState: IssueCertificateFormState,
  formData: FormData
): Promise<IssueCertificateFormState> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, message: "You must be signed in." };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  if (!profile?.is_admin) {
    return { success: false, message: "Not authorized." };
  }

  const recipientEmail = formData.get("recipientEmail") as string;
  const recipientName = formData.get("recipientName") as string;
  const programTitle = formData.get("programTitle") as string;
  const levelCode = formData.get("levelCode") as string;
  const learningHours = Number(formData.get("learningHours"));

  // Look up the recipient's user id by email via their profile row
  // (profiles.email is populated automatically at signup).
  const { data: recipientProfile, error: lookupError } = await supabase
    .from("profiles")
    .select("id")
    .eq("email", recipientEmail)
    .single();

  if (lookupError || !recipientProfile) {
    return {
      success: false,
      message: `No registered account found for ${recipientEmail}. They need to register first.`,
    };
  }

  // A real program row is required by the schema — find or create a
  // matching one rather than requiring it to exist ahead of time.
  let { data: program } = await supabase
    .from("programs")
    .select("id")
    .eq("title", programTitle)
    .single();

  if (!program) {
    const { data: newProgram, error: programError } = await supabase
      .from("programs")
      .insert({
        title: programTitle,
        level_code: levelCode,
        learning_hours: learningHours,
        status: "published",
      })
      .select()
      .single();
    if (programError) {
      return { success: false, message: programError.message };
    }
    program = newProgram;
  }

  try {
    const result = await issueCertificate({
      userId: recipientProfile.id,
      programId: program!.id,
      recipientName,
      programTitle,
      levelCode,
      learningHours,
    });

    return {
      success: true,
      message: "Certificate issued.",
      verifyUrl: result.verifyUrl,
      qrCodeDataUrl: result.qrCodeDataUrl,
      credentialNumber: result.certificate.credential_number,
    };
  } catch (err) {
    return { success: false, message: (err as Error).message };
  }
}
