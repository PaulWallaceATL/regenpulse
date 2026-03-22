import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "IV Therapy | REAL PT & Wellness",
  description: "Medical-grade IV vitamin infusions for hydration, immunity, energy, and recovery.",
};

const PAGE_DATA: ServicePageData = {
  title: "IV Therapy",
  secondaryImage: "/images/services/iv-therapy-2.jpg",
  heroImage: "/images/services/iv-therapy.jpeg",
  subtitle: "Medical-grade IV vitamin infusions for hydration, immunity, energy, and recovery.",
  overview: {
    heading: "Clinical IV Vitamin Infusions",
    description: "Our IV therapy program delivers medical-grade vitamins, minerals, and amino acids directly into your bloodstream for 100% bioavailability. Bypassing the digestive system means faster, more complete absorption — ideal for recovery, immune support, athletic performance, and wellness optimization.",
    features: [
    "Medical-grade IV vitamin & mineral infusions",
    "100% bioavailability (bypasses digestion)",
    "Myers' Cocktail & custom formulations",
    "NAD+ anti-aging & cellular repair infusions",
    "Glutathione detox & skin brightening",
    "Athletic performance & recovery drips",
    "Immune boost & cold/flu defense",
    "Hangover & dehydration recovery",
    ],
  },
  howItWorks: {
    heading: "IV Therapy Process",
    steps: [
    { title: "Health Intake", description: "Quick health screening and consultation to select the optimal IV formulation for your goals and health status." },
    { title: "Comfortable Infusion", description: "Relax in our infusion lounge while your customized IV delivers nutrients directly to your cells over 30–60 minutes." },
    { title: "Immediate Results", description: "Most patients feel improved energy, hydration, and mental clarity within hours of their infusion." },
    ],
  },
  benefits: {
    heading: "IV Therapy Benefits",
    items: [
    "Instant hydration & electrolyte replenishment",
    "Boosted immune system & illness prevention",
    "Enhanced energy & mental clarity",
    "Faster athletic recovery & reduced soreness",
    "Anti-aging & cellular repair (NAD+)",
    "Detoxification & skin health (glutathione)",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Athletes & Active Adults", "Busy Professionals", "Immune Support Seekers", "Hangover & Dehydration Recovery", "Anti-Aging", "Chronic Fatigue"],
  },
  pricing: {
    heading: "IV Menu Pricing",
    description: "Walk-in welcome. Membership holders receive discounted IV pricing.",
    tiers: [
      { name: "Hydration Basic", price: "$99", description: "Saline + electrolytes + B-vitamins" },
      { name: "Myers' Cocktail", price: "$175", description: "The gold standard vitamin infusion" },
      { name: "NAD+ Infusion", price: "$350", description: "Anti-aging & cellular repair drip" },
    ],
  },
  cta: {
    heading: "Book Your IV Drip",
    description: "Walk in or schedule your IV therapy session for immediate hydration and nutrient delivery.",
    buttonText: "Schedule IV Session",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
