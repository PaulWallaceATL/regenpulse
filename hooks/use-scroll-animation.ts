"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;

    const triggerOptions = { ...DEFAULT_SCROLL_TRIGGER, ...triggerConfig };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { ...from },
        {
          ...to,
          scrollTrigger: {
            trigger: el,
            start: triggerOptions.start,
            end: triggerOptions.end,
            scrub: triggerOptions.scrub,
            markers: triggerOptions.markers,
            toggleActions: triggerOptions.toggleActions,
            once: triggerOptions.once ?? true,
          },
        }
      );
    }, ref);

    return () => {
      ctx.revert();
    };
    // Config (from, to, scrollTrigger) is intentionally not in deps; pass stable refs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, disabled]);
}
