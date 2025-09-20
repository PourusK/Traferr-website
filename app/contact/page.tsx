import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Traferr",
  description: "Reach out to the Traferr team for partnerships, support, or beta access.",
};

export default function ContactPage() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-slate-200/60">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Contact us</p>
          <h1 className="text-3xl font-semibold text-slate-900">Let’s co-create unforgettable travel</h1>
          <p className="text-base text-slate-600">
            Share a few details about your travelers, and we’ll connect you with the right local partners.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
