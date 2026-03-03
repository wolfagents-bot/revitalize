import { Syringe, Activity, TestTubeDiagonal } from "lucide-react";

const services = [
  {
    icon: Syringe,
    title: "Peptide Therapy",
    description:
      "Targeted peptide protocols for recovery, body composition, cognition, and longevity. Each protocol is tailored to your labs and goals.",
    features: [
      "BPC-157 & TB-500 for recovery",
      "CJC-1295 / Ipamorelin for GH optimization",
      "Semaglutide & Tirzepatide for metabolic health",
      "Custom stacking protocols",
    ],
  },
  {
    icon: Activity,
    title: "Hormone Optimization",
    description:
      "Evidence-based hormone replacement and optimization. We don't guess — we measure, titrate, and monitor.",
    features: [
      "Testosterone replacement therapy",
      "Thyroid optimization",
      "Estrogen & progesterone balancing",
      "DHEA & pregnenolone protocols",
    ],
  },
  {
    icon: TestTubeDiagonal,
    title: "Advanced Bloodwork",
    description:
      "Comprehensive panels that go far beyond standard labs. We track 80+ biomarkers to build a complete picture of your health.",
    features: [
      "Full hormone panels",
      "Metabolic & lipid deep-dive",
      "Inflammatory markers",
      "Quarterly monitoring & trending",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-navy-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Comprehensive Performance Medicine
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Three pillars of optimization, all physician-supervised and backed by
            lab data.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-navy-950/50 p-8 transition-all hover:border-teal-500/30 hover:bg-navy-950"
            >
              <div className="mb-6 inline-flex rounded-xl bg-teal-500/10 p-3">
                <service.icon className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mb-6 text-slate-400">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-400"
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
