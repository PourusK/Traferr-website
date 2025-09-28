"use client";

import { useCallback, useEffect, useState } from "react";

type DownloadPopupProps = {
  className?: string;
};

export default function DownloadPopup({ className = "" }: DownloadPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200/60 transition hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${className}`.trim()}
      >
        Start a conversation
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="download-popup-title"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md space-y-6 rounded-3xl bg-white p-8 text-center shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-5 top-5 rounded-full bg-slate-100 px-2.5 py-1 text-sm font-semibold text-slate-500 transition hover:bg-slate-200 hover:text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              aria-label="Close download popup"
            >
              ×
            </button>
            <div className="space-y-3">
              <h2 id="download-popup-title" className="text-2xl font-semibold text-slate-900">
                Get the Traferr app
              </h2>
              <p className="text-sm text-slate-600">
                Pick your platform to download Traferr and start connecting with locals.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border-0 bg-gradient-to-r from-orange-500 via-amber-400 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-16px_rgba(249,115,22,0.75)] transition hover:shadow-[0_18px_36px_-18px_rgba(249,115,22,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              >
                Download Android
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                Download Apple
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
