import { Shield, Microscope, UserCheck, Clock } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Physician-Led",
    description:
      "Every protocol is designed, supervised, and adjusted by a licensed physician. Not a nurse practitioner. Not a health coach. A doctor.",
  },
  {
    icon: Microscope,
    title: "Data-Driven",
    description:
      "We don't guess. 80+ biomarker panels, quarterly monitoring, and objective tracking ensure your protocol is working — or we change it.",
  },
  {
    icon: UserCheck,
    title: "Personalized Protocols",
    description:
      "No cookie-cutter programs. Your biochemistry is unique, and your protocol should be too. We build around your labs, goals, and lifestyle.",
  },
  {
    icon: Clock,
    title: "Ongoing Optimization",
    description:
      "This isn't a one-time visit. We monitor, adjust, and optimize continuously. Direct physician access whenever you need it.",
  },
];

export default function WhyRevitalize() {
  return (
    <section className="bg-navy-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Why Choose{" "}
              <span className="text-teal-400">Revitalize</span>?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Most clinics hand you a script and send you on your way. We built
              Revitalize because you deserve better — a physician partner who
              treats your optimization like the serious medical endeavor it is.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
            >
              Schedule Your Free Consultation
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-xl border border-white/5 bg-navy-900/50 p-6"
              >
                <div className="mb-3 inline-flex rounded-lg bg-teal-500/10 p-2.5">
                  <reason.icon className="h-5 w-5 text-teal-400" />
                </div>
                <h3 className="mb-2 font-semibold text-white">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
