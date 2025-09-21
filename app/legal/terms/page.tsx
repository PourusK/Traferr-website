import type { Metadata } from "next";

const sections = [
  {
    heading: "1. Agreement",
    content: [
      "These Terms govern your access to and use of Traferr’s platform, tools, and services. By using Traferr you agree to follow these Terms and all applicable laws.",
      "If you represent an organization, you confirm that you have authority to bind your team to these Terms and that you will ensure all team members comply.",
    ],
  },
  {
    heading: "2. Accounts and eligibility",
    content: [
      "You must be at least 18 years old to create a Traferr account. Keep your credentials secure and notify us immediately of any unauthorized activity.",
      "We may suspend or terminate accounts that violate these Terms, misuse local partnerships, or put travelers at risk.",
    ],
  },
  {
    heading: "3. Use of services",
    content: [
      "Use Traferr to coordinate authentic travel experiences, not for unlawful or misleading activities.",
      "You are responsible for the conduct of your travelers and local partners when operating through Traferr.",
    ],
  },
  {
    heading: "4. Payments and fees",
    content: [
      "Payouts to local partners and fees for your organization are displayed transparently in your Traferr dashboard.",
      "You authorize Traferr to process transactions through trusted payment providers on your behalf.",
    ],
  },
  {
    heading: "5. Liability",
    content: [
      "Traferr is provided “as-is.” We are not liable for indirect, incidental, or consequential damages arising from use of the platform.",
      "Some jurisdictions do not allow limitations on liability; in those cases these limitations apply only to the extent permitted by law.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Terms of Usage — Traferr",
  description: "Understand the terms of usage that guide how you use Traferr and engage with local partners.",
};

export default function TermsPage() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto w-full max-w-3xl space-y-10 rounded-3xl border border-slate-200 bg-white/95 p-10 shadow-xl shadow-slate-200/60">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Terms of usage</p>
          <h1 className="text-3xl font-semibold text-slate-900">Traferr Terms of Usage</h1>
          <p className="text-sm text-slate-500">Effective January 1, 2025</p>
          <p className="text-base text-slate-600">
            These Terms outline how you, your travelers, and your local partners may use Traferr. Please read them carefully before launching new experiences with us.
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
