"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ContactModal } from "./ContactModal";

type SiteShellProps = {
  children: React.ReactNode;
};

const legalLinks = [
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/cookie", label: "Cookie" },
  { href: "/legal/refund", label: "Refund" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
];

export function SiteShell({ children }: SiteShellProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  const navigationLinks = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/contact", label: "Contact" },
      ...legalLinks,
    ],
    []
  );

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            <Image
              src="/traferr-logo.svg"
              alt="Traferr logo"
              width={64}
              height={64}
              className="h-9 w-auto"
            />
            <span>Traferr</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            Contact us
          </button>
        </div>
        <nav className="border-t border-slate-200 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl gap-4 overflow-x-auto px-4 py-3 text-sm text-slate-600">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="whitespace-nowrap transition hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:flex-row sm:justify-between">
          <div className="max-w-sm space-y-3">
            <p className="text-lg font-semibold text-slate-900">Traferr</p>
            <p className="text-sm text-slate-600">
              Connecting travelers with on-the-ground locals for unforgettable, trustworthy experiences.
            </p>
          </div>
          <div className="grid flex-1 gap-8 sm:grid-cols-2 sm:gap-12">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Explore</p>
              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <Link href="/" className="transition hover:text-slate-900">
                  Home
                </Link>
                <Link href="/contact" className="transition hover:text-slate-900">
                  Contact
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Legal</p>
              <div className="grid gap-2 text-sm text-slate-600">
                {legalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="transition hover:text-slate-900">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 bg-white/60">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Traferr. All rights reserved.</p>
            <p>Built with care for traveler-first communities.</p>
          </div>
        </div>
      </footer>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
