import type { Metadata } from "next";

type Section = { heading: string; content: string[] };

const DISCLAIMER_SECTIONS: ReadonlyArray<Section> = [
  {
    heading: "1. Informational purposes only",
    content: [
      "Content on Traferr—such as guides, recommendations, sample itineraries, pricing estimates, and availability signals—is provided for general information and planning convenience.",
      "Always verify visa requirements, entry rules, permits, health advisories, insurance needs, local regulations, and safety conditions with the relevant authorities or trusted sources before booking or travel.",
      "Nothing on Traferr constitutes legal, medical, tax, or professional travel advice. You should obtain advice from qualified professionals where appropriate.",
    ],
  },
  {
    heading: "2. Local partner independence",
    content: [
      "Local partners (“Localites”) are independent providers, not employees, agents, or representatives of Traferr. Listings, profiles, and statements are created or controlled by the Localites themselves unless otherwise indicated.",
      "Traferr does not supervise, direct, or control Localites’ work; availability, punctuality, quality, safety practices, and compliance remain the sole responsibility of the Localite.",
      "Background, license, and permit statuses—where shown—may rely on information provided by the Localite or third parties and can change over time. You should perform your own due diligence.",
    ],
  },
  {
    heading: "3. Organizer and traveler responsibility",
    content: [
      "Organizers and travelers are responsible for the selection of activities and Localites, the suitability of itineraries for participants, and ensuring adequate insurance coverage (e.g., medical, evacuation, liability, equipment).",
      "You are responsible for the conduct of your group, adherence to local laws and customs, and compliance with safety guidance from Localites, authorities, and landowners.",
      "You acknowledge that travel involves inherent risks (e.g., transport delays, weather, terrain, wildlife, illness, political disruptions). You agree to assess and accept these risks before participation.",
    ],
  },
  {
    heading: "4. Platform role & third-party services",
    content: [
      "Traferr operates a platform that facilitates discovery and communication between organizers/travelers and Localites. Except where explicitly stated, Traferr is not a party to the arrangements you enter into with Localites or other third parties.",
      "The platform may reference or link to third-party websites, apps, payment providers, mapping tools, messaging tools, or transportation operators. Traferr does not control and is not responsible for third-party content, terms, privacy practices, availability, or performance.",
      "Use of any third-party service is at your own discretion and subject to that provider’s terms and privacy policy.",
    ],
  },
  {
    heading: "5. Accuracy, availability, and changes",
    content: [
      "Traferr aims to keep content current, but availability, prices, regulations, and conditions can change without notice. We make no guarantee that platform information is complete, accurate, or up to date.",
      "The platform (and any feature) may be modified, suspended, or discontinued at any time. Temporary outages, maintenance windows, or errors may occur.",
    ],
  },
  {
    heading: "6. Health, safety, and emergency preparedness",
    content: [
      "You must evaluate your fitness and health for any activity and consult a healthcare professional if needed. Disclose relevant medical conditions to your organizer/Localite where appropriate.",
      "Carry required gear, medications, and documents, and maintain contingency plans (e.g., local emergency numbers, meeting points, backups for connectivity and payments).",
    ],
  },
  {
    heading: "7. Limitation of liability",
    content: [
      "To the maximum extent permitted by applicable law, Traferr is not liable for losses or damages arising from reliance on platform content; acts or omissions of Localites, travelers, organizers, or third parties; force majeure events; or risks inherent to travel and outdoor activities.",
      "Where liability cannot be excluded by law, it will be limited to the extent permitted, which may include limiting remedies to re-supply of services or the cost of re-supply.",
    ],
  },
  {
    heading: "8. Jurisdiction & conflicts",
    content: [
      "This Disclaimer should be read together with Traferr’s Terms of Use, Privacy Policy, and Refunds & Cancellations Policy. If there is any conflict, the Terms of Use prevail to the extent of the conflict.",
      "Use of Traferr and any dispute arising from it are subject to the governing law and venue stated in the Terms of Use.",
    ],
  },
  {
    heading: "9. Contact",
    content: [
      "Questions about this Disclaimer or platform content? Contact support@traferr.com. For emergencies, contact local emergency services first.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Disclaimer — Traferr",
  description:
    "Important information about Traferr’s limited role, independent Localites, inherent travel risks, and your responsibilities when planning and participating in activities.",
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
            Traferr connects organizers and travelers with independent local partners. This Disclaimer clarifies Traferr’s
            limited role, the independence of Localites, and your responsibilities when using the platform.
          </p>
        </header>

        <div className="space-y-8">
          {DISCLAIMER_SECTIONS.map((section) => (
            <section key={`disclaimer-${section.heading}`} className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
              {section.content.map((paragraph, i) => (
                <p key={`disclaimer-${section.heading}-${i}`} className="text-sm text-slate-600">
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
