"use client";

import IPhoneFrame from "@/components/IPhoneFrame";

const steps = [
  {
    n: 1,
    title: "Choose your Localite or become one",
    body:
      "Set your city (or where you’re headed) and pick the person who fits you best — or flip the switch and list yourself as a Localite.",
  },
  {
    n: 2,
    title: "Get verified (everyone, always)",
    body:
      "Quick checks give you a Verified badge. It keeps bots out and conversations safe — for visitors and for locals.",
  },
  {
    n: 3,
    title: "Connect & chat",
    body:
      "Start a private, one-on-one conversation. Ask about routes, food, culture — or just swap life stories. No algorithms, just people.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24">
      <div
        className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8"
        style={{
          paddingTop: "var(--section-padding-block)",
          paddingBottom: "var(--section-padding-block)",
        }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            How Traferr works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Real people. Real talk. Three simple steps.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.n}
              className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100/60"
            >
              <div className="flex flex-col items-start gap-6 sm:flex-row">
                <IPhoneFrame
                  src="/app-screenshot.png"
                  size="xs"
                  className="mx-0 shrink-0 drop-shadow-[0_18px_40px_rgba(15,23,42,0.25)]"
                />

                <div className="flex flex-1 flex-col text-left">
                  <span className="block text-xs font-semibold uppercase tracking-[0.4em] text-sky-600">
                    STEP {String(s.n).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">{s.body}</p>
                </div>
              </div>
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
