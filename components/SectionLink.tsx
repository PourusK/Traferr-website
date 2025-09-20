"use client";

import { useCallback } from "react";

type SectionLinkProps = {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

export function SectionLink({
  targetId,
  children,
  className,
  onNavigate,
  type = "button",
  ...rest
}: SectionLinkProps) {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      const element = document.getElementById(targetId);
      if (element) {
        const prefersReducedMotion = window.matchMedia
          ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
          : false;

        element.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", `#${targetId}`);
      }

      if (onNavigate) {
        onNavigate();
      }
    },
    [onNavigate, targetId]
  );

  return (
    <button
      {...rest}
      type={type}
      onClick={handleClick}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}
