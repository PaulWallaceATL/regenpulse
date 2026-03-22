import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "SYMMETRY Neuro-Pathway Training | REAL PT & Wellness",
  description: "Drug-free neurofeedback and brainwave training powered by our partner SYMMETRY Neuro-Pathway Training.",
};

const PAGE_DATA: ServicePageData = {
  title: "SYMMETRY Neuro-Pathway Training",
  secondaryImage: "/images/services/symmetry-neuro-therapy-2.png",
  heroImage: "/images/services/symmetry-neuro-therapy.jpg",
  subtitle: "Drug-free neurofeedback and brainwave training powered by our partner SYMMETRY Neuro-Pathway Training.",
  overview: {
    heading: "Advanced Neurofeedback & Brainwave Training",
    description: "Through our partnership with SYMMETRY Neuro-Pathway Training, REAL PT & Wellness offers cutting-edge neurofeedback services that use qEEG brain mapping and personalized brainwave training to restore optimal brain function. This drug-free approach helps patients with ADHD, anxiety, PTSD, concussion recovery, and peak cognitive performance — all guided by quantitative brain data.",
    features: [
    "qEEG brain mapping & quantitative analysis",
    "Personalized brainwave training protocols",
    "Drug-free approach to neurological conditions",
    "ADHD & attention optimization",
    "Anxiety, depression, and PTSD support",
    "Concussion & TBI recovery programs",
    "Peak cognitive performance training",
    "Sleep optimization through brainwave regulation",
    ],
  },
  howItWorks: {
    heading: "How Neuro-Pathway Training Works",
    steps: [
    { title: "qEEG Brain Map", description: "A comprehensive quantitative EEG assessment maps your unique brainwave patterns, identifying areas of dysregulation and creating a baseline for your training program." },
    { title: "Custom Protocol", description: "Based on your brain map results, a personalized neurofeedback protocol is designed to target your specific conditions — whether that's focus, anxiety reduction, or recovery." },
    { title: "Progressive Training", description: "Regular brainwave training sessions (typically 20–40 sessions) teach your brain to self-regulate, producing lasting improvements without medication or side effects." },
    ],
  },
  benefits: {
    heading: "Benefits of Neurofeedback",
    items: [
    "Drug-free treatment for ADHD, anxiety, and PTSD",
    "Faster concussion & TBI cognitive recovery",
    "Improved focus, attention, and mental clarity",
    "Better sleep quality through brainwave regulation",
    "Enhanced memory & executive function",
    "Lasting results — your brain learns to self-regulate",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["ADHD & Attention Issues", "Anxiety & Depression", "PTSD & Trauma", "Concussion & TBI Recovery", "Peak Performance Athletes", "Aging & Cognitive Decline"],
  },
  pricing: {
    heading: "Session Pricing",
    description: "SYMMETRY neurofeedback programs are designed around 20–40 session protocols for lasting results.",
    tiers: [
      { name: "qEEG Brain Map", price: "$250", description: "Initial quantitative brain mapping & consultation" },
      { name: "10-Session Package", price: "$1,500", description: "Recommended starter protocol" },
      { name: "20-Session Package", price: "$2,500", description: "Comprehensive optimization protocol" },
    ],
  },
  cta: {
    heading: "Map Your Brain Today",
    description: "Schedule your qEEG brain mapping session and discover how neurofeedback can optimize your brain function.",
    buttonText: "Book Brain Map",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
