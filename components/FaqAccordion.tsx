"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string[];
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const contentId = `faq-panel-${index}`;

        return (
          <div
            key={item.question}
            className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 shadow-[0_0_45px_-25px] shadow-slate-900/80"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <span>{item.question}</span>
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-lg text-sky-300"
                aria-hidden
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={contentId}
              hidden={!isOpen}
              className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300"
            >
              {item.answer.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
