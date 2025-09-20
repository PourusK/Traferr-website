"use client";

import IPhoneFrame from "@/components/IPhoneFrame";

const steps = [
  {
    n: 1,
    title: "Select a local",
    body:
      "Tell us where you are (or where you’re heading) and pick someone who knows the neighborhood inside-out.",
  },
  {
    n: 2,
    title: "Ask",
    body:
      "Drop your question—food, commutes, cultural cues. No algorithmic walls—just people.",
  },
  {
    n: 3,
    title: "Get real answers",
    body:
      "Receive a direct, human response that maps to your day, not a generic listicle from years ago.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Three steps to a real conversation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Traferr removes the friction between your curiosity and the person who can answer it best.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.n}
              className="relative flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white px-6 pb-10 pt-24 text-center shadow-sm shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100/60"
            >
              <div className="pointer-events-none absolute -top-16 left-1/2 flex -translate-x-1/2 justify-center">
                <div className="rounded-[36px] bg-gradient-to-b from-slate-100 via-white to-slate-50 p-3 shadow-lg ring-1 ring-white/80">
                  <IPhoneFrame src="/app-screenshot.png" size="sm" />
                </div>
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-600">
                Step {String(s.n).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{s.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-slate-500">
          Drop your real screenshot at <code>/public/app-screenshot.png</code>; a placeholder is shown for now.
        </p>
      </div>
    </section>
  );
}
