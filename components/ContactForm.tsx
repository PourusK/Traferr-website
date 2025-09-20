"use client";

import { FormEvent, useState } from "react";

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormProps = {
  onSuccess?: () => void;
  title?: string;
  description?: string;
};

const initialStatus = { message: "", type: "idle" as "idle" | "success" | "error" };

export function ContactForm({ onSuccess, title, description }: ContactFormProps) {
  const [status, setStatus] = useState(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload: ContactFormValues = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus(initialStatus);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus({ message: "Thanks for reaching out! We’ll get back to you soon.", type: "success" });
      setIsSubmitting(false);
      event.currentTarget.reset();
      onSuccess?.();
    } catch (error) {
      console.error("Contact form submission failed", error);
      setStatus({ message: "Something went wrong. Please try again in a moment.", type: "error" });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {(title || description) && (
        <div className="space-y-2 text-center sm:text-left">
          {title && <h2 className="text-xl font-semibold text-slate-900">{title}</h2>}
          {description && <p className="text-sm text-slate-600">{description}</p>}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-1 block text-sm font-medium text-slate-700">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="How can we help?"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell us a little about what you need."
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </form>
      {status.message && (
        <p
          role={status.type === "error" ? "alert" : undefined}
          className={`text-sm ${status.type === "error" ? "text-rose-600" : "text-emerald-600"}`}
        >
          {status.message}
        </p>
      )}
    </div>
  );
}
