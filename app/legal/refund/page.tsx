import type { Metadata } from "next";

const sections = [
  {
    heading: "1. Eligibility",
    content: [
      "Refund requests must be submitted within 14 days of the scheduled experience if a local partner is unable to deliver the promised service.",
      "To help us review your request quickly, include booking references and any supporting context from travelers.",
    ],
  },
  {
    heading: "2. Review process",
    content: [
      "Our team collaborates with local partners to verify details and, where possible, reschedule or offer alternative experiences.",
      "If a refund is approved, we will process it to the original payment method within 7 business days.",
    ],
  },
  {
    heading: "3. Exceptions",
    content: [
      "Refunds are not available for experiences impacted by force majeure events or traveler no-shows without prior notice.",
      "We may issue partial credits when services were partially delivered but did not meet expectations.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Refund Policy — Traferr",
  description: "Review how Traferr handles refund requests for traveler experiences.",
};

export default function RefundPage() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto w-full max-w-3xl space-y-10 rounded-3xl border border-slate-200 bg-white/95 p-10 shadow-xl shadow-slate-200/60">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Refund policy</p>
          <h1 className="text-3xl font-semibold text-slate-900">Traferr Refund Policy</h1>
          <p className="text-sm text-slate-500">Effective January 1, 2025</p>
          <p className="text-base text-slate-600">
            We design every journey to go smoothly. When plans change, this policy explains how we evaluate refund and credit requests.
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
