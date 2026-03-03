import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl border border-teal-700/20 bg-gradient-to-br from-teal-700 to-teal-800">
          <div className="grid lg:grid-cols-2">
            {/* Left - CTA */}
            <div className="p-10 lg:p-14">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Ready to{" "}
                <span className="text-teal-100">Optimize</span>?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-teal-100">
                Book your free consultation. We&apos;ll review your health
                history, discuss your goals, and determine if our program is the
                right fit.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-teal-100">
                  <Mail className="h-5 w-5 text-white" />
                  <span>hello@revitalize.health</span>
                </div>
                <div className="flex items-center gap-3 text-teal-100">
                  <Phone className="h-5 w-5 text-white" />
                  <span>(555) 000-0000</span>
                </div>
                <div className="flex items-center gap-3 text-teal-100">
                  <MapPin className="h-5 w-5 text-white" />
                  <span>Virtual & In-Person Available</span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white/10 p-10 lg:p-14">
              <form aria-label="Contact form" className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-teal-100">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-teal-200/60 focus:border-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-teal-100">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-teal-200/60 focus:border-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-teal-100">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-teal-200/60 focus:border-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-300"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-teal-100">
                    What are your goals?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-teal-200/60 focus:border-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-300"
                    placeholder="Tell us about your health goals, what you're looking to optimize..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-white py-3.5 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50"
                >
                  Book Free Consultation
                </button>
                <p className="text-center text-xs text-teal-200">
                  No obligation. We&apos;ll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
