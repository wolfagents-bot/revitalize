import { Quote } from "lucide-react";

// TODO: Replace with real patient testimonials before launch
const testimonials = [
  {
    quote:
      "After six months on the protocol, my energy levels are the best they've been in 15 years. The quarterly labs keep me accountable and informed in a way no other doctor has.",
    name: "Michael T.",
    detail: "Software Engineer, Age 44",
    result: "Lost 22 lbs, testosterone optimized",
  },
  {
    quote:
      "I was skeptical, but the data doesn't lie. The labs ordered were ones my GP had never even mentioned. I finally understand my own body.",
    name: "Sarah K.",
    detail: "Endurance Athlete, Age 38",
    result: "Performance & recovery protocol",
  },
  {
    quote:
      "What separates Revivalize is the physician-direct model. I talk to my actual doctor, not a patient coordinator. That alone is worth it.",
    name: "James R.",
    detail: "Executive, Age 51",
    result: "Exosome + peptide combo protocol",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Real Results from{" "}
            <span className="text-teal-700">Real Patients</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Hear from patients who have transformed their health with
            physician-led optimization protocols.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <Quote className="mb-4 h-8 w-8 text-teal-500/40" />
              <p className="flex-1 text-base leading-relaxed text-slate-600 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.detail}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
