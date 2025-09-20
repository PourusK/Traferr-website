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
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-500/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-1/3 right-[12%] h-[360px] w-[360px] rounded-full bg-indigo-500/20 blur-3xl"
          aria-hidden
        />
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-start gap-10 px-4 pb-24 pt-28">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-400">
              Conversations that start with curiosity
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have you talked to someone new today?
            </h1>
            <p className="text-lg leading-relaxed text-slate-200 sm:text-xl">
              <span className="block">We’re more “connected” than ever, but it’s still hard to simply ask:</span>
              <span className="block">Where’s the best shawarma in Karama? What’s the easiest way to commute in Wakayama?</span>
              <span className="block">Traferr connects you directly to locals—no noise, just real answers.</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              Start a conversation
            </Link>
            <SectionLink
              targetId="how-it-works"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-7 py-3 text-sm font-semibold text-slate-100 shadow-sm transition hover:bg-slate-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              See how it works
            </SectionLink>
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-slate-300">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-800/80 bg-slate-900/70 px-4 py-2 shadow-sm shadow-slate-950/40"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-4">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-12 rounded-3xl border border-slate-800/60 bg-slate-900/60 px-6 py-16 shadow-[0_0_120px_-40px] shadow-sky-500/30 backdrop-blur">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-400">How it works</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Three steps to a real conversation
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              Traferr removes the friction between your curiosity and the person who can answer it best.
            </p>
          </div>
          <ol className="grid gap-6 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm shadow-slate-950/40"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sm font-semibold text-sky-300">
                  {index + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="why-i-need-this" className="bg-slate-900/70 px-4 py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-400">Why I need this</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Social feeds broadcast. Traferr has a back-and-forth.
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              Skip the endless scroll and tap into someone who actually lives there. It’s faster, calmer, and finally personal.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-sm shadow-slate-950/40">
              <h3 className="text-lg font-semibold text-white">Endless social feeds</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
                <li>Everyone’s shouting, no one’s listening.</li>
                <li>Recommendations drowned in ads and outdated threads.</li>
                <li>You leave with more tabs, not clarity.</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-sm shadow-sky-500/20">
              <h3 className="text-lg font-semibold text-white">Direct conversation</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-200">
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
