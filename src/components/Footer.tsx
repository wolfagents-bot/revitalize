export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white"
            >
              REVITALIZE<span className="text-teal-400">.</span>
            </a>
            <p className="mt-1 text-sm text-slate-500">
              Physician-Led Performance Medicine
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="#services"
              className="text-sm text-slate-400 transition-colors hover:text-teal-400"
            >
              Services
            </a>
            <a
              href="#peptides"
              className="text-sm text-slate-400 transition-colors hover:text-teal-400"
            >
              Peptides
            </a>
            <a
              href="#faq"
              className="text-sm text-slate-400 transition-colors hover:text-teal-400"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-400 transition-colors hover:text-teal-400"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <a
            href="/privacy"
            className="text-sm text-slate-400 transition-colors hover:text-teal-400"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-sm text-slate-400 transition-colors hover:text-teal-400"
          >
            Terms of Service
          </a>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-8">
          <p className="text-center text-xs leading-relaxed text-slate-400">
            Disclaimer: The information provided on this website is for
            educational purposes only and is not intended as medical advice. All
            treatments are prescribed and supervised by a licensed physician.
            Results may vary. Peptide therapies are prescribed off-label and
            sourced from FDA-registered compounding pharmacies.
          </p>
          <p className="mt-4 text-center text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Revitalize Performance Medicine.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
