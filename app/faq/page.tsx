import type { Metadata } from "next";
import Link from "next/link";

import { FaqAccordion } from "@/components/FaqAccordion";

const faqs = [
  {
    question: "Is there an age restriction to Traferr?",
    answer: [
      "Yes, Traferr is for those 18 and older. We love the energy of the younger crowd, but some conversations and experiences are best saved for adulthood. If you're not quite 18 yet, don't worry—your time will come soon enough! We'll be here when you're ready to join the fun. 🎉",
    ],
  },
  {
    question: "What is Traferr?",
    answer: [
      "We at Traferr are building a community that helps you discover and explore any place in the world safely, securely, and within an ecosystem which values your privacy and safeguards the interests of all that are part of this journey.",
      "Traferr is all about individual conversations and enabling people to connect with each other without the vices of the world affecting their conversation.",
    ],
  },
  {
    question: "How does it work?",
    answer: [
      "By connecting users seeking information of a place with users who live and breathe there (we call them \"localites\"). You can ask them questions, get tips, learn stories, and find out what is happening in the place you are interested in (be it a different location within your own city or a new place you are traveling to providing you with real time information). When we say local we really mean \"LOCAL\". Mumbai is a city but Vasai is a locality (beautiful one too 😊).",
      "In its essence, every user is a localite of their area. So you enable the community by sharing your own knowledge and experiences with other explorers who are interested to know more about your place.",
    ],
  },
  {
    question: "How is Traferr a safe(r) platform? (Answers most of your questions)",
    answer: [
      "We first start with verifying every question that comes to us. It is beyond a mere telephone number or email verification. This feature ensures that the users of the app are real humans and not bots. The platform lets you access and exchange real time authentic local information, recommendations, experiences, news, and history with verified \"localites\" about any place, making it a safe(r) platform to interact on.",
      "The reason we have strict rules on harassment and safeguarding your identity (in case you are super famous or just enjoy your privacy) is because every member will be anonymous on the platform with a completely auto generated avatar and username. This builds trust and credibility among the users, which can foster more meaningful and engaging interactions.",
      "Additionally, our social media is the first to blur out any identification factors (face, number plates). So now it's only about that mountain view or a yummy omelet. Refreshing change, ain't it?",
      "Traferr offers a gender matching option; this feature enables travelers to choose the gender of their \"localite\" they wish to connect with, which can enhance their comfort and safety—a little something special for our solo travelers.",
    ],
  },
  {
    question: "What's in it for our \"localites\" for their time and efforts? - Nothing is free and we know IT!",
    answer: [
      "Every effort put in by you will be rewarded by our Coin-to-cash system; this feature rewards them for their interactions, which is our way of saying THANK YOU and providing quality content and conversations.",
      "And this is the best part, where the coins can be converted to cash, which can be an additional income source for localites or a way to access their favorite brands. The vouchers are actual Amazon, UPI (for India), or similar platform vouchers which is a direct valuation of Traferr Tokens (we are still figuring the last bit). So no more discount offer coupons where you need to spend 🙂. STRAIGHT HARD REWARDS as it should be. The more you upload and quantify, the better we become at creating a robust all inclusive ecosystem.",
    ],
  },
  {
    question: "Why be a part of Traferr?",
    answer: [
      "Together let's build a community and be a part of a safe environment for yourself and people around you to have a no frill, no vanity, no obligation conversations and get information, or maybe just an intense conversation with someone who is equally passionate about your interests, without any safety issues.",
      "We are all in search of meaningful connections and this is one way we thought would create a few. It's all about give and take and this is our little thank you and step towards creating that elusive \"authentic\" social media.",
    ],
  },
] satisfies Parameters<typeof FaqAccordion>[0]["items"];

export const metadata: Metadata = {
  title: "Traferr FAQ — get answers from the source",
  description:
    "Browse answers to the most common Traferr questions and learn how the platform keeps conversations meaningful and safe.",
};

export default function FAQPage() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950">
      <div
        className="pointer-events-none absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-500/30 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto w-full max-w-screen-lg px-4 pb-24 pt-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-200">
            FAQ
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Answers from the Traferr team</h1>
          <p className="text-lg leading-relaxed text-slate-300">
            Learn how Traferr keeps conversations personal, safe, and rewarding for every traveler and localite.
          </p>
          <p className="text-sm text-slate-400">
            Need something more specific? {" "}
            <Link
              href="/contact"
              className="font-semibold text-sky-300 transition hover:text-sky-200"
            >
              Reach out to us directly
            </Link>
            .
          </p>
        </div>
        <div className="mt-16">
          <FaqAccordion items={faqs} />
        </div>
      </div>
    </div>
  );
}
