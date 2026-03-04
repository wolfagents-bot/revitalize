import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalSection from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Revitalize Performance Medicine collects, uses, and protects your personal health information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-cream-50 pb-24 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <h1 className="text-3xl font-bold text-slate-900">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: March 2025
            </p>

            <div className="mt-8 space-y-8 leading-relaxed">
              <LegalSection title="1. Information We Collect">
                <p>
                  We collect information you provide directly, including your
                  name, email address, phone number, and health history shared
                  during consultations or through our contact form. We do not
                  collect information without your explicit consent.
                </p>
                <p>
                  We may also collect standard web analytics data (pages visited,
                  browser type, referring URLs) to improve our website. This data
                  is anonymized and does not identify individual users.
                </p>
              </LegalSection>

              <LegalSection title="2. How We Use Your Information">
                <p>
                  We use your information solely to provide medical services,
                  schedule consultations, communicate about your care, and
                  improve our services. We do not sell, rent, or share your
                  personal information with third parties for marketing purposes.
                </p>
              </LegalSection>

              <LegalSection title="3. HIPAA Compliance">
                <p>
                  As a medical practice, we comply with the Health Insurance
                  Portability and Accountability Act (HIPAA). Your protected
                  health information (PHI) is handled according to our HIPAA
                  Privacy Notice, available upon request. We maintain
                  administrative, technical, and physical safeguards to protect
                  your PHI.
                </p>
              </LegalSection>

              <LegalSection title="4. Data Security">
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. All data is
                  encrypted in transit and at rest. Access to patient information
                  is restricted to authorized medical personnel.
                </p>
              </LegalSection>

              <LegalSection title="5. Your Rights">
                <p>
                  You have the right to access, correct, or request deletion of
                  your personal information. You may also request a copy of your
                  medical records or restrict how your information is used. To
                  exercise any of these rights, contact us using the information
                  below.
                </p>
              </LegalSection>

              <LegalSection title="6. Cookies and Tracking">
                <p>
                  Our website may use essential cookies to ensure proper
                  functionality. We do not use advertising cookies or
                  cross-site tracking. You can disable cookies in your browser
                  settings at any time.
                </p>
              </LegalSection>

              <LegalSection title="7. Contact">
                <p>
                  For privacy concerns, questions about this policy, or to
                  exercise your rights, contact us at{" "}
                  <a
                    href="mailto:hello@revitalize.health"
                    className="text-teal-700 hover:underline"
                  >
                    hello@revitalize.health
                  </a>
                  .
                </p>
              </LegalSection>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <a href="/" className="text-sm text-teal-700 hover:underline">
                &larr; Back to Revitalize
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
