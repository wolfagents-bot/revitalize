import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntakeForm from "./IntakeForm";

export const metadata: Metadata = {
  title: "Patient Intake",
  description:
    "Complete your patient intake form for Revivalize Performance Medicine.",
  alternates: { canonical: "/intake" },
};

export default function IntakePage() {
  return (
    <>
      <Header />
      <main className="bg-cream-50 pb-24 pt-32">
        <div className="mx-auto max-w-2xl px-6">
          <div className="mb-6">
            <a href="/" className="text-sm text-teal-700 hover:underline">
              &larr; Back to Home
            </a>
          </div>
          <IntakeForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
