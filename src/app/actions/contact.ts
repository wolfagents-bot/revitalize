"use server";

import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().max(500).optional(),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<string, string>>;
  message?: string;
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || undefined,
    message: (formData.get("message") as string) || undefined,
  };

  const result = schema.safeParse(raw);

  if (!result.success) {
    const errors: ContactFormState["errors"] = {};
    const flat = result.error.flatten();
    for (const [key, issues] of Object.entries(flat.fieldErrors)) {
      if (issues && issues.length > 0) {
        errors[key] = issues[0];
      }
    }
    return { status: "error", errors };
  }

  // TODO: Replace with real email provider (Resend, SendGrid, etc.)
  // Example with Resend:
  // await resend.emails.send({
  //   from: "no-reply@revivalize.health",
  //   to: "Info@RevivalizeMD.com",
  //   subject: `New consultation request from ${result.data.firstName}`,
  //   html: `...`,
  // });
  // TODO: Replace with real email provider (Resend, SendGrid, etc.)
  console.log("[Contact form submission]", new Date().toISOString());

  return { status: "success" };
}
