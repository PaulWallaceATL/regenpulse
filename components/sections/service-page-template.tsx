"use client";

import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { REALPT } from "@/lib/realpt";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export type ServicePageData = {
  title: string;
  subtitle: string;
  heroImage?: string;
  secondaryImage?: string;
  overview: {
    heading: string;
    description: string;
    features: string[];
  };
  howItWorks: {
    heading: string;
    steps: { title: string; description: string }[];
  };
  benefits: {
    heading: string;
    items: string[];
  };
  whoIsItFor?: {
    heading: string;
    audiences: string[];
  };
  pricing?: {
    heading: string;
    description: string;
    tiers?: { name: string; price: string; description: string }[];
  };
  cta: {
    heading: string;
    description: string;
    buttonText: string;
    buttonHref?: string;
  };
};

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const img1 = data.heroImage;
  const img2 = data.secondaryImage || data.heroImage;

  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <PageHero title={data.title} description={data.subtitle} backgroundImage={img1} />

      {/* Overview — split layout with image */}
      <section className="bg-neutral-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Image side */}
            {img1 && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                <Image
                  src={img1}
                  alt={data.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
            {/* Text side */}
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-400">
                {data.title}
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {data.overview.heading}
              </h2>
              <p className="mt-3 text-neutral-400">
                {data.overview.description}
              </p>
              <ul className="mt-6 space-y-2">
                {data.overview.features.slice(0, 6).map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-neutral-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Remaining features as grid below if more than 6 */}
          {data.overview.features.length > 6 && (
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {data.overview.features.slice(6).map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-neutral-300"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-neutral-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {data.howItWorks.heading}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.howItWorks.steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/[0.06] bg-neutral-800/50 p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-950/60 text-sm font-bold text-cyan-400">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      {img2 && (
        <section className="relative h-64 overflow-hidden sm:h-80 md:h-96">
          <Image
            src={img2}
            alt={`${data.title} at REAL PT & Wellness`}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-transparent to-neutral-950/80" />
        </section>
      )}

      {/* Benefits */}
      <section className="bg-neutral-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {data.benefits.heading}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.benefits.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-neutral-900/70 p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <span className="text-sm text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      {data.whoIsItFor && (
        <section className="bg-neutral-900 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {data.whoIsItFor.heading}
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {data.whoIsItFor.audiences.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center rounded-full border border-cyan-800/40 bg-cyan-950/30 px-4 py-2 text-sm text-cyan-300"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {data.pricing && (
        <section className="bg-neutral-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {data.pricing.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-400">
              {data.pricing.description}
            </p>
            {data.pricing.tiers && data.pricing.tiers.length > 0 && (
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.pricing.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="rounded-2xl border border-white/[0.06] bg-neutral-800/50 p-7"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {tier.name}
                    </h3>
                    <p className="mt-2 text-2xl font-bold text-cyan-400">
                      {tier.price}
                    </p>
                    <p className="mt-2 text-sm text-neutral-400">
                      {tier.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA — with background image */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        {img1 ? (
          <>
            <div className="absolute inset-0 z-0">
              <Image
                src={img1}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-neutral-950/75" />
            </div>
            <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {data.cta.heading}
              </h2>
              <p className="mt-3 text-neutral-300">{data.cta.description}</p>
              <Button
                asChild
                className="mt-8 bg-cyan-600 text-white hover:bg-cyan-500"
              >
                <Link href={data.cta.buttonHref || REALPT.schedulingUrl}>
                  {data.cta.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </>
        ) : (
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 bg-neutral-900">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {data.cta.heading}
            </h2>
            <p className="mt-3 text-neutral-400">{data.cta.description}</p>
            <Button
              asChild
              className="mt-8 bg-cyan-600 text-white hover:bg-cyan-500"
            >
              <Link href={data.cta.buttonHref || REALPT.schedulingUrl}>
                {data.cta.buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
