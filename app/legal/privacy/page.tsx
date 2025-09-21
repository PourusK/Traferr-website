import type { Metadata } from "next";

const sections = [
  {
    heading: "0. Scope & Consent",
    content: [
      "This Privacy Policy applies to Traferr, available on the Google Play Store and Apple iOS App Store. By using the application, you consent to the practices described here.",
      "‘NOVAZREHH TECH SOLUTIONS PVT. LTD.’ (the “Company”) respects your right to privacy. Personal information you voluntarily provide will be handled with high standards of security and confidentiality and used strictly to deliver services on the application.",
      "The Company may change, modify, add, or delete portions of this Privacy Policy at any time, with immediate effect upon posting.",
    ],
  },
  {
    heading: "1. Collection and Use of Your Personal Information",
    content: [
      "a) Service delivery & improvement: We use personal data you provide (including contact number, user phone book, location, device ID, user name, display name, status, display pictures, posts, and comments) to provide services and products, conduct credit checks where applicable, and understand how to improve our services. We may conduct internal research on user demographics, interests, and behavior and provide updates we believe may interest you.",
      "a) Personalization & vendors: We may combine information with data from other services or third parties to improve user experience, including customized content and advertising. Third-party vendors engaged by the Company must comply with this Privacy Policy when assisting with research, analysis, or technology. We may share information in limited circumstances for national security and integrity or pursuant to an order from a court or competent authority.",
      "b) Messages & media: In the ordinary course, we do not retain your messages (including chats, photos, videos, voice messages, files, and shared location information) for longer than six (6) months from transmission. Messages are stored on your device and as data on our database. To improve performance and deliver media efficiently (e.g., popular photos/videos), we may retain that content on our servers for longer.",
      "c) Contacts & groups: To help you communicate, we may create a ‘recently communicated’ or ‘top engagement’ list, and you can create, join, or be added to groups and broadcast lists that are associated with your account.",
      "d) Support: You may provide information related to your use of our services (including message copies) and contact details so we can provide customer support (e.g., you may email us about app performance).",
      "e) Diagnostics, device & activity: We collect service-related, diagnostic, and performance information (e.g., usage patterns, log files, crash/website/performance logs and reports), payment receipts (including from app stores or other processors), device-specific data (hardware model, OS, browser, IP address, mobile network, device identifiers), and device location if you choose to share or use location features. We use cookies to remember choices (such as language) and customize services. We also record online/status changes (your ‘activity status’), last active time, and status message updates. Learn more about cookies at www.traferr.com.",
      "f) Third-party information: We receive information through other people or third-party service providers/services/servers when you or we use those services or interact with others (e.g., your phone number from their address book) and reports that help diagnose and fix issues. Your use of third-party services is governed by their terms and privacy policies.",
      "g) IP address & public areas: We may use your IP address to diagnose server issues and administer the application. If you do not want your personal information displayed to third-party visitors, please contact the Company. Information disclosed in public areas of the application becomes public; exercise caution when posting.",
      "h) Purposes: We use information to enable application features and services (including Company websites and services from affiliates, service providers, business partners, and advertisers), to record information as required under law, to serve promotional and advertising materials, and for content recommendations, transactional emails, direct marketing, and online/offline advertising for the Company, its parent, subsidiaries, affiliates, and joint ventures. You may choose not to participate in promotions. Promotions may be sponsored or co-sponsored and some or all data collected may be shared with sponsors.",
      "i) Traffic data & advertising: We log basic technical information (browser/platform, domain, referral data) and process aggregate activity for statistics that do not identify you. We also use third-party advertising companies to serve ads; they may use non-personally identifiable information about your visits to this and other sites to provide ads of interest. Contact the Company for information about choices regarding this practice.",
    ],
  },
  {
    heading: "2. Compliance with Laws",
    content: [
      "a) Legal requests & safety: We cooperate with mandated government and law-enforcement agencies or third parties by order of law. We may disclose information without permission if necessary or appropriate to respond to legal process, protect the rights/property of the application or third parties, protect public safety, or prevent/stop illegal, unethical, or legally actionable activity. We may provide information to tax authorities upon demand.",
      "b) Security: While we strive to protect personal information, no internet transmission is completely secure. You transmit information at your own risk. Once received, we use reasonable endeavors to ensure security on our systems. Nothing in this policy creates a contract between the Company and any user providing identifiable information.",
      "c) Limitation of liability: We will take necessary steps to comply with this Privacy Policy; however, to the extent permitted by law, nothing herein is intended to hold the Company liable for any failure to comply.",
    ],
  },
  {
    heading: "3. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Changes take effect immediately upon posting within the application or on associated websites. Continued use of Traferr after changes means you accept the updated policy.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy — Traferr",
  description:
    "How NOVAZREHH TECH SOLUTIONS PVT. LTD. collects, uses, and protects information on the Traferr application.",
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
            We believe every traveler deserves privacy and transparency. This policy explains what we collect, why we collect it, and how we keep it safe across the Traferr network.
          </p>
        </header>
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
              {section.content.map((paragraph, i) => (
                <p key={i} className="text-sm text-slate-600">
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
