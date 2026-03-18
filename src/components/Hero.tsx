import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-cream-50 pt-20">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-[400px] w-[400px] rounded-full bg-teal-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
        <div className="mb-6 inline-flex items-center rounded-full border border-gold-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-700">
          Physician-Led Performance Medicine
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
          Unlock Your Body&apos;s{" "}
          <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
            Full Potential
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
          Advanced peptide therapy, exosome therapy, and comprehensive
          bloodwork — all personalized to your unique biochemistry by a licensed
          physician.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-teal-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/25"
          >
            Start Your Journey
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="/#services"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-8 py-4 text-lg font-medium text-slate-600 transition-colors hover:border-teal-500 hover:text-teal-700"
          >
            Explore Services
          </a>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-8 border-t border-slate-200 pt-10">
          {[
            { value: "500+", label: "Patients Optimized" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "15+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-teal-700 md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
