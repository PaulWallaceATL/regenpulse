import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Recovery Tools | REAL PT & Wellness",
  description: "Professional-grade recovery equipment available for home use through REAL Mart.",
};

const PAGE_DATA: ServicePageData = {
  title: "Recovery Tools",
  subtitle: "Professional-grade recovery equipment available for home use through REAL Mart.",
  overview: {
    heading: "Pro-Grade Recovery at Home",
    description: "Bring the clinic recovery experience home with our curated selection of professional-grade recovery tools. From percussion massage devices and foam rollers to red light panels and portable compression systems, every product in our recovery collection has been tested and approved by our clinical team.",
    features: [
    "Percussion massage & vibration therapy devices",
    "Red light therapy panels for home use",
    "Portable pneumatic compression boots",
    "Foam rollers & myofascial release tools",
    "Resistance bands & mobility kits",
    "Ice/heat therapy systems",
    "TENS/EMS units for pain management",
    "Recovery backpacks & kits",
    ],
  },
  howItWorks: {
    heading: "Your Recovery Toolkit",
    steps: [
    { title: "Get Recommendations", description: "Your therapist or clinician recommends specific recovery tools based on your treatment plan and home exercise program." },
    { title: "Shop REAL Mart", description: "Browse and purchase through our online REAL Mart store with member pricing and expert reviews." },
    { title: "Recover at Home", description: "Use your tools between clinic visits to maintain progress, reduce soreness, and accelerate healing." },
    ],
  },
  benefits: {
    heading: "Why Our Recovery Tools",
    items: [
    "Clinician-tested and approved products",
    "Extends clinic recovery benefits to home",
    "Member pricing on all recovery tools",
    "Expert guidance on proper use",
    "Synergistic with in-clinic treatments",
    "Professional-grade quality for home use",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["PT Patients (Home Exercise)", "Athletes", "Chronic Pain Management", "Weekend Warriors", "Post-Surgical Recovery", "Gift Seekers"],
  },
  cta: {
    heading: "Build Your Recovery Kit",
    description: "Browse recovery tools on REAL Mart and start recovering like a pro at home.",
    buttonText: "Shop Recovery Tools",
    buttonHref: "/real-mart",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
