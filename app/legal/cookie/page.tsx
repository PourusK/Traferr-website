import type { Metadata } from "next";

const sections = [
  {
    heading: "1. What cookies are",
    content: [
      "Cookies are small text files stored on your device to help Traferr remember your preferences and understand how you interact with the platform.",
      "We use both session cookies (which expire when you close your browser) and persistent cookies (which stay until you delete them).",
    ],
  },
  {
    heading: "2. How we use cookies",
    content: [
      "Essential cookies keep you signed in, maintain security, and ensure the platform functions properly.",
      "Analytics cookies help us learn how organizers and locals use Traferr so we can improve the experience.",
    ],
  },
  {
    heading: "3. Managing preferences",
    content: [
      "Most browsers allow you to control cookies through settings. You may choose to block cookies, but some features may no longer work as intended.",
      "You can also opt out of analytics cookies in your Traferr profile settings.",
    ],
  },
  {
    heading: "4. Updates",
    content: [
      "We may update this cookie policy as we introduce new features. We will notify you of changes through the platform or email.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Cookie Policy — Traferr",
  description: "Understand how Traferr uses cookies to deliver a tailored travel coordination experience.",
};

export default function CookiePage() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto w-full max-w-3xl space-y-10 rounded-3xl border border-slate-200 bg-white/95 p-10 shadow-xl shadow-slate-200/60">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Cookie policy</p>
          <h1 className="text-3xl font-semibold text-slate-900">Traferr Cookie Policy</h1>
          <p className="text-sm text-slate-500">Effective January 1, 2025</p>
          <p className="text-base text-slate-600">
            This policy explains why Traferr uses cookies, what types we rely on, and how you can manage your preferences as you build with local partners.
          </p>
        </header>
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
              {section.content.map((paragraph) => (
                <p key={paragraph} className="text-sm text-slate-600">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
