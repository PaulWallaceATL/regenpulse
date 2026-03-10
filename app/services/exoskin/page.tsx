import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServiceVideoHero } from "@/components/sections/service-video-hero";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { REALPT } from "@/lib/realpt";

const EXOSKIN_HERO_VIDEO = "/videos/exoskin-hero.mp4";

export const metadata: Metadata = {
  title: "ExoSkin Body Contouring + Recovery | REAL PT & Wellness",
  description:
    "ExoSkin® body contouring, CryoSlimming, CryoFacials, EMS toning, and pain management. Selective cryo-exposure and uniform cooling technology with real-time monitoring and safety controls.",
  openGraph: {
    title: "ExoSkin® Body Contouring + Recovery | REAL PT & Wellness",
    description:
      "Body contouring, cryo, and recovery treatments with clinical-grade safety and partner support.",
  },
};

const FEATURES = [
  "CryoSlimming — many clients report visible contouring over a series of sessions; results vary",
  "CryoFacials",
  "Chin reduction",
  "Cellulite reduction",
  "Pain management",
  "EMS toning",
];

const HOW_IT_WORKS = [
  { step: "Selective Cryo-Exposure", body: "Targeted cooling is applied to the treatment area to support the body’s natural response." },
  { step: "Apoptosis (natural fat cell breakdown)", body: "Cooling may help support natural fat cell breakdown in treated areas over time." },
  { step: "Uniform Cooling Technology", body: "Controlled, even cooling is designed for consistent treatment and safety." },
];

const SAFETY_FEATURES = [
  "Real-time monitoring",
  "Client-activated stop button",
];

const PROVIDER_SUPPORT = [
  "Virtual training for up to 5 people",
  "90 days coaching",
  "Launch playbook",
  "Four-year warranty",
  "Sales/consult training",
  "Consent + consultation forms",
  "Pricing strategy consult",
];

export default function ExoskinPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <ServiceVideoHero
        title="ExoSkin® Body Contouring + Recovery"
        description="CryoSlimming, CryoFacials, EMS toning, and pain management with real-time monitoring and safety controls."
        videoSrc={EXOSKIN_HERO_VIDEO}
        videoType="video/mp4"
      >
        <Link
          href={REALPT.schedulingUrl}
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-lg transition-all hover:bg-white/95 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Book a Consultation
        </Link>
      </ServiceVideoHero>

      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            What ExoSkin Does
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            ExoSkin is designed to support body contouring, skin and facial treatments, and recovery. Many clients report visible contouring over a series of sessions; results vary.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {FEATURES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                How It Works
              </h2>
              <div className="mt-6 space-y-6">
                {HOW_IT_WORKS.map((item) => (
                  <div key={item.step}>
                    <h3 className="font-semibold text-foreground">{item.step}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src="/images/services/exoskin/body-contouring-treatment.jpg"
                alt="ExoSkin body contouring and recovery treatment—clinical-grade cryo and EMS in a clinical setting."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Safety Features
          </h2>
          <ul className="mt-4 flex flex-wrap gap-4">
            {SAFETY_FEATURES.map((item) => (
              <li key={item} className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground">
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            What&apos;s Included (Provider Support)
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            For partner providers, our ExoSkin partnership includes training, coaching, and launch support so you can deliver the service with confidence.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {PROVIDER_SUPPORT.map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8">
            <Link href={REALPT.contactUrl}>Discuss Partnership</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
