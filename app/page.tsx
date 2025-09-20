import Image from "next/image";
import Link from "next/link";

const summaryCards = [
  {
    title: "Location",
    metric: "120+ cities",
    description: "Tap into trusted locals who know every alley and hidden gem.",
  },
  {
    title: "Availability",
    metric: "Live calendars",
    description: "See when locals are free and sync effortlessly with your travelers.",
  },
  {
    title: "Wallet summary",
    metric: "Transparent payouts",
    description: "Track balances, requests, and tips from a single dashboard.",
  },
];

const howItWorksSteps = [
  {
    title: "Discover local experts",
    description:
      "Browse a curated map of locals, filter by specialty, and invite the right hosts into every itinerary.",
    image: "/how-step-1.svg",
    imageAlt: "Organizer browsing Traferr locals on the mobile app.",
  },
  {
    title: "Confirm availability",
    description:
      "Check live calendars, review rates, and lock in the people who can welcome your travelers on the right dates.",
    image: "/how-step-2.svg",
    imageAlt: "Availability details for a Traferr local inside the app.",
  },
  {
    title: "Coordinate on the go",
    description:
      "Message, share updates, and keep every traveler synced with transparent tasks and payment status in one place.",
    image: "/how-step-3.svg",
    imageAlt: "In-app messaging thread between a traveler and a local host.",
  },
];

const testimonials = [
  {
    name: "Amina Kale",
    role: "Founder, Borderless Retreats",
    quote:
      "Traferr helped our guides meet guests at the perfect moment. The local insight is unbeatable.",
  },
  {
    name: "Jonah Mills",
    role: "COO, Seekers Collective",
    quote:
      "The availability feed is a game changer. We can finally plan community trips with confidence.",
  },
  {
    name: "Priya Desai",
    role: "Host Network Lead, Wayfinders",
    quote:
      "Payments stay simple and transparent, so our locals focus on what they do best: welcoming travelers.",
  },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-sky-100/70">
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-sky-200/60 to-transparent" aria-hidden />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-24 pt-20 md:flex-row md:items-center">
          <div className="max-w-2xl space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
              Built for travel collectives
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Traferr — connect with locals
              </h1>
              <p className="text-lg text-slate-700 sm:text-xl">
                Match every traveler with a trusted host, sync real-time availability, and keep payments transparent—without piecing together endless spreadsheets.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                Request early access
              </Link>
              <p className="text-sm text-slate-600 sm:ml-4">
                Join the beta and bring locals into every itinerary.
              </p>
            </div>
          </div>
          <div className="relative w-full max-w-xl self-end rounded-3xl border border-sky-200 bg-white/80 p-6 shadow-lg shadow-sky-200/30 backdrop-blur">
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-slate-900">What you orchestrate</h2>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="rounded-2xl border border-slate-200 bg-white/60 px-4 py-3 shadow-sm">
                  Curate locals with profiles that show language, specialties, and ratings in one glance.
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white/60 px-4 py-3 shadow-sm">
                  Auto-sync calendars across time zones so travelers always meet at the right moment.
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white/60 px-4 py-3 shadow-sm">
                  Offer seamless, secure payments that reward hosts instantly for unforgettable stays.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto -mt-16 w-full max-w-5xl px-4">
          <div className="grid gap-4 rounded-3xl border border-sky-100 bg-white/90 p-6 shadow-xl shadow-sky-200/40 backdrop-blur md:grid-cols-3">
            {summaryCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{card.title}</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">{card.metric}</p>
                <p className="mt-2 text-sm text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/90 px-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 py-16">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">How it works</p>
            <h2 className="text-3xl font-semibold text-slate-900">Guide every journey in three steps</h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Give your travelers clarity before they depart. Traferr keeps discovery, coordination, and follow-up aligned so
              every local partnership feels effortless.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <article
                key={step.title}
                className="flex h-full flex-col items-center gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 text-center shadow-lg shadow-slate-200/60"
              >
                <div className="relative w-full max-w-[220px]">
                  <div className="relative aspect-[9/19.5] w-full">
                    <div className="absolute inset-0 rounded-[2.75rem] border border-slate-900/15 bg-slate-900 shadow-[0_22px_50px_rgba(15,23,42,0.28)]">
                      <div className="absolute inset-[12px] overflow-hidden rounded-[2rem] bg-slate-900">
                        <Image src={step.image} alt={step.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 200px, 220px" />
                      </div>
                      <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-700" aria-hidden />
                      <div className="absolute left-1/2 bottom-3 h-1 w-20 -translate-x-1/2 rounded-full bg-slate-700/60" aria-hidden />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto grid w-full max-w-6xl gap-10 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/60 backdrop-blur lg:grid-cols-[1.1fr_1fr]">
          <div className="aspect-video overflow-hidden rounded-2xl border border-slate-100 bg-slate-200">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
              title="Founders note"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Founders note</p>
              <h2 className="text-3xl font-semibold text-slate-900">Why Traferr exists</h2>
              <p className="text-base text-slate-600">
                We’ve organized retreats in 18 countries and learned that authentic moments hinge on local partners. Traferr was built to celebrate them—making coordination, payments, and trust effortless for every traveler you serve.
              </p>
            </div>
            <p className="text-sm text-slate-500">
              Hear from our team about how we’re co-creating the future of community-powered travel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white/80 px-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 py-16">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Testimonials</p>
            <h2 className="text-3xl font-semibold text-slate-900">Trusted by travel builders</h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Leaders shaping the future of immersive journeys choose Traferr to keep every experience human, local, and unforgettable.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/60"
              >
                <p className="text-sm text-slate-600">“{testimonial.quote}”</p>
                <div className="mt-6 space-y-1">
                  <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-3xl border border-slate-200 bg-gradient-to-r from-sky-500 to-sky-600 p-10 text-white shadow-xl shadow-sky-300/50 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold">Bring locals into your next itinerary</h2>
            <p className="text-sm text-sky-100">
              Whether you run a boutique agency or a global collective, Traferr equips your team with the local partnerships that build trust instantly.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm font-semibold md:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-3 text-slate-900 transition hover:bg-white"
            >
              Talk with us
            </Link>
            <Link
              href="/legal/privacy"
              className="inline-flex items-center justify-center rounded-full bg-sky-700/40 px-5 py-3 text-white transition hover:bg-sky-700/60"
            >
              Review our privacy approach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
