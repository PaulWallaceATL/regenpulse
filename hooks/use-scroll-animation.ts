"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type ScrollAnimationFrom = {
  opacity?: number;
  y?: number;
  x?: number;
  scale?: number;
  [key: string]: unknown;
};

export type ScrollAnimationTo = ScrollAnimationFrom & {
  duration?: number;
  ease?: string;
  stagger?: number;
  [key: string]: unknown;
};

export type ScrollTriggerConfig = {
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  toggleActions?: string;
  once?: boolean;
};

export type UseScrollAnimationConfig = {
  from?: ScrollAnimationFrom;
  to?: ScrollAnimationTo;
  scrollTrigger?: ScrollTriggerConfig;
  disabled?: boolean;
};

const DEFAULT_FROM: ScrollAnimationFrom = {
  opacity: 0,
  y: 24,
};

const DEFAULT_TO: ScrollAnimationTo = {
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out",
};

const DEFAULT_SCROLL_TRIGGER: ScrollTriggerConfig = {
  start: "top 88%",
  once: true,
};

/**
 * Animates an element when it enters the viewport using GSAP ScrollTrigger.
 * @param ref - Ref to the DOM element to animate
 * @param config - Animation from/to vars and optional ScrollTrigger options
 */
export function useScrollAnimation<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  config: UseScrollAnimationConfig = {}
) {
  const {
    from = DEFAULT_FROM,
    to = { ...DEFAULT_TO },
    scrollTrigger: triggerConfig = {},
    disabled = false,
  } = config;
  const ctxRef = useRef<ReturnType<typeof gsap.context> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;

    const triggerOptions = { ...DEFAULT_SCROLL_TRIGGER, ...triggerConfig };
    // GSAP ScrollTrigger parses start/end with .split() - never pass undefined
    const start =
      typeof triggerOptions.start === "string"
        ? triggerOptions.start
        : DEFAULT_SCROLL_TRIGGER.start;
    const end =
      typeof triggerOptions.end === "string"
        ? triggerOptions.end
        : undefined;

    // Defer so DOM/scroll container is ready (avoids ScrollTrigger init .split(undefined))
    const id = window.requestAnimationFrame(() => {
      const element = ref.current;
      if (!element || disabled) return;
      try {
        ctxRef.current = gsap.context(() => {
          gsap.fromTo(
            element,
            { ...from },
            {
              ...to,
              ease: to.ease ?? DEFAULT_TO.ease,
              scrollTrigger: {
                trigger: element,
                start,
                ...(end !== undefined && { end }),
                scrub: triggerOptions.scrub,
                markers: triggerOptions.markers,
                toggleActions:
                  typeof triggerOptions.toggleActions === "string"
                    ? triggerOptions.toggleActions
                    : undefined,
                once: triggerOptions.once ?? true,
              },
            }
          );
        }, ref);
      } catch {
        // ScrollTrigger can throw if DOM/scroll not ready; no-op so app doesn't crash
      }
    });

    return () => {
      cancelAnimationFrame(id);
      if (ctxRef.current) {
        ctxRef.current.revert();
        ctxRef.current = null;
      }
    };
    // Config (from, to, scrollTrigger) is intentionally not in deps; pass stable refs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, disabled]);
}
