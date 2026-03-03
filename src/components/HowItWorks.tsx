import {
  MessageSquare,
  TestTubeDiagonal,
  ClipboardList,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Free Consultation",
    description:
      "We start with a conversation about your health history, goals, and what optimization means to you. No commitment, no pressure.",
  },
  {
    icon: TestTubeDiagonal,
    step: "02",
    title: "Comprehensive Labs",
    description:
      "We order an 80+ biomarker panel to get a complete picture. No guessing — every decision is data-driven.",
  },
  {
    icon: ClipboardList,
    step: "03",
    title: "Custom Protocol",
    description:
      "Your physician builds a personalized protocol based on your labs, goals, and lifestyle. Peptides, hormones, supplements — all calibrated to you.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Optimize & Monitor",
    description:
      "Ongoing monitoring with quarterly labs, protocol adjustments, and direct physician access. We iterate until you're performing at your peak.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-navy-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Your Path to Optimization
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            A simple, structured process from initial consultation to peak
            performance.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-teal-500/40 to-transparent lg:block" />
              )}
              <div className="relative rounded-2xl border border-white/5 bg-navy-900/50 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex rounded-xl bg-teal-500/10 p-3">
                    <step.icon className="h-5 w-5 text-teal-400" />
                  </div>
                  <span className="text-4xl font-bold text-white/5">
                    {step.step}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
