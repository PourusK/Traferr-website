import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";
import Link from "next/link";
import { SectionLink } from "@/components/SectionLink";

const badges = [
  "Connect to Locals",
  "Largest Addressbook",
  "Noise-free Conversations",
];

export default function Home() {
  return (
    <div
      className="flex flex-col"
      style={{ gap: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}
    >
      <section className="relative isolate overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-[-320px] h-[360px] rounded-full bg-sky-100 blur-3xl"
          aria-hidden
        />
        <div
          className="mx-auto w-full max-w-screen-xl px-4 pt-24 sm:pt-28 lg:pt-32"
          style={{ paddingBottom: "var(--section-padding-block)" }}
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <div className="hero-badge">
              <div className="hero-pin" aria-hidden="true">
                <div className="hero-pin__spinner">
                  <div className="traferr-logo-rotate">
                    <Image
                      src="/traferr-logo.svg"
                      alt="Traferr logo"
                      fill
                      priority
                      sizes="(min-width: 640px) 7rem, 5.5rem"
                      className="traferr-logo-face"
                    />
                    <Image
                      src="/traferr-logo.svg"
                      alt=""
                      fill
                      sizes="(min-width: 640px) 7rem, 5.5rem"
                      aria-hidden="true"
                      className="traferr-logo-face traferr-logo-face--back"
                    />
                  </div>
                </div>
              </div>
              <span className="traferr-brand-text text-xl font-black tracking-[0.35em] sm:text-2xl">
                Traferr
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Have you talked to someone new today?
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              <span className="block">
                We’re more “connected” than ever, but it’s still hard to simply ask:
              </span>
              <span className="block">
                Where’s the best shawarma in Karama? What’s the easiest way to commute in Wakayama?
              </span>
              <span className="block">
                Traferr connects you directly to locals—no noise, just real answers.
              </span>
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

      {/* HOW IT WORKS */}
      <HowItWorks />

      <section id="why-i-need-this" className="px-4">
        <div
          className="mx-auto flex w-full max-w-screen-xl flex-col gap-10 rounded-3xl border border-slate-200 bg-slate-50 px-6 shadow-xl shadow-sky-100/40"
          style={{
            paddingTop: "var(--section-padding-block)",
            paddingBottom: "var(--section-padding-block)",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <div className="flex flex-col gap-8">
              <div className="max-w-2xl space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
                  Why I need this
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Social feeds broadcast. Traferr has a back-and-forth.
                </h2>
                <p className="text-base leading-relaxed text-slate-600">
                  Skip the endless scroll and tap into someone who actually lives there. It’s faster,
                  calmer, and finally personal.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
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
            <div className="relative isolate overflow-hidden rounded-3xl border border-sky-100 bg-white p-3 shadow-[0_24px_80px_-40px_rgba(56,189,248,0.55)] lg:self-center">
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100 via-white to-sky-50">
                {/* Replace this placeholder with your embedded video when it’s ready. */}
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-slate-500">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-md shadow-sky-100">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-7 w-7 fill-slate-400"
                    >
                      <path d="M8.25 6.75v10.5a.75.75 0 0 0 1.133.653l8.25-5.25a.75.75 0 0 0 0-1.306l-8.25-5.25a.75.75 0 0 0-1.133.653Z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-slate-600">Video placeholder</p>
                    <p className="text-xs text-slate-500">Drop your clip or embed code right here.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
