import type { Metadata } from "next";

const sections = [
  {
    heading: "1. Informational purposes only",
    content: [
      "Content on Traferr—such as guides, recommendations, or sample itineraries—is provided for general information purposes.",
      "You should verify any travel requirements, safety conditions, or local regulations before finalizing plans.",
    ],
  },
  {
    heading: "2. Local partner responsibility",
    content: [
      "Local partners are independent professionals. Traferr is not responsible for their statements, availability, or actions during an experience.",
      "We encourage organizers to conduct due diligence and maintain appropriate insurance coverage for activities.",
    ],
  },
  {
    heading: "3. Limitation of liability",
    content: [
      "Traferr is not liable for losses arising from reliance on information in the platform, except where required by law.",
      "By using Traferr, you acknowledge these limitations and agree to use your own judgment when coordinating travel.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Disclaimer — Traferr",
  description: "Understand the limits of Traferr’s responsibilities and the independence of local partners.",
};

export default function DisclaimerPage() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto w-full max-w-3xl space-y-10 rounded-3xl border border-slate-200 bg-white/95 p-10 shadow-xl shadow-slate-200/60">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Disclaimer</p>
          <h1 className="text-3xl font-semibold text-slate-900">Traferr Disclaimer</h1>
          <p className="text-sm text-slate-500">Effective January 1, 2025</p>
          <p className="text-base text-slate-600">
            Traferr brings organizers and local partners together. This disclaimer clarifies the limits of our obligations and the responsibilities you hold when using the platform.
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
