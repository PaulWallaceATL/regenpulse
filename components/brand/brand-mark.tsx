"use client";

import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
  compact?: boolean;
};

export function BrandMark({
  className,
  iconClassName,
  wordmarkClassName,
  compact = false,
}: BrandMarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-br from-primary via-[var(--brand-blue)] to-[var(--brand-cyan)] text-primary-foreground shadow-[var(--shadow-soft)]",
          iconClassName
        )}
        aria-hidden
      >
        <span className="absolute inset-[1px] rounded-[10px] bg-background/15" />
        <svg
          viewBox="0 0 24 24"
          className="relative z-10 h-4.5 w-4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 13.5c2.2 0 2.2-3.8 4.4-3.8 2.2 0 2.2 3.8 4.4 3.8s2.2-3.8 4.4-3.8c1.4 0 2 .8 2.8 2" />
          <path d="M4.5 18h15" />
        </svg>
      </span>
      {!compact && (
        <span
          className={cn(
            "text-base font-semibold tracking-tight text-foreground sm:text-lg",
            wordmarkClassName
          )}
        >
          RegenPulse
        </span>
      )}
    </span>
  );
}
