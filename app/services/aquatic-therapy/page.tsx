import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { REALPT } from "@/lib/realpt";

export const metadata: Metadata = {
  title: "Aquatic Therapy (SwimEx) | REAL PT & Wellness",
  description:
    "Clinical-grade SwimEx hydrotherapy—adjustable current, multi-depth, full control. True aquatic PT for post-op, spine, arthritis, balance, and low-impact conditioning.",
  openGraph: {
    title: "Aquatic Therapy with SwimEx® | REAL PT & Wellness",
    description:
      "True clinical-grade hydrotherapy. Adjustable current, multi-depth, full control for aquatic PT and recovery.",
  },
};

const WHY_SWIMEX = [
  { title: "Adjustable current", body: "Resistance and flow you can dial to match each patient and phase of rehab." },
  { title: "Multi-depth", body: "Work at the depth that supports the body while challenging balance and strength." },
  { title: "Clinical control", body: "Precise settings for true aquatic PT—not just a pool." },
  { title: "True aquatic PT", body: "Designed for therapeutic protocols and measurable progress." },
];

const USE_CASES = [
  "Post-op joints (knee, hip, shoulder)",
  "Spine and arthritis",
  "High pain sensitivity",
  "Balance and fall risk",
  "Low-impact conditioning for athletes",
];

export default function AquaticTherapyPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <PageHero
        title="Aquatic Therapy with SwimEx®"
        description="True clinical-grade hydrotherapy—adjustable current, multi-depth, full control."
      />

      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-8 sm:px-6 md:py-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <Link href={REALPT.schedulingUrl}>Book Aquatic PT Evaluation</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`${REALPT.membershipsUrl}#tier-comparison`}>View Membership Options</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Why SwimEx (Not Just a Pool)
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Our in-house SwimEx pool is built for clinical outcomes—not lap swimming. Every session can be tailored to support recovery and progress.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_SWIMEX.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Who It&apos;s For
              </h2>
              <p className="mt-2 text-muted-foreground">
                Aquatic therapy with SwimEx is commonly used to support a wide range of goals—from post-surgical rehab to ongoing conditioning with less joint load.
              </p>
              <ul className="mt-6 list-inside list-disc space-y-2 text-muted-foreground">
                {USE_CASES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src="/images/placeholder.svg"
                alt="Clinical-grade SwimEx hydrotherapy pool for aquatic physical therapy—adjustable current, multi-depth."
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
            Integration & Payment
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Aquatic therapy is part of our standard PT plans. We work with insurance when appropriate and also offer cash and membership options so you can get the frequency and access that fits your goals.
          </p>
          <div className="mt-8 rounded-xl border border-border bg-background p-6">
            <h3 className="font-semibold text-foreground">Membership pricing</h3>
            <p className="mt-2 text-muted-foreground">
              Memberships start at $49.99/month. Higher tiers include more sessions and access to other recovery services.
            </p>
            <Button asChild className="mt-4">
              <Link href={REALPT.membershipsUrl}>View Membership Options</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
