import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Trigger Point Injections | REAL PT & Wellness",
  description: "Targeted injections for muscle knots, myofascial pain, and chronic tension relief.",
};

const PAGE_DATA: ServicePageData = {
  title: "Trigger Point Injections",
  secondaryImage: "/images/services/trigger-point-injections-2.jpg",
  heroImage: "/images/services/trigger-point-injections.png",
  subtitle: "Targeted injections for muscle knots, myofascial pain, and chronic tension relief.",
  overview: {
    heading: "Myofascial Trigger Point Therapy",
    description: "Trigger point injections (TPIs) deliver medication directly into painful muscle knots (trigger points) that cause localized and referred pain. Our providers use precise techniques to release chronic muscle tension, reduce pain, and restore normal muscle function — often in a single visit.",
    features: [
    "Direct injection into muscle trigger points",
    "Lidocaine, saline, or dry needling options",
    "Immediate pain relief for many patients",
    "Treatment for chronic myofascial pain syndrome",
    "Headache & TMJ-related muscle tension",
    "Back, neck, shoulder, and hip trigger points",
    "Quick 10–15 minute procedures",
    "Minimal downtime — resume activity same day",
    ],
  },
  howItWorks: {
    heading: "Treatment Process",
    steps: [
    { title: "Trigger Point Identification", description: "The provider palpates affected muscles to identify specific trigger points causing your pain and referred pain patterns." },
    { title: "Precise Injection", description: "A small needle delivers the therapeutic agent directly into the trigger point, causing the muscle to relax and release." },
    { title: "Stretching & Recovery", description: "Gentle stretching and heat application post-injection maximize the release, with PT follow-up for long-term relief." },
    ],
  },
  benefits: {
    heading: "TPI Benefits",
    items: [
    "Immediate relief from muscle knots & spasms",
    "Reduced chronic myofascial pain",
    "Headache & tension relief",
    "Quick procedure with minimal downtime",
    "Can break the pain-spasm cycle",
    "Enhanced effectiveness when combined with PT",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Chronic Muscle Pain", "Tension Headaches", "Fibromyalgia", "Athletes", "Desk Workers", "TMJ Disorder"],
  },
  pricing: {
    heading: "Insurance & Pricing",
    description: "Trigger point injections are typically covered by insurance. Medicare, Medicaid, and most PPO/HMO plans accepted.",
  },
  cta: {
    heading: "Release Your Pain",
    description: "Book a trigger point injection consultation and find relief from chronic muscle tension.",
    buttonText: "Book TPI Consult",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
