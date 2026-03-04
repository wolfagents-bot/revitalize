import { Award, GraduationCap, Stethoscope } from "lucide-react";

// TODO: Replace with real physician data before launch
const physicians = [
  {
    name: "Dr. [First] [Last], MD",
    title: "Founder & Medical Director",
    photo: null as string | null, // Replace with: "/team/dr-last.jpg"
    credentials: [
      "Board Certified — Internal Medicine",
      "Fellowship: Sports & Performance Medicine",
      "Member, American Academy of Anti-Aging Medicine (A4M)",
    ],
    yearsExperience: 15,
    bio: "With over 15 years of clinical experience, our medical director combines evidence-based medicine with a deep understanding of human performance optimization. Every protocol is personally designed and monitored — because your health deserves physician-level attention, not a cookie-cutter approach.",
  },
];

export default function OurTeam() {
  return (
    <section id="team" className="bg-cream-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Meet Your <span className="text-teal-700">Physician</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Board-certified, fellowship-trained, and obsessed with optimization.
            You&apos;ll work directly with your doctor — not a health coach or
            PA.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          {physicians.map((physician) => (
            <div
              key={physician.name}
              className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-10 shadow-sm"
            >
              <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                {/* Photo placeholder */}
                <div className="flex h-48 w-48 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-teal-50">
                  {physician.photo ? (
                    <img
                      src={physician.photo}
                      alt={`Photo of ${physician.name}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Stethoscope aria-hidden="true" className="h-16 w-16 text-teal-300" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {physician.name}
                  </h3>
                  <p className="mt-1 font-medium text-teal-700">
                    {physician.title}
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {physician.bio}
                  </p>

                  {/* Credentials */}
                  <div className="mt-6 space-y-2">
                    {physician.credentials.map((cred) => (
                      <div key={cred} className="flex items-start gap-2">
                        <Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-700" />
                        <span className="text-sm text-slate-600">{cred}</span>
                      </div>
                    ))}
                  </div>

                  {/* Years badge */}
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-700">
                    <GraduationCap className="h-4 w-4" />
                    {physician.yearsExperience}+ Years of Clinical Experience
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
