import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Wearable Hardware | REAL PT & Wellness",
  description: "Health monitoring wearables, diagnostics devices, and connected health technology.",
};

const PAGE_DATA: ServicePageData = {
  title: "Wearable Hardware",
  secondaryImage: "/images/services/wearable-hardware-2.jpg",
  heroImage: "/images/services/wearable-hardware.jpg",
  subtitle: "Health monitoring wearables, diagnostics devices, and connected health technology.",
  overview: {
    heading: "Connected Health Devices",
    description: "Our wearable hardware collection features the latest health monitoring technology — from continuous glucose monitors and pulse oximeters to advanced body composition analyzers and sleep trackers. Each device integrates with your REAL PT health profile to give your care team real-time data for optimized treatment planning.",
    features: [
    "Continuous glucose monitors (CGM)",
    "Pulse oximeters & heart rate monitors",
    "Sleep tracking devices & rings",
    "Body composition analyzers",
    "Blood pressure monitors",
    "Activity & fitness trackers",
    "Connected health monitoring devices",
    "Integration with REAL PT health dashboard",
    ],
  },
  howItWorks: {
    heading: "Get Connected",
    steps: [
    { title: "Select Your Device", description: "Choose from our curated selection of clinician-recommended health monitoring devices on REAL Mart." },
    { title: "Connect & Sync", description: "Pair your device with the REAL PT platform for seamless data sharing with your care team." },
    { title: "Data-Driven Care", description: "Your therapist and providers use your wearable data to personalize treatments, track progress, and optimize outcomes." },
    ],
  },
  benefits: {
    heading: "Why Wearable Health",
    items: [
    "Real-time health data for personalized care",
    "Early detection of health trends & risks",
    "Improved treatment outcomes with data integration",
    "Motivation through measurable progress",
    "Clinician-recommended devices (no guesswork)",
    "Seamless REAL PT platform integration",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Health Optimizers", "Chronic Condition Management", "Athletes & Performance", "Weight Loss Patients", "Seniors", "Tech-Forward Patients"],
  },
  cta: {
    heading: "Start Monitoring Your Health",
    description: "Browse wearable devices on REAL Mart and connect your health data.",
    buttonText: "Shop Wearables",
    buttonHref: "/real-mart",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
