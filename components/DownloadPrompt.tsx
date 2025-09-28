"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const STORE_LINKS = {
  android: "https://play.google.com/store/apps/details?id=com.traferr.app",
  ios: "https://apps.apple.com/app/id000000000",
};

const focusableSelectors =
  `a[href], area[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1")]`;

export default function DownloadPrompt() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document === "undefined") {
      return () => undefined;
    }

    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement | null;
      document.body.classList.add("overflow-hidden");

      const firstFocusable = dialogRef.current?.querySelector<HTMLElement>(
        focusableSelectors,
      );

      // Wait a frame before focusing so the element is guaranteed to exist.
      if (firstFocusable) {
        requestAnimationFrame(() => firstFocusable.focus());
      }
    } else {
      document.body.classList.remove("overflow-hidden");
      previouslyFocusedElement.current?.focus?.();
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || typeof document === "undefined") return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelectors),
      ).filter((el) => !el.hasAttribute("disabled"));

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200/60 transition hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
      >
        Start a conversation
      </button>

      {isOpen ? (
        <>
          <div
            className="fixed inset-0 z-10 bg-slate-950/40 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 z-20 flex items-center justify-center px-4">
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
                    Download Traferr
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">Start your first chat</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Grab the app and connect with a Localite in minutes.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 text-slate-400 transition hover:text-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                  aria-label="Close download prompt"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 grid gap-3">
                <Link
                  href={STORE_LINKS.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M1.93 1.5a.75.75 0 0 0-.93.72v19.56a.75.75 0 0 0 1.12.65l11.23-6.73zm13.57 8.14L4.28 2.03l9.6 12.35zm-4.52 5.82 2.96 3.81 5.55 3.33a.75.75 0 0 0 1.12-.65V5.02a.75.75 0 0 0-.93-.72l-7.06 2.07 3.38 4.35z" />
                  </svg>
                  Continue on Android
                </Link>
                <Link
                  href={STORE_LINKS.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M18.72 17.88c-.81 1.26-1.2 1.83-2.26 2.95-.8.83-1.9 1.87-3.16 1.88-1.18.01-1.49-.55-3.1-.55s-1.96.54-3.13.56c-1.26.02-2.22-1.02-3.02-1.85-1.64-1.72-2.92-4.88-1.22-7.02.84-1.07 2.35-1.76 3.84-1.77 1.2-.01 2.34.59 3.1.59s2.14-.73 3.6-.62c.61.03 2.32.25 3.43 1.86-.09.06-2.04 1.2-2.02 3.58.03 2.86 2.54 3.81 2.56 3.82Zm-4.65-11.14c.65-.81 1.08-1.94.96-3.06-1.05.04-2.32.7-3.07 1.57-.67.77-1.14 1.9-.99 3.01 1.13.08 2.29-.57 3.1-1.52Z" />
                  </svg>
                  Continue on iOS
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
