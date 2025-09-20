"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { SectionLink } from "./SectionLink";

const navigation = [
  { label: "How it works", targetId: "how-it-works" },
  { label: "Why I need this", targetId: "why-i-need-this" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={[
        "sticky inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300",
        isScrolled ? "border-slate-200/70 bg-white/70 backdrop-blur" : "bg-transparent",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          Traferr
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navigation.map((item) => (
            <SectionLink
              key={item.targetId}
              targetId={item.targetId}
              className="rounded-full px-2 py-1 text-slate-600 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              {item.label}
            </SectionLink>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full p-2 text-slate-700 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen ? (
        <div className="border-t border-slate-200 bg-white/85 px-4 py-3 shadow-sm backdrop-blur md:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            {navigation.map((item) => (
              <SectionLink
                key={item.targetId}
                targetId={item.targetId}
                onNavigate={() => setIsMenuOpen(false)}
                className="rounded-full px-4 py-2 text-left hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                {item.label}
              </SectionLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
