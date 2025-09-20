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
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Heading */}
        <p className="text-xs font-semibold tracking-widest text-sky-700 uppercase">
          How it works
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
          Three steps to a real conversation
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Traferr removes the friction between your curiosity and the person who can answer it best.
        </p>

        {/* Layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Mockup (sticky on desktop) */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-24">
              <IPhoneFrame src="/app-screenshot.png" className="" />
              <p className="mt-3 text-center text-xs text-slate-500">
                (Drop your real screenshot at <code>/public/app-screenshot.png</code>; placeholder shown for now)
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="md:col-span-7 space-y-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/60 backdrop-blur shadow-sm p-6 sm:p-7"
              >
                <div className="absolute -left-3 -top-3 h-16 w-16 rounded-full bg-sky-50 ring-1 ring-sky-100 grid place-items-center text-sky-700 font-semibold">
                  {s.n}
                </div>
                <h3 className="pl-12 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="pl-12 mt-2 text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
