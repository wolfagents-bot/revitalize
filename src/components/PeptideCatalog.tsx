const peptides = [
  {
    name: "BPC-157",
    category: "Recovery",
    description:
      "Body Protection Compound. Accelerates tissue repair, supports gut healing, and promotes recovery from injuries and inflammation.",
    benefits: ["Tissue repair", "Gut health", "Joint recovery"],
  },
  {
    name: "TB-500",
    category: "Recovery",
    description:
      "Thymosin Beta-4. Promotes cellular migration and wound healing. Often paired with BPC-157 for comprehensive recovery protocols.",
    benefits: ["Wound healing", "Flexibility", "Inflammation reduction"],
  },
  {
    name: "CJC-1295 / Ipamorelin",
    category: "Growth Hormone",
    description:
      "The gold standard GH secretagogue stack. Stimulates natural growth hormone release for body composition, recovery, and anti-aging.",
    benefits: ["Lean muscle", "Fat loss", "Deep sleep"],
  },
  {
    name: "Semaglutide",
    category: "Metabolic",
    description:
      "GLP-1 receptor agonist for sustainable weight management. Reduces appetite, improves insulin sensitivity, and supports metabolic health.",
    benefits: ["Weight management", "Blood sugar", "Appetite control"],
  },
  {
    name: "Tirzepatide",
    category: "Metabolic",
    description:
      "Dual GIP/GLP-1 agonist offering superior metabolic outcomes. Next-generation peptide for weight optimization and glucose control.",
    benefits: ["Enhanced fat loss", "Glucose control", "Metabolic reset"],
  },
  {
    name: "PT-141",
    category: "Performance",
    description:
      "Bremelanotide for sexual health optimization. Works centrally on the nervous system to enhance arousal and performance in both men and women.",
    benefits: ["Libido enhancement", "Sexual performance", "Neural pathway"],
  },
  {
    name: "Sermorelin",
    category: "Growth Hormone",
    description:
      "GHRH analog that stimulates your pituitary to produce more growth hormone naturally. Ideal for anti-aging and recovery protocols.",
    benefits: ["Anti-aging", "Recovery", "Energy"],
  },
  {
    name: "NAD+",
    category: "Longevity",
    description:
      "Nicotinamide adenine dinucleotide for cellular energy and repair. Supports mitochondrial function, DNA repair, and cognitive clarity.",
    benefits: ["Cellular repair", "Mental clarity", "Energy"],
  },
];

const categoryColors: Record<string, string> = {
  Recovery: "bg-emerald-500/10 text-emerald-400",
  "Growth Hormone": "bg-blue-500/10 text-blue-400",
  Metabolic: "bg-amber-500/10 text-amber-400",
  Performance: "bg-purple-500/10 text-purple-400",
  Longevity: "bg-rose-500/10 text-rose-400",
};

export default function PeptideCatalog() {
  return (
    <section id="peptides" className="bg-navy-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Peptide & Therapy Catalog
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Medical-grade peptides sourced from FDA-registered pharmacies. Every
            protocol is physician-supervised.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {peptides.map((peptide) => (
            <div
              key={peptide.name}
              className="group flex flex-col rounded-2xl border border-white/10 bg-navy-950/50 p-6 transition-all hover:border-teal-500/30"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {peptide.name}
                </h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${categoryColors[peptide.category] ?? "bg-slate-500/10 text-slate-400"}`}
                >
                  {peptide.category}
                </span>
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                {peptide.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {peptide.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="rounded-md border border-white/5 bg-white/5 px-2 py-1 text-xs text-slate-400"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
