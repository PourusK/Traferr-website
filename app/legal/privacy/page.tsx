import type { Metadata } from "next";

const sections = [
  {
    heading: "1. Information we collect",
    content: [
      "We collect information you provide directly—like contact details, itineraries, and payment preferences—plus technical data about how you use Traferr.",
      "We only collect data that helps deliver and improve the platform for travelers, local partners, and organizers.",
    ],
  },
  {
    heading: "2. How we use data",
    content: [
      "Data powers features like availability matching, secure payouts, and tailored communications.",
      "We do not sell personal data. We may share limited information with trusted vendors to operate Traferr.",
    ],
  },
  {
    heading: "3. Your choices",
    content: [
      "You can request access, updates, or deletion of your personal data by emailing privacy@traferr.com.",
      "Adjust notification settings in your dashboard to control how we communicate with you.",
    ],
  },
  {
    heading: "4. Data retention",
    content: [
      "We retain data only as long as necessary to provide services, comply with legal obligations, or resolve disputes.",
      "When retention is no longer required, we delete or anonymize your data consistent with industry best practices.",
    ],
  },
  {
    heading: "5. International transfers",
    content: [
      "Traferr may process data in countries different from where you live. We rely on safeguards like Standard Contractual Clauses when transferring data.",
      "By using Traferr, you consent to these transfers and our compliance measures.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy — Traferr",
  description: "Learn how Traferr collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto w-full max-w-3xl space-y-10 rounded-3xl border border-slate-200 bg-white/95 p-10 shadow-xl shadow-slate-200/60">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Privacy</p>
          <h1 className="text-3xl font-semibold text-slate-900">Traferr Privacy Policy</h1>
          <p className="text-sm text-slate-500">Effective January 1, 2025</p>
          <p className="text-base text-slate-600">
            We believe every traveler deserves privacy and transparency. This policy describes the data we collect and how we safeguard it across the Traferr network.
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
