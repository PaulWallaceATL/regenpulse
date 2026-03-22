import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Device Leasing & E-Commerce | REAL PT & Wellness",
  description: "Lease clinical-grade wellness equipment or purchase through REAL Mart for your facility.",
};

const PAGE_DATA: ServicePageData = {
  title: "Device Leasing & E-Commerce",
  secondaryImage: "/images/services/device-leasing-2.jpg",
  heroImage: "/images/services/device-leasing.jpg",
  subtitle: "Lease clinical-grade wellness equipment or purchase through REAL Mart for your facility.",
  overview: {
    heading: "Equip Your Facility",
    description: "REAL PT's device leasing and e-commerce program makes it easy for clinics, gyms, and wellness centers to acquire clinical-grade equipment. Lease HBOT chambers, red light pods, cryotherapy units, and more — with flexible terms, training, and ongoing support included.",
    features: [
    "HBOT chambers & hyperbaric systems",
    "Red light therapy pods & panels",
    "Cryotherapy chambers & localized units",
    "Pneumatic compression systems",
    "Body composition & diagnostic devices",
    "Flexible lease terms (24–60 months)",
    "Training & certification included",
    "Maintenance & warranty programs",
    ],
  },
  howItWorks: {
    heading: "Leasing Process",
    steps: [
    { title: "Needs Assessment", description: "Our equipment consultants evaluate your facility, patient volume, and revenue goals to recommend the right equipment package." },
    { title: "Lease or Purchase", description: "Choose flexible leasing (low monthly payments, tax advantages) or outright purchase through REAL Mart's B2B portal." },
    { title: "Install & Train", description: "We handle delivery, installation, staff training, and certification — you start treating patients and generating revenue." },
    ],
  },
  benefits: {
    heading: "Leasing Advantages",
    items: [
    "Low monthly payments preserve capital",
    "Tax-deductible lease payments",
    "Always have current-generation equipment",
    "Training & certification included",
    "Maintenance & warranty coverage",
    "Revenue-generating from day one",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["New Clinic Owners", "Existing PT/Rehab Facilities", "Gym & Fitness Centers", "Med Spas", "REAL PT Franchise Partners", "Corporate Wellness Facilities"],
  },
  pricing: {
    heading: "Leasing Options",
    description: "Lease terms from 24–60 months. Volume packages available for multi-device setups.",
    tiers: [
      { name: "Single Device", price: "From $450/mo", description: "Individual equipment lease with training" },
      { name: "Recovery Suite", price: "From $2,500/mo", description: "5+ devices bundled for a recovery bay" },
      { name: "Full Clinic Package", price: "From $8,000/mo", description: "Complete equipment build-out with support" },
    ],
  },
  cta: {
    heading: "Equip Your Facility",
    description: "Contact our equipment team to discuss your facility's needs and get a custom quote.",
    buttonText: "Get Equipment Quote",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
