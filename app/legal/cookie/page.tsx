import type { Metadata } from "next";

type Section = { heading: string; content: (string | JSX.Element)[] };

const sections: Section[] = [
  {
    heading: "0. Company & App Store Availability",
    content: [
      (() => {
        const anyStore = GOOGLE_PLAY_URL || APP_STORE_URL || INDUS_STORE_URL;
        return anyStore ? (
          <>
            The terms “Company,” “we,” or “us” refer to the owner of the application, Traferr. Traferr is available for
            download on major app stores including{" "}
            {GOOGLE_PLAY_URL ? (
              <a href={GOOGLE_PLAY_URL} className="underline" target="_blank" rel="noopener noreferrer">
                Google Play
              </a>
            ) : (
              "Google Play (reference)"
            )}
            {", "}
            {APP_STORE_URL ? (
              <a href={APP_STORE_URL} className="underline" target="_blank" rel="noopener noreferrer">
                Apple App Store
              </a>
            ) : (
              "Apple App Store (reference)"
            )}
            {", and "}
            {INDUS_STORE_URL ? (
              <a href={INDUS_STORE_URL} className="underline" target="_blank" rel="noopener noreferrer">
                Indus App Store
              </a>
            ) : (
              "Indus App Store (reference)"
            )}
            .
          </>
        ) : (
          "The terms “Company,” “we,” or “us” refer to the owner of the application, Traferr. Traferr is available for download on major app stores."
        );
      })(),
      "References to download locations are for convenience only and do not change how this Privacy Policy applies to your use of Traferr.",
    ],
  },
  {
    heading: "1. Cookies & Similar Technologies",
    content: [
      "We use cookies and similar technologies (e.g., local storage, SDKs, pixels, web beacons) to remember your preferences, understand usage patterns, improve performance, keep your session secure, and personalize content.",
      "Your choices: most browsers and devices let you block or delete cookies and local storage. If you accept cookies, you consent to our use of information collected via those cookies. If you reject certain cookies, some features may not work properly.",
      "Where required by law (e.g., in the EEA/UK), we will ask for your consent for non-essential cookies and provide a way to withdraw it at any time via a cookie banner or settings.",
    ],
  },
  {
    heading: "2. Third-Party Sites, SDKs & Advertising",
    content: [
      "Traferr may link to third-party websites or integrate third-party SDKs and services (e.g., analytics, crash reporting, payments, customer support, advertising). These providers may collect information such as your IP address, device identifiers, app interactions, approximate location, and in some cases set or read their own cookies or storage.",
      "These third parties process data under their own privacy policies and terms; we do not control their technologies. We select vendors with appropriate safeguards and limit sharing to what’s necessary to operate Traferr, measure performance, prevent fraud, and (where applicable) personalize content/ads.",
      "You can learn more or opt out where offered by the provider (for example, in-app settings, device settings like “Limit Ad Tracking,” or platform-level ad preferences). If you have concerns about a particular integration, contact us and we’ll help identify the relevant provider.",
    ],
  },
  {
    heading: "3. Global Privacy Rights (GDPR/EEA/UK, CCPA/CPRA, India DPDP, etc.)",
    content: [
      "Depending on your location, you may have rights to access, correct, delete, port, or restrict/opt-out of certain processing of your personal data, and to withdraw consent where processing is based on consent.",
      "Legal bases (GDPR/UK GDPR): we process data where necessary for (i) performance of a contract (providing Traferr), (ii) our legitimate interests (e.g., security, analytics, product improvement, preventing fraud), (iii) compliance with legal obligations, and (iv) your consent (e.g., certain cookies/marketing).",
      "Marketing/Profiling: where required, we seek consent before using non-essential cookies or sending direct marketing. You can unsubscribe from emails or adjust in-app notifications at any time.",
      "Data transfers: when transferring personal data internationally, we use appropriate safeguards (e.g., Standard Contractual Clauses and equivalent measures) and assess local laws to protect your data.",
      "CCPA/CPRA (California): we do not ‘sell’ personal information for monetary value. Some uses may be considered ‘sharing’ for cross-context behavioral advertising—you can opt out where applicable. We honor verifiable consumer requests as required by law.",
      "India DPDP: we process personal data in accordance with the Digital Personal Data Protection Act, 2023, including lawful purposes, consent where required, and reasonable security practices.",
      "How to exercise your rights: email privacy@traferr.com with your request, and we’ll respond consistent with applicable law. We may need to verify your identity and location before fulfilling a request.",
    ],
  },
  {
    heading: "4. Contact & Data Protection",
    content: [
      "Primary contact: privacy@traferr.com.",
      "If we appoint a Data Protection Officer or an EU/UK representative, we will publish their contact details here.",
      "For complaints, you may also contact your local data protection authority. We encourage you to reach out to us first so we can try to resolve your concern.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy — Traferr",
  description:
    "Learn how Traferr collects, uses, and protects your information, including cookies, third-party technologies, and your global privacy rights.",
};

export default function PrivacyPolicyAddendumPage() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto w-full max-w-3xl space-y-10 rounded-3xl border border-slate-200 bg-white/95 p-10 shadow-xl shadow-slate-200/60">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Privacy</p>
          <h1 className="text-3xl font-semibold text-slate-900">Traferr Privacy Addendum</h1>
          <p className="text-sm text-slate-500">Effective January 1, 2025</p>
          <p className="text-base text-slate-600">
            This addendum clarifies store availability, cookies and similar technologies, third-party integrations,
            and your global privacy rights. It should be read together with the main Privacy Policy.
          </p>
        </header>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
              {section.content.map((paragraph, i) => (
                <p key={`${section.heading}-${i}`} className="text-sm text-slate-600">
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
