import { Stethoscope } from "lucide-react";

// TODO: Replace with real physician data before launch
const physicians = [
  {
    name: "Dr. Ladynez Espinal, MD",
    title: "Board Certified Medical Director",
    photo: "/team/dr-headshot.jpg",
    bio: "Our Board Certified medical director combines evidence-based medicine with a deep understanding of human performance optimization. Every protocol is personally designed and monitored — because your health deserves physician-level attention, not a cookie-cutter approach.",
  },
];

export default function OurTeam() {
  return (
    <section id="team" className="bg-cream-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Meet Your <span className="text-teal-700">Medical Director</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Our Board Certified medical director leads every protocol with
            precision and care.
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
