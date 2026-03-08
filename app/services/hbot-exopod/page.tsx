import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { REALPT } from "@/lib/realpt";

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

const EXOPOD_MODALITIES = [
  "Advanced Thermal Technology (controlled thermal environment)",
  "Muscle Stimulation (EMS)",
  "Infrared Heat",
  "Himalayan Salt Therapy",
  "BioAlign (magnetic field therapy)",
  "Oxygen Therapy (negative ions / air purification)",
  "DeepWave Energy Therapy",
  "PhotonGlow Light Therapy (red + near-infrared)",
  "Ambient Light Therapy",
  "Ozone Disinfection (hygiene/sterilization system)",
  "Vibration Pulse Therapy (lymphatic flow)",
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
      <PageHero
        title="Hyperbaric Oxygen Therapy (HBOT) + EXOPOD™ Memberships"
        description="Stacked recovery modalities designed to support performance, recovery, and wellness."
      />

      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-8 sm:px-6 md:py-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <Link href={REALPT.schedulingUrl}>Book HBOT Session</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#membership-tiers">Start EXOPOD Membership</Link>
            </Button>
          </div>
        </div>
      </section>

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
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            EXOPOD: Stacked Modalities in One Session
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            EXOPOD combines multiple recovery and wellness modalities in one session and membership—so you can get consistent, structured access to technologies designed to support how you feel and perform.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EXOPOD_MODALITIES.map((mod) => (
              <div
                key={mod}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground"
              >
                {mod}
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
