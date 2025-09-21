import type { Metadata } from "next";

const sections = [
  {
    heading: "1. Scope & Acceptance",
    content: [
      "This Refunds & Cancellations Policy applies to purchases made in the Traferr application on Google Play and Apple iOS App Store.",
      "By making a purchase on Traferr, you agree to this policy in addition to our Terms of Use and Privacy Policy.",
    ],
  },
  {
    heading: "2. No General Refunds",
    content: [
      "All purchases on Traferr are final and non-refundable.",
      "We do not offer refunds or exchanges for Localite Packs, subscriptions, service credits, or any completed or delivered services.",
    ],
  },
  {
    heading: "3. Case-by-Case Consideration",
    content: [
      "While refunds are generally not offered, you may contact us to request a review on a case-by-case basis at support@traferr.com.",
      "Submitting a request does not guarantee approval. Decisions are solely at Traferr’s discretion.",
    ],
  },
  {
    heading: "4. How to Request a Review",
    content: [
      "Email: support@traferr.com with the subject “Refund Request”.",
      "Include: full name, registered phone/email, order ID, purchase date/time, amount, description of the issue, and any evidence (screenshots, receipts, chat logs).",
      "Timing: Please contact us within 7 days of the transaction to be eligible for a review.",
    ],
  },
  {
    heading: "5. Evaluation Criteria (Illustrative, Not Exhaustive)",
    content: [
      "Duplicate charges for the same order.",
      "Clear technical errors causing a purchase you did not intend (verifiable app/store logs).",
      "Fraudulent or unauthorized transactions (subject to verification with payment provider and platform policies).",
      "Non-delivery of a paid service due to a confirmed issue on Traferr’s side (not caused by device, connectivity, or user actions).",
    ],
  },
  {
    heading: "6. Non-Refundable Situations (Examples)",
    content: [
      "Change of mind or unused time/credits after purchase.",
      "Issues caused by device incompatibility, poor connectivity, or user account breaches due to weak credentials.",
      "Completed consultations/services with Localites, or services partially delivered where value has been received.",
      "Promotions, discounts, vouchers, bonus credits, convenience fees, taxes, or currency conversion charges.",
    ],
  },
  {
    heading: "7. Subscriptions & Auto-Renewals",
    content: [
      "Subscriptions renew automatically unless cancelled before the renewal date in your app store settings.",
      "Cancelling stops future renewals; it does not grant a refund for the current term. Access continues until the term ends.",
    ],
  },
  {
    heading: "8. Processing Approved Refunds",
    content: [
      "If a refund is approved, we will initiate it within 5–7 working days of approval.",
      "Funds typically appear in the original payment method within 5–7 working days thereafter, subject to your bank/payment provider.",
      "We may refund in the original currency; exchange rates and third-party fees are outside our control.",
    ],
  },
  {
    heading: "9. Chargebacks & Disputes",
    content: [
      "Please contact Traferr first to resolve issues. Unwarranted chargebacks may result in account suspension.",
      "If a chargeback is filed, Traferr may provide evidence to the payment provider. Final outcomes follow the provider’s policies.",
    ],
  },
  {
    heading: "10. Localite Packs & Third-Party Services",
    content: [
      "Traferr facilitates connections between Travelers and Localites. Payments to Localites are governed by the Terms of Use.",
      "Where third-party providers are involved, their policies may apply in addition to this policy.",
    ],
  },
  {
    heading: "11. Abuse Prevention",
    content: [
      "We may decline requests that show signs of misuse, fraud, or repeated refund attempts, and may limit or terminate account access per the Terms of Use.",
    ],
  },
  {
    heading: "12. Legal & Jurisdiction",
    content: [
      "Nothing in this policy limits any non-waivable statutory rights you may have under applicable law.",
      "This policy is governed by the laws of India, with exclusive jurisdiction of courts in Mumbai, as set out in our Terms of Use.",
    ],
  },
  {
    heading: "13. Updates to this Policy",
    content: [
      "We may update this policy at any time by posting a revised version in the app or on our website. Changes take effect immediately upon posting.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Refunds & Cancellations — Traferr",
  description:
    "Traferr’s refund and cancellation rules, including no-refund default, case-by-case reviews, timelines, and processing details.",
};

export default function RefundPolicyPage() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto w-full max-w-3xl space-y-10 rounded-3xl border border-slate-200 bg-white/95 p-10 shadow-xl shadow-slate-200/60">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Policy</p>
          <h1 className="text-3xl font-semibold text-slate-900">Refunds & Cancellations</h1>
          <p className="text-sm text-slate-500">Effective January 1, 2025</p>
          <p className="text-base text-slate-600">
            Purchases on Traferr are final. In limited cases, you can contact us for a discretionary review.
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
