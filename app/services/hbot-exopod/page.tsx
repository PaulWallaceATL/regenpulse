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
  Tv,
  AirVent,
  Armchair,
  ShieldCheck,
  Gauge,
  GraduationCap,
  Wrench,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { REALPT } from "@/lib/realpt";

export const metadata: Metadata = {
  title: "HBOT + EXOPOD Memberships | REAL PT & Wellness",
  description:
    "Hyperbaric oxygen therapy and EXOPOD stacked recovery modalities. Medical-grade hardshell chambers and memberships designed to support performance, recovery, and wellness.",
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

const HBOT_CHAMBERS = [
  {
    name: "Sitting Hardshell Chamber",
    spec: "2.0 ATA · Upright Design",
    image: "/images/services/hbot-exopod/everyday-hbot-orb-room.jpg",
    alt: "REAL PT & Wellness 2.0 ATA sitting hardshell HBOT chamber in a modern clinical room",
  },
  {
    name: "Laydown Hardshell Chamber",
    spec: "2.5 ATA · Full Recline",
    image: "/images/services/hbot-exopod/everyday-hbot-conduit25-new.jpg",
    alt: "REAL PT & Wellness 2.5 ATA laydown hardshell hyperbaric oxygen chamber",
  },
  {
    name: "Hardshell Chamber Detail",
    spec: "Aviation-Grade · Precision Build",
    image: "/images/services/hbot-exopod/everyday-hbot-side.jpg",
    alt: "REAL PT & Wellness hardshell HBOT chamber close-up side view showing aviation-grade construction",
  },
];

const HBOT_ADDONS: { label: string; desc: string; icon: LucideIcon }[] = [
  { label: "Entertainment System", desc: "In-chamber TV with Roku streaming and Bluetooth Bose speaker", icon: Tv },
  { label: "Gaming Setup", desc: "PS5 / Xbox compatible console system with rolling TV stand", icon: Tv },
  { label: "Red Light Therapy Panel", desc: "Simultaneous red + near-infrared light therapy during your HBOT session", icon: Sun },
  { label: "Tabletop Red Light", desc: "Compact red light therapy unit for targeted treatment", icon: Lightbulb },
  { label: "Climate Control Upgrade", desc: "Enhanced air conditioning for optimal comfort during longer sessions", icon: AirVent },
  { label: "Luxury Power Recliner", desc: "Motorized leather recliner chair for maximum session comfort", icon: Armchair },
  { label: "High-Flow BIBS Mask", desc: "20 LPM built-in breathing system for concentrated oxygen delivery", icon: Wind },
  { label: "Dual Oxygen Concentrator", desc: "Upgraded dual-flow oxygen delivery for enhanced performance", icon: Gauge },
  { label: "Grounding Blanket & Sheet", desc: "Therapeutic grounding therapy integrated into your HBOT session", icon: HeartPulse },
  { label: "Oxygen Analyzer", desc: "Real-time oxygen level monitoring inside the chamber", icon: Activity },
];

const HBOT_SERVICES: { label: string; desc: string; icon: LucideIcon }[] = [
  { label: "Professional Training & Certification", desc: "IHA & IBUM certified clinical staff training and home-user safety courses", icon: GraduationCap },
  { label: "White Glove Installation", desc: "Full delivery, placement, setup, and packaging removal", icon: ShieldCheck },
  { label: "Maintenance & Diagnostics", desc: "Scheduled maintenance, repair, and remote support for all equipment", icon: Wrench },
  { label: "Virtual Consultation", desc: "Remote training and support sessions for home or clinical users", icon: Tv },
];

export default function HbotExopodPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden bg-neutral-950">
      {/* Hero — wellness video background */}
      <section className="relative flex min-h-[70vh] flex-col overflow-hidden pt-20 sm:min-h-[80vh] md:min-h-[100svh]">
        <div className="absolute inset-0 z-0 bg-neutral-950">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            aria-hidden
          >
            <source src="/videos/memberships-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/40 to-neutral-950/80" />
        </div>
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:py-28 md:items-start md:px-12 md:py-32 md:text-left lg:px-16 xl:px-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
            REAL PT & Wellness
          </p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            HBOT + EXOPOD™ Memberships
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:mt-6 sm:text-xl">
            Stacked recovery modalities designed to support performance, recovery, and wellness.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10 md:justify-start">
            <Link
              href={REALPT.schedulingUrl}
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:scale-[1.02]"
            >
              Book HBOT Session
            </Link>
            <Link
              href="#membership-tiers"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/50"
            >
              Start EXOPOD Membership
            </Link>
          </div>
        </div>
      </section>

      {/* HBOT Overview + Chamber Gallery */}
      <section className="border-t border-white/10 bg-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            HBOT Overview
          </h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            Hyperbaric oxygen therapy uses a pressurized oxygen environment—our medical-grade hardshell chambers—commonly used to support recovery and wellness. You breathe higher concentrations of oxygen in a controlled, safe setting.
          </p>

          {/* Chamber Showcase — 3 images */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HBOT_CHAMBERS.map((chamber) => (
              <div
                key={chamber.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={chamber.image}
                    alt={chamber.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="font-semibold text-white text-sm">{chamber.name}</p>
                  <p className="text-xs text-cyan-400/80">{chamber.spec}</p>
                </div>
              </div>
            ))}
          </div>

          {/* HBOT Pricing Table */}
          <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
            <h3 className="border-b border-white/10 px-4 py-3 font-semibold text-white sm:px-6">
              HBOT Pricing
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-4 py-3 font-medium text-slate-300 sm:px-6">Option</th>
                    <th className="px-4 py-3 font-medium text-slate-300 sm:px-6">Duration</th>
                    <th className="px-4 py-3 font-medium text-slate-300 sm:px-6">Price</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 sm:px-6">Single session</td>
                    <td className="px-4 py-3 sm:px-6">30 min</td>
                    <td className="px-4 py-3 sm:px-6">TBD</td>
                  </tr>
                  <tr className="border-b border-white/10">
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
            <p className="px-4 py-2 text-xs text-slate-500 sm:px-6">
              Contact us for current single-session and package pricing.
            </p>
          </div>
        </div>
      </section>

      {/* EXOPOD Section — real EXOPOD image + modalities */}
      <section className="border-t border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 order-2 lg:order-1">
              <Image
                src="/images/services/hbot-exopod/exopod-therapy.png"
                alt="EXOPOD recovery wellness pod with blue light therapy and infrared — stacked modalities in one session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-400">
                Multi-Modality Recovery
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                EXOPOD: Stacked Modalities in One Session
              </h2>
              <p className="mt-3 max-w-2xl text-slate-400">
                EXOPOD combines multiple recovery and wellness modalities in one session and membership—so you can get consistent, structured access to technologies designed to support how you feel and perform.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {EXOPOD_MODALITIES.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-neutral-900/80 px-4 py-3 text-sm text-slate-300"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXOPOD Benefits */}
      <section className="border-t border-white/10 bg-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            EXOPOD Benefits
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Many members use EXOPOD to support these areas. Outcomes vary; we focus on consistent access and a clear protocol.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {EXOPOD_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400" aria-hidden />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Membership Tiers */}
      <section id="membership-tiers" className="scroll-mt-6 border-t border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            EXOPOD Membership Tiers
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Choose the level that matches your goals. Exact pricing and session counts available when you book.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl border border-white/10 bg-neutral-900 p-6 transition-colors hover:border-cyan-500/30"
              >
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{tier.summary}</p>
                <p className="mt-4 text-lg font-semibold text-cyan-400">Starting at {tier.price}/mo</p>
                <Link
                  href={REALPT.schedulingUrl}
                  className="mt-4 block w-full rounded-xl bg-cyan-500/10 py-2.5 text-center text-sm font-semibold text-cyan-400 transition-colors hover:bg-cyan-500/20"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="border-t border-white/10 bg-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Getting Started
          </h2>
          <ol className="mt-6 space-y-4">
            {GETTING_STARTED.map((step, i) => (
              <li key={step} className="flex items-center gap-4 text-slate-300">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-bold text-cyan-400">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <Link
            href={REALPT.schedulingUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400"
          >
            Book Your First Visit
          </Link>
        </div>
      </section>

      {/* HBOT Session Add-Ons */}
      <section className="border-t border-white/10 bg-neutral-900">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Enhance Your Experience
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            HBOT Session Add-Ons
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Customize every session with premium upgrades—entertainment, comfort, and advanced therapy options available at our facility.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {HBOT_ADDONS.map(({ label, desc, icon: Icon }) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-neutral-950/60 p-4 transition-colors hover:border-cyan-500/20"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="font-semibold text-white text-sm">{label}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Training Services */}
      <section className="border-t border-white/10 bg-neutral-950">
        <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Full-Service Support
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Training & Service Options
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Whether you&apos;re a clinical team, home user, or facility manager—we provide expert setup, training, maintenance, and ongoing support.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {HBOT_SERVICES.map(({ label, desc, icon: Icon }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-neutral-900 p-5 transition-colors hover:border-cyan-500/20"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-white text-sm">{label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="border-t border-white/10 bg-cyan-500/10">
        <div className="container mx-auto px-4 py-8 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <span className="font-semibold text-white">{REALPT.siteName}</span>
            <a
              href={`tel:${REALPT.phone}`}
              className="text-lg font-semibold text-cyan-400 underline-offset-4 hover:underline"
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
