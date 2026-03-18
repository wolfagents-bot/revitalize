"use server";

import { z } from "zod";

const schema = z.object({
  // Step 1 — Personal Information
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Phone number is required").max(20),
  dobMonth: z.string().min(1, "Month is required"),
  dobDay: z.string().min(1, "Day is required"),
  dobYear: z.string().min(1, "Year is required"),
  gender: z.string().optional(),

  // Step 2 — Physical Data
  heightFeet: z.string().optional(),
  heightInches: z.string().optional(),
  weight: z.string().optional(),
  healthConcerns: z.string().min(1, "Please describe your main health concerns"),
  healthGoals: z.string().min(1, "Please describe your main health goals"),

  // Step 3 — Peptide History
  usedPeptides: z.enum(["yes", "no"]),
  peptideMedications: z.string().optional(),
  peptideDosage: z.string().optional(),
  peptideResults: z.string().optional(),

  // Step 4 — Medical Contraindications
  pregnantOrBreastfeeding: z.enum(["yes", "no", "na"]),
  cancerDiagnosis: z.enum(["yes", "no"]),

  // Step 5 — Lab Information
  labWork: z.string().min(1, "Please select a lab work option"),

  // Step 6 — Consent & Signature
  consentAgreed: z.literal("true", { message: "You must agree to the consent statement" }),
  signature: z.string().min(1, "Please enter your full legal name as your signature"),
  signatureAgreed: z.literal("true", { message: "You must agree that your typed name is your electronic signature" }),
  signatureDate: z.string().min(1, "Date is required"),
});

export type IntakeFormState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<string, string>>;
  message?: string;
};

export async function submitIntake(
  _prevState: IntakeFormState,
  formData: FormData
): Promise<IntakeFormState> {
  const raw = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    dobMonth: formData.get("dobMonth") as string,
    dobDay: formData.get("dobDay") as string,
    dobYear: formData.get("dobYear") as string,
    gender: (formData.get("gender") as string) || undefined,
    heightFeet: (formData.get("heightFeet") as string) || undefined,
    heightInches: (formData.get("heightInches") as string) || undefined,
    weight: (formData.get("weight") as string) || undefined,
    healthConcerns: formData.get("healthConcerns") as string,
    healthGoals: formData.get("healthGoals") as string,
    usedPeptides: formData.get("usedPeptides") as string,
    peptideMedications: (formData.get("peptideMedications") as string) || undefined,
    peptideDosage: (formData.get("peptideDosage") as string) || undefined,
    peptideResults: (formData.get("peptideResults") as string) || undefined,
    pregnantOrBreastfeeding: formData.get("pregnantOrBreastfeeding") as string,
    cancerDiagnosis: formData.get("cancerDiagnosis") as string,
    labWork: formData.get("labWork") as string,
    consentAgreed: formData.get("consentAgreed") as string,
    signature: formData.get("signature") as string,
    signatureAgreed: formData.get("signatureAgreed") as string,
    signatureDate: formData.get("signatureDate") as string,
  };

  const result = schema.safeParse(raw);

  if (!result.success) {
    const errors: IntakeFormState["errors"] = {};
    const flat = result.error.flatten();
    for (const [key, issues] of Object.entries(flat.fieldErrors)) {
      if (issues && issues.length > 0) {
        errors[key] = issues[0];
      }
    }
    return { status: "error", errors };
  }

  // TODO: Replace with real backend integration (e.g., Resend, EHR API, CRM webhook)
  // Example with Resend:
  // await resend.emails.send({
  //   from: "no-reply@revivalize.health",
  //   to: "Info@RevivalizeMD.com",
  //   subject: `New patient intake from ${result.data.firstName} ${result.data.lastName}`,
  //   html: `...`,
  // });
  console.log("[Intake form submission]", new Date().toISOString(), {
    name: `${result.data.firstName} ${result.data.lastName}`,
    email: result.data.email,
  });

  return { status: "success" };
}
