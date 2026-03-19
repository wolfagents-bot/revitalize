import Image from "next/image";

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
                <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-200">
                  <Image
                    src={physician.photo}
                    alt={`Dr. Ladynez Espinal, Board Certified Medical Director`}
                    fill
                    sizes="192px"
                    className="object-cover"
                    priority
                  />
                </div>

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
