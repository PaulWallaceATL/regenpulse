import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Red Light Therapy | REAL PT & Wellness",
  description: "Full-body photobiomodulation with clinical-grade panels at 660nm + 850nm wavelengths.",
};

const PAGE_DATA: ServicePageData = {
  title: "Red Light Therapy",
  subtitle: "Full-body photobiomodulation with clinical-grade panels at 660nm + 850nm wavelengths.",
  overview: {
    heading: "Clinical-Grade Photobiomodulation",
    description: "Red light therapy (photobiomodulation) uses specific wavelengths of red and near-infrared light to stimulate cellular energy production, reduce inflammation, and accelerate healing. Our full-body light pods and targeted panel systems deliver clinical-grade doses for maximum therapeutic benefit.",
    features: [
    "Full-body whole-body light pod (360° coverage)",
    "Targeted red light panels (660nm + 850nm wavelengths)",
    "FDA-cleared devices for pain and inflammation",
    "Pre-workout activation & post-workout recovery",
    "Skin rejuvenation & collagen production",
    "Wound healing acceleration",
    "Joint pain & arthritis relief",
    "Neuropathy & nerve damage support",
    ],
  },
  howItWorks: {
    heading: "How Red Light Therapy Works",
    steps: [
    { title: "Cellular Activation", description: "Red and near-infrared photons penetrate tissue and are absorbed by mitochondria, boosting ATP (cellular energy) production by up to 200%." },
    { title: "Inflammation Reduction", description: "Increased cellular energy triggers anti-inflammatory pathways, reducing oxidative stress and accelerating tissue repair." },
    { title: "Systemic Recovery", description: "Regular sessions (8–15 minutes) produce cumulative benefits: faster healing, reduced pain, improved sleep, and enhanced athletic performance." },
    ],
  },
  benefits: {
    heading: "Proven Benefits",
    items: [
    "Reduced inflammation & chronic pain",
    "Faster muscle recovery & reduced DOMS",
    "Enhanced collagen production & skin health",
    "Improved joint mobility & arthritis relief",
    "Better sleep quality & circadian rhythm support",
    "Accelerated wound & surgical healing",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Athletes & Fitness Enthusiasts", "Chronic Pain Patients", "Post-Surgical Recovery", "Anti-Aging & Skin Health", "Arthritis & Joint Pain", "Neuropathy Patients"],
  },
  pricing: {
    heading: "Session Pricing",
    description: "Red light therapy sessions available as single visits, packages, or included in our membership plans.",
    tiers: [
      { name: "Single Session", price: "$35", description: "15-minute full-body red light session" },
      { name: "10-Pack", price: "$275", description: "Save 21% — ideal for treatment protocols" },
      { name: "Unlimited", price: "From $99/mo", description: "Included with REAL PT membership tiers" },
    ],
  },
  cta: {
    heading: "Experience Red Light Therapy",
    description: "Book your first session and feel the difference clinical-grade photobiomodulation makes.",
    buttonText: "Book Red Light Session",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
