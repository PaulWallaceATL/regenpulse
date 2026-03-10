import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Thermometer,
  Zap,
  Sun,
  Gem,
  Magnet,
  Wind,
  Radio,
  Lightbulb,
  LampDesk,
  Sparkles,
  Activity,
  type LucideIcon,
} from "lucide-react";
import { ServiceVideoHero } from "@/components/sections/service-video-hero";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { REALPT } from "@/lib/realpt";

const HBOT_HERO_VIDEO = "/videos/oxygen-bubbles-hero.mp4";

export const metadata: Metadata = {
  title: "HBOT + EXOPOD Memberships | REAL PT & Wellness",
  description:
    "Hyperbaric oxygen therapy and EXOPOD stacked recovery modalities. Greater Conduit of Healing 2.0 ATA chamber; memberships designed to support performance, recovery, and wellness.",
  openGraph: {
    title: "HBOT + EXOPOD Memberships | REAL PT & Wellness",
    description:
      "Stacked recovery modalities—HBOT and EXOPOD—designed to support performance, recovery, and wellness.",
  },
};

const EXOPOD_MODALITIES: { label: string; icon: LucideIcon }[] = [
  { label: "Advanced Thermal Technology (controlled thermal environment)", icon: Thermometer },
  { label: "Muscle Stimulation (EMS)", icon: Zap },
  { label: "Infrared Heat", icon: Sun },
  { label: "Himalayan Salt Therapy", icon: Gem },
  { label: "BioAlign (magnetic field therapy)", icon: Magnet },
  { label: "Oxygen Therapy (negative ions / air purification)", icon: Wind },
  { label: "DeepWave Energy Therapy", icon: Radio },
  { label: "PhotonGlow Light Therapy (red + near-infrared)", icon: Lightbulb },
  { label: "Ambient Light Therapy", icon: LampDesk },
  { label: "Ozone Disinfection (hygiene/sterilization system)", icon: Sparkles },
  { label: "Vibration Pulse Therapy (lymphatic flow)", icon: Activity },
];

const EXOPOD_BENEFITS = [
  "Weight management & fat reduction support",
  "Muscle recovery & pain relief support",
  "Skin tightening / anti-aging support",
  "Detox & circulation support",
  "Relaxation & stress reduction support",
  "Lymphatic drainage support",
];

const TIERS = [
  { name: "REAL RESET", summary: "Entry-level access to EXOPOD modalities and recovery support.", price: "TBD" },
  { name: "REAL PERFORMANCE", summary: "More sessions and broader access for active recovery and performance.", price: "TBD" },
  { name: "REAL ELITE", summary: "Premium access with maximum sessions and priority booking.", price: "TBD" },
];

const GETTING_STARTED = [
  "Choose HBOT or Membership",
  "Book first visit / evaluation",
  "Customize plan with staff",
];

export default function HbotExopodPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <ServiceVideoHero
        title="Hyperbaric Oxygen Therapy (HBOT) + EXOPOD™ Memberships"
        description="Stacked recovery modalities designed to support performance, recovery, and wellness."
        videoSrc={HBOT_HERO_VIDEO}
        videoType="video/mp4"
      >
        <Link
          href={REALPT.schedulingUrl}
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-lg transition-all hover:bg-white/95 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Book HBOT Session
        </Link>
        <Link
          href="#membership-tiers"
          className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Start EXOPOD Membership
        </Link>
      </ServiceVideoHero>

      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            HBOT Overview
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Hyperbaric oxygen therapy uses a pressurized oxygen environment—our Greater Conduit of Healing 2.0 ATA chamber—commonly used to support recovery and wellness. You breathe higher concentrations of oxygen in a controlled, safe setting.
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-background">
            <h3 className="border-b border-border px-4 py-3 font-semibold text-foreground sm:px-6">
              HBOT Pricing
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 font-medium text-foreground sm:px-6">Option</th>
                    <th className="px-4 py-3 font-medium text-foreground sm:px-6">Duration</th>
                    <th className="px-4 py-3 font-medium text-foreground sm:px-6">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 sm:px-6">Single session</td>
                    <td className="px-4 py-3 sm:px-6">30 min</td>
                    <td className="px-4 py-3 sm:px-6">TBD</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 sm:px-6">Single session</td>
                    <td className="px-4 py-3 sm:px-6">60 min</td>
                    <td className="px-4 py-3 sm:px-6">TBD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 sm:px-6">Packages</td>
                    <td className="px-4 py-3 sm:px-6">30 min / 60 min</td>
                    <td className="px-4 py-3 sm:px-6">TBD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="px-4 py-2 text-xs text-muted-foreground sm:px-6">
              Contact us for current single-session and package pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                alt="Recovery and wellness environment—HBOT and EXOPOD at REAL PT & Wellness."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                EXOPOD: Stacked Modalities in One Session
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                EXOPOD combines multiple recovery and wellness modalities in one session and membership—so you can get consistent, structured access to technologies designed to support how you feel and perform.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EXOPOD_MODALITIES.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            EXOPOD Benefits
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Many members use EXOPOD to support these areas. Outcomes vary; we focus on consistent access and a clear protocol.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {EXOPOD_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="membership-tiers" className="scroll-mt-6 border-b border-border bg-background">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            EXOPOD Membership Tiers
          </h2>
          {/* TODO: Replace with actual tier pricing when available from config/CMS. */}
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Choose the level that matches your goals. Exact pricing and session counts available when you book.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TIERS.map((tier) => (
              <Card key={tier.name}>
                <CardHeader>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{tier.summary}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-foreground">Starting at {tier.price}/mo</p>
                  <Button asChild className="mt-4 w-full">
                    <Link href={REALPT.schedulingUrl}>Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Getting Started
          </h2>
          <ol className="mt-6 list-decimal space-y-4 pl-5 text-muted-foreground">
            {GETTING_STARTED.map((step) => (
              <li key={step} className="pl-2">{step}</li>
            ))}
          </ol>
          <Button asChild className="mt-6">
            <Link href={REALPT.schedulingUrl}>Book Your First Visit</Link>
          </Button>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Add-On Experience: Gaming TV System
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Make your session even more enjoyable with our optional mobile TV setup.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {[
              "Mobile rolling TV",
              "Adjustable stand",
              "Console shelf",
              "Roku OS",
              "Wi-Fi enabled",
              "Up to 12 hours battery",
              "Optional Bose SoundLink Flex",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-primary/10">
        <div className="container mx-auto px-4 py-8 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <span className="font-semibold text-foreground">{REALPT.siteName}</span>
            <a
              href={`tel:${REALPT.phone}`}
              className="text-lg font-semibold text-primary underline-offset-4 hover:underline"
              aria-label={`Call ${REALPT.displayPhone}`}
            >
              {REALPT.displayPhone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
