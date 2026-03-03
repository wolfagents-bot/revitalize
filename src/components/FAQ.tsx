"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are peptides and how do they work?",
    answer:
      "Peptides are short chains of amino acids that act as signaling molecules in your body. They can stimulate specific biological processes like tissue repair, growth hormone release, fat metabolism, and immune function. We use medical-grade peptides from FDA-registered compounding pharmacies, prescribed and monitored by a physician.",
  },
  {
    question: "Is peptide therapy safe?",
    answer:
      "When prescribed by a licensed physician, sourced from FDA-registered pharmacies, and monitored with regular lab work, peptide therapy has an excellent safety profile. Every patient receives a thorough medical evaluation, baseline labs, and ongoing monitoring to ensure safety and efficacy.",
  },
  {
    question: "How long before I see results?",
    answer:
      "It depends on the protocol. Some peptides like BPC-157 can show noticeable effects within 1-2 weeks. Growth hormone peptides typically show body composition changes in 8-12 weeks. Metabolic peptides like Semaglutide often show results within the first month. We set clear expectations during your consultation.",
  },
  {
    question: "Do you offer telemedicine / virtual consultations?",
    answer:
      "Yes. All initial consultations can be conducted virtually. We partner with nationwide lab networks so you can get your bloodwork done locally. Follow-up appointments and protocol adjustments are also available via telemedicine.",
  },
  {
    question: "What does the bloodwork panel include?",
    answer:
      "Our comprehensive panel covers 80+ biomarkers including complete hormone panels (testosterone, estrogen, thyroid, cortisol, DHEA), metabolic markers (insulin, glucose, HbA1c, lipids), inflammatory markers (CRP, homocysteine), liver and kidney function, and vitamin/mineral status. Far more comprehensive than what most doctors order.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We offer transparent pricing with no hidden fees. Consultation is free. Comprehensive bloodwork panels start at $299. Peptide protocols vary based on your specific needs. We'll provide a complete cost breakdown before you commit to anything.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We operate as a cash-pay concierge practice, which allows us to spend the time and resources needed for true optimization without insurance constraints. Some patients submit claims to their insurance for reimbursement on lab work. We provide all necessary documentation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream-100 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="pr-4 font-medium text-slate-900">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-slate-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                  <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
