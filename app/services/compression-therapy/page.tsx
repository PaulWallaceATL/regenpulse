import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Compression Therapy | REAL PT & Wellness",
  description: "Pneumatic compression for lymphatic drainage, recovery, and circulation.",
};

const PAGE_DATA: ServicePageData = {
  title: "Compression Therapy",
  secondaryImage: "/images/services/compression-therapy-2.jpg",
  heroImage: "/images/services/compression-therapy.jpg",
  subtitle: "Pneumatic compression for lymphatic drainage, recovery, and circulation.",
  overview: {
    heading: "Advanced Pneumatic Compression",
    description: "Our compression therapy program uses clinical-grade pneumatic compression boots and sleeves to enhance lymphatic drainage, improve circulation, and accelerate recovery. Used by professional sports teams and elite athletes worldwide, compression therapy is one of the most effective recovery modalities available.",
    features: [
    "Clinical-grade pneumatic compression systems",
    "Sequential pulse technology (legs, hips, arms)",
    "Lymphatic drainage & fluid reduction",
    "Pre-competition preparation protocols",
    "Post-workout recovery acceleration",
    "Jet lag & travel recovery programs",
    "Edema & swelling management",
    "Customizable pressure zones & timing",
    ],
  },
  howItWorks: {
    heading: "How Compression Therapy Works",
    steps: [
    { title: "Sequential Compression", description: "Pneumatic boots apply dynamic, pulsing pressure in a sequential pattern — starting from the feet and moving upward to flush metabolic waste." },
    { title: "Lymphatic Activation", description: "The pulsing action stimulates the lymphatic system, moving fluid and waste products toward the body's natural drainage pathways." },
    { title: "Circulation Enhancement", description: "Improved blood flow delivers fresh oxygen and nutrients to muscles while removing lactic acid and inflammatory markers." },
    ],
  },
  benefits: {
    heading: "Recovery Benefits",
    items: [
    "Reduced muscle soreness & faster DOMS recovery",
    "Enhanced lymphatic drainage & detoxification",
    "Decreased swelling & post-injury edema",
    "Improved circulation & nutrient delivery",
    "Faster return to training between sessions",
    "Relief from heavy, tired legs & travel fatigue",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Athletes & Weekend Warriors", "Post-Surgical Patients", "Lymphedema Management", "Frequent Travelers", "Chronic Fatigue", "Fitness Enthusiasts"],
  },
  pricing: {
    heading: "Session Pricing",
    description: "Compression sessions available as standalone visits or included in recovery packages.",
    tiers: [
      { name: "Single Session", price: "$30", description: "30-minute pneumatic compression session" },
      { name: "10-Pack", price: "$225", description: "Save 25% with a recovery package" },
      { name: "Unlimited", price: "From $99/mo", description: "Included in REAL PT membership tiers" },
    ],
  },
  cta: {
    heading: "Recover Faster",
    description: "Book a compression therapy session and experience professional-grade recovery.",
    buttonText: "Book Compression Session",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
