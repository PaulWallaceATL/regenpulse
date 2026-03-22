import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "PEMF Therapy | REAL PT & Wellness",
  description: "Pulsed Electromagnetic Field therapy for pain relief, bone healing, and cellular regeneration.",
};

const PAGE_DATA: ServicePageData = {
  title: "PEMF Therapy",
  subtitle: "Pulsed Electromagnetic Field therapy for pain relief, bone healing, and cellular regeneration.",
  overview: {
    heading: "Electromagnetic Cellular Restoration",
    description: "PEMF (Pulsed Electromagnetic Field) therapy uses targeted electromagnetic pulses to stimulate cellular repair, reduce pain, and accelerate bone healing. FDA-cleared for fracture healing and validated by NASA for astronaut recovery, PEMF is one of the most well-researched regenerative modalities available.",
    features: [
    "FDA-cleared for bone fracture healing",
    "NASA-validated cellular recovery technology",
    "Non-invasive, drug-free pain management",
    "Full-body mat & targeted applicator options",
    "Programmable frequency & intensity protocols",
    "Synergistic with HBOT, red light, and cryo",
    "Post-surgical healing acceleration",
    "Chronic inflammation reduction",
    ],
  },
  howItWorks: {
    heading: "How PEMF Works",
    steps: [
    { title: "Electromagnetic Pulses", description: "Controlled electromagnetic fields penetrate deep into tissue, reaching cells, bones, and organs that other therapies can't access." },
    { title: "Cellular Recharge", description: "PEMF restores the natural electrical charge of damaged cells, improving nutrient absorption, waste removal, and oxygen utilization." },
    { title: "Tissue Regeneration", description: "Regular sessions promote bone density, soft tissue repair, nerve regeneration, and systemic anti-inflammatory effects." },
    ],
  },
  benefits: {
    heading: "Proven Benefits",
    items: [
    "Accelerated bone fracture healing (FDA-cleared)",
    "Reduced chronic pain & inflammation",
    "Improved circulation & oxygen delivery",
    "Enhanced nerve repair & neurological recovery",
    "Better sleep quality & stress reduction",
    "Faster post-surgical recovery times",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Fracture & Bone Injury Recovery", "Chronic Pain Patients", "Athletes", "Post-Surgical Healing", "Neuropathy & Nerve Damage", "Fibromyalgia & Autoimmune"],
  },
  pricing: {
    heading: "Session Pricing",
    description: "PEMF sessions available individually, in packages, or as part of our membership plans.",
    tiers: [
      { name: "Single Session", price: "$40", description: "30-minute targeted or full-body PEMF" },
      { name: "10-Pack", price: "$320", description: "Save 20% with a treatment package" },
      { name: "Unlimited", price: "From $99/mo", description: "Included in REAL PT membership tiers" },
    ],
  },
  cta: {
    heading: "Try PEMF Therapy",
    description: "Schedule your PEMF session and discover how electromagnetic cellular restoration can accelerate your healing.",
    buttonText: "Book PEMF Session",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
