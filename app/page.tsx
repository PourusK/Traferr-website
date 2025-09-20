import Link from "next/link";

import { SectionLink } from "@/components/SectionLink";

const badges = [
  "Connect to Locals",
  "Largest Addressbook",
  "Noise-free Conversations",
];

const steps = [
  {
    title: "Select a local",
    description:
      "Tell us where you are (or where you're heading) and pick someone who knows the neighborhood inside-out.",
  },
  {
    title: "Ask",
    description:
      "Drop your question, whether it's about food, commutes, or cultural cues. No algorithmic walls—just people.",
  },
  {
    title: "Get real answers",
    description:
      "Receive a direct, human response with context that maps to your day, not a generic listicle from years ago.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-[-320px] h-[360px] rounded-full bg-sky-100 blur-3xl"
          aria-hidden
        />
        <div className="mx-auto w-full max-w-screen-xl px-4 pb-24 pt-28 sm:pt-32">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-sky-600">
              <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-pink-500 bg-clip-text text-transparent">
                Traferr
              </span>
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Have you talked to someone new today?
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              <span className="block">We’re more “connected” than ever, but it’s still hard to simply ask:</span>
              <span className="block">Where’s the best shawarma in Karama? What’s the easiest way to commute in Wakayama?</span>
              <span className="block">Traferr connects you directly to locals—no noise, just real answers.</span>
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200/60 transition hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                Start a conversation
              </Link>
              <SectionLink
                targetId="how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                See how it works
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </SectionLink>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-4">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-12 rounded-3xl border border-slate-200 bg-white px-6 py-16 shadow-xl shadow-sky-100/40">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">How it works</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Three steps to a real conversation
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Traferr removes the friction between your curiosity and the person who can answer it best.
            </p>
          </div>
          <ol className="grid gap-6 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-600">
                  {index + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="why-i-need-this" className="px-4">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10 rounded-3xl border border-slate-200 bg-slate-50 px-6 py-16 shadow-xl shadow-sky-100/40">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Why I need this</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Social feeds broadcast. Traferr has a back-and-forth.
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Skip the endless scroll and tap into someone who actually lives there. It’s faster, calmer, and finally personal.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Endless social feeds</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
                <li>Everyone’s shouting, no one’s listening.</li>
                <li>Recommendations drowned in ads and outdated threads.</li>
                <li>You leave with more tabs, not clarity.</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_20px_60px_-24px_rgba(56,189,248,0.5)]">
              <h3 className="text-lg font-semibold text-slate-900">Direct conversation</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
                <li>Talk to the person who walks those streets every day.</li>
                <li>Ask follow-ups instantly—no threads to refresh.</li>
                <li>Walk away with confidence in your next move.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
