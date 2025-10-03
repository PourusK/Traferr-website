import Link from "next/link";

const legalLinks = [
  { href: "/legal/cookie", label: "Cookie" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/refund", label: "Refund Policy" },
  { href: "/legal/terms", label: "Terms of Usage" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/80">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center text-lg font-semibold tracking-tight text-white"
            >
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Traferr
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Conversations powered by locals who live the city every day. We&apos;re here to make travel feel human again.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              Legal
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-slate-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              FAQ &amp; Support
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Explore answers from the Traferr team or reach out directly—we&apos;re always listening.
            </p>
            <div className="flex flex-col gap-2 text-sm font-semibold">
              <Link
                href="/faq"
                className="inline-flex items-center text-sky-300 transition hover:text-sky-200"
              >
                Browse FAQs
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center text-sky-300 transition hover:text-sky-200"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              Contact
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <address className="not-italic leading-relaxed">
                Proudly Indian
                <br /> Jogeshwari, Mumbai
              </address>
              <a
                href="mailto:contact@traferr.com"
                className="block transition hover:text-slate-100"
              >
                contact@traferr.com
              </a>
              <a href="tel:+919096171258" className="block transition hover:text-slate-100">
                +91 90961 71258
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800/70 pt-6">
          <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Traferr by Novazrehh Tech Solutions. All rights reserved.</p>
            <p>Crafted for travelers who value people, not feeds.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
