import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalSection from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service and medical disclaimers for Revivalize Performance Medicine.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-cream-50 pb-24 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <h1 className="text-3xl font-bold text-slate-900">
              Terms of Service
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: March 2025
            </p>

            <div className="mt-8 space-y-8 leading-relaxed">
              <LegalSection title="1. Acceptance of Terms">
                <p>
                  By accessing and using this website, you agree to be bound by
                  these Terms of Service and all applicable laws and regulations.
                  If you do not agree with any of these terms, you are prohibited
                  from using this site.
                </p>
              </LegalSection>

              <LegalSection title="2. Informational Purposes Only">
                <p>
                  The content on this website is provided for informational and
                  educational purposes only. It is not intended as a substitute
                  for professional medical advice, diagnosis, or treatment.
                  Always seek the advice of a qualified physician with any
                  questions regarding a medical condition.
                </p>
              </LegalSection>

              <LegalSection title="3. No Physician-Patient Relationship">
                <p>
                  Viewing this website or submitting a contact form does not
                  establish a physician-patient relationship. A formal
                  physician-patient relationship is only created after a
                  consultation has been conducted, consent forms have been
                  signed, and a treatment plan has been agreed upon.
                </p>
              </LegalSection>

              <LegalSection title="4. Off-Label Use Disclosure">
                <p>
                  Some therapies and treatments described on this website,
                  including certain peptide therapies, may be prescribed
                  off-label. Off-label use means the medication is being used in
                  a manner not specifically approved by the FDA but supported by
                  clinical evidence. All off-label prescriptions are made at the
                  discretion of a licensed physician based on individual patient
                  assessment.
                </p>
              </LegalSection>

              <LegalSection title="5. Compounding Pharmacies">
                <p>
                  Certain medications referenced on this website are sourced from
                  FDA-registered compounding pharmacies. Compounded medications
                  are customized preparations that are not FDA-approved products.
                  They are prepared in accordance with applicable federal and
                  state regulations.
                </p>
              </LegalSection>

              <LegalSection title="6. No Guarantees">
                <p>
                  Individual results from any treatment or protocol vary. We do
                  not guarantee specific outcomes. All testimonials and case
                  studies represent individual experiences and should not be
                  interpreted as promises of specific results.
                </p>
              </LegalSection>

              <LegalSection title="7. Limitation of Liability">
                <p>
                  Revivalize Performance Medicine shall not be liable for any
                  indirect, incidental, special, or consequential damages
                  arising from your use of this website or reliance on any
                  information provided herein. Your use of this website is at
                  your own risk.
                </p>
              </LegalSection>

              <LegalSection title="8. Changes to Terms">
                <p>
                  We reserve the right to update these terms at any time. Changes
                  will be reflected on this page with an updated revision date.
                  Continued use of the website after changes constitutes
                  acceptance of the modified terms.
                </p>
              </LegalSection>

              <LegalSection title="9. Contact">
                <p>
                  For questions about these terms, contact us at{" "}
                  <a
                    href="mailto:hello@revivalize.health"
                    className="text-teal-700 hover:underline"
                  >
                    hello@revivalize.health
                  </a>
                  .
                </p>
              </LegalSection>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <a href="/" className="text-sm text-teal-700 hover:underline">
                &larr; Back to Revivalize
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
