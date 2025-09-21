"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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

        const anchor = `#${targetId}`;
        if (window.location.hash !== anchor) {
          window.history.replaceState(null, "", anchor);
        }

        if (onNavigate) {
          onNavigate();
        }

        return;
      }

      const anchorPath = `/#${targetId}`;
      router.push(anchorPath);

      if (onNavigate) {
        onNavigate();
      }
    },
    [onNavigate, router, targetId]
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
