function DnaIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 15c6.667-6 13.333 0 20-6" />
      <path d="M9 3.236s1 2.764 3 2.764 3-2.764 3-2.764" />
      <path d="M12 12c2 0 3-2.764 3-2.764" />
      <path d="M9 12c-2 0-3 2.764-3 2.764" />
      <path d="M12 12c-2 0-3 2.764-3 2.764" />
      <path d="M9 20.764s1-2.764 3-2.764 3 2.764 3 2.764" />
      <path d="M2 9c6.667 6 13.333 0 20 6" />
    </svg>
  );
}

type Peptide = {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  benefits: string[];
};

const peptides: Peptide[] = [
  {
    name: "BPC-157",
    category: "Recovery",
    description: "Body Protection Compound",
    highlights: [
      "Accelerates tissue repair and wound healing",
      "Supports gut healing and digestive health",
      "Promotes recovery from injuries and inflammation",
    ],
    benefits: ["Tissue repair", "Gut health", "Joint recovery"],
  },
  {
    name: "TB-500",
    category: "Recovery",
    description: "Thymosin Beta-4",
    highlights: [
      "Promotes cellular migration and wound healing",
      "Enhances flexibility and reduces stiffness",
      "Often paired with BPC-157 for comprehensive recovery",
    ],
    benefits: ["Wound healing", "Flexibility", "Inflammation reduction"],
  },
  {
    name: "CJC-1295 / Ipamorelin",
    category: "Growth Hormone",
    description: "Gold standard GH secretagogue stack",
    highlights: [
      "Stimulates natural growth hormone release",
      "Supports body composition and fat loss",
      "Promotes deeper, more restorative sleep",
    ],
    benefits: ["Lean muscle", "Fat loss", "Deep sleep"],
  },
  {
    name: "Metabolic Reset",
    category: "Metabolic",
    description: "Next-generation metabolic optimization",
    highlights: [
      "Supports sustainable weight management",
      "Regulates appetite and satiety signals",
      "Improves body composition under physician supervision",
    ],
    benefits: ["Weight management", "Appetite regulation", "Body composition"],
  },
  {
    name: "PT-141",
    category: "Performance",
    description: "Bremelanotide for sexual health optimization",
    highlights: [
      "Works centrally on the nervous system",
      "Enhances arousal and performance",
      "Effective for both men and women",
    ],
    benefits: ["Libido enhancement", "Sexual performance", "Neural pathway"],
  },
  {
    name: "Sermorelin",
    category: "Growth Hormone",
    description: "GHRH analog for natural GH production",
    highlights: [
      "Stimulates your pituitary to produce more growth hormone",
      "Ideal for anti-aging and recovery protocols",
      "Supports energy and vitality",
    ],
    benefits: ["Anti-aging", "Recovery", "Energy"],
  },
  {
    name: "NAD+",
    category: "Longevity",
    description: "Nicotinamide adenine dinucleotide",
    highlights: [
      "Supports mitochondrial function and cellular energy",
      "Promotes DNA repair and cellular resilience",
      "Enhances cognitive clarity and focus",
    ],
    benefits: ["Cellular repair", "Mental clarity", "Energy"],
  },
];

const categoryColors: Record<string, string> = {
  Recovery: "bg-emerald-50 text-emerald-700",
  "Growth Hormone": "bg-blue-50 text-blue-700",
  Metabolic: "bg-amber-50 text-amber-700",
  Performance: "bg-purple-50 text-purple-700",
  Longevity: "bg-rose-50 text-rose-700",
};

export default function PeptideCatalog() {
  return (
    <section id="peptides" className="bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Peptide & Therapy Catalog
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Medical-grade peptides sourced from FDA-registered pharmacies. Every
            protocol is physician-supervised.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {peptides.map((peptide) => (
            <div
              key={peptide.name}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-teal-500/30 hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  {peptide.name}
                </h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${categoryColors[peptide.category] ?? "bg-slate-100 text-slate-600"}`}
                >
                  {peptide.category}
                </span>
              </div>
              <p className="mb-3 text-sm font-medium text-slate-700">
                {peptide.description}
              </p>
              <ul className="mb-4 flex-1 space-y-2">
                {peptide.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm leading-relaxed text-slate-600"
                  >
                    <DnaIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {peptide.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600"
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
