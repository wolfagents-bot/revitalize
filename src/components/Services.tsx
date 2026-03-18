import { Syringe, Sparkles, TestTubeDiagonal } from "lucide-react";

const services = [
  {
    icon: Syringe,
    title: "Peptide Therapy",
    description:
      "Targeted peptide protocols for recovery, body composition, cognition, and longevity. Each protocol is tailored to your labs and goals.",
    features: [
      "BPC-157 & TB-500 for recovery",
      "CJC-1295 / Ipamorelin for GH optimization",
      "Metabolic reset peptides",
      "Custom stacking protocols",
    ],
  },
  {
    icon: Sparkles,
    title: "Exosome Therapy",
    description:
      "Harness the power of cell-derived signaling to accelerate healing, reduce inflammation, and support whole-body regeneration.",
    features: [
      "Tissue regeneration & repair",
      "Anti-inflammatory support",
      "Joint & musculoskeletal restoration",
      "Skin rejuvenation & anti-aging",
    ],
  },
  {
    icon: TestTubeDiagonal,
    title: "Advanced Bloodwork",
    description:
      "Comprehensive panels that go far beyond standard labs. We track 30+ biomarkers to build a complete picture of your health.",
    features: [
      "Comprehensive metabolic panels",
      "Metabolic & lipid deep-dive",
      "Inflammatory markers",
      "Quarterly monitoring & trending",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Comprehensive Performance Medicine
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Three pillars of optimization, all physician-supervised and backed by
            lab data.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-teal-500/30 hover:shadow-md"
            >
              <div className="mb-6 inline-flex rounded-xl bg-teal-50 p-3">
                <service.icon className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mb-6 text-slate-600">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
