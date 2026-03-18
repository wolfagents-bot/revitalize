import { Dna, Atom, Heart, RotateCw, Waves } from "lucide-react";

const pillars = [
  {
    label: "Regenerate",
    icon: Dna,
    gradient: "from-teal-400 to-emerald-500",
    iconColor: "text-white/90",
  },
  {
    label: "Repair",
    icon: Atom,
    gradient: "from-sky-400 to-teal-500",
    iconColor: "text-white/90",
  },
  {
    label: "Revive",
    icon: Heart,
    gradient: "from-amber-400 to-teal-500",
    iconColor: "text-white/90",
  },
  {
    label: "Renew",
    icon: RotateCw,
    gradient: "from-teal-400 to-cyan-400",
    iconColor: "text-white/90",
  },
  {
    label: "Rebalance",
    icon: Waves,
    gradient: "from-sky-400 to-indigo-500",
    iconColor: "text-white/90",
  },
] as const;

export default function BrandPillars() {
  return (
    <section
      aria-label="Brand pillars"
      className="bg-cream-50 py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {pillars.map(({ label, icon: Icon, gradient, iconColor }) => (
            <li key={label} className="flex">
              <div
                className="group flex w-full cursor-default flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-md"
              >
                {/* Gradient image area */}
                <div
                  className={`relative flex h-[200px] items-center justify-center bg-gradient-to-br ${gradient}`}
                  aria-hidden="true"
                >
                  {/* Subtle radial overlay for depth */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                  <Icon
                    size={48}
                    strokeWidth={1.25}
                    className={`${iconColor} drop-shadow-sm transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>

                {/* Label */}
                <div className="flex flex-1 items-center justify-center px-4 py-5">
                  <h3
                    className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-teal-700"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {label}
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
