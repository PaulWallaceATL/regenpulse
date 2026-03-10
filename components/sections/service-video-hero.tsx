"use client";

import { useEffect, useRef } from "react";

type ServiceVideoHeroProps = {
  title: string;
  description: string;
  videoSrc: string;
  videoType?: string;
  children?: React.ReactNode;
};

export function ServiceVideoHero({
  title,
  description,
  videoSrc,
  videoType = "video/mp4",
  children,
}: ServiceVideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, [videoSrc]);

  return (
    <section className="relative flex min-h-[70vh] flex-col overflow-hidden pt-20 sm:min-h-[80vh] md:min-h-[100svh]">
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src={videoSrc} type={videoType} />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/40"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:py-28 md:items-start md:px-12 md:py-32 md:text-left lg:px-16 xl:px-24">
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-100/90 sm:mt-6 sm:text-xl">
          {description}
        </p>
        {children ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10 md:justify-start">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
