import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Neuro Training & Cognitive Rehab | REAL PT & Wellness",
  description: "Brainwave training, neurofeedback, and cognitive rehabilitation for peak mental performance.",
};

const PAGE_DATA: ServicePageData = {
  title: "Neuro Training & Cognitive Rehab",
  subtitle: "Brainwave training, neurofeedback, and cognitive rehabilitation for peak mental performance.",
  overview: {
    heading: "Brain Optimization & Cognitive Recovery",
    description: "Our neurocognitive program combines EEG-based neurofeedback, brainwave entrainment, and cognitive rehabilitation exercises to optimize brain function. Whether you're recovering from a concussion, managing PTSD, or seeking peak mental performance, our neuro training protocols deliver measurable results.",
    features: [
    "Multi-channel EEG neurofeedback systems",
    "Brainwave entrainment & audio-visual stimulation",
    "Concussion & TBI cognitive recovery",
    "PTSD & anxiety reduction protocols",
    "Focus & attention optimization",
    "Sleep quality improvement programs",
    "Memory & executive function training",
    "Circadian light therapy integration",
    ],
  },
  howItWorks: {
    heading: "How Neuro Training Works",
    steps: [
    { title: "Brain Mapping", description: "An initial EEG assessment maps your brainwave patterns, identifying areas of dysregulation, overactivity, or underperformance." },
    { title: "Protocol Design", description: "Based on your brain map, we design a personalized neurofeedback protocol targeting your specific cognitive goals or recovery needs." },
    { title: "Progressive Training", description: "Regular neurofeedback sessions (20–40 minutes) train your brain to self-regulate, producing lasting improvements in focus, sleep, mood, and cognitive function." },
    ],
  },
  benefits: {
    heading: "Cognitive Benefits",
    items: [
    "Improved focus, attention, and mental clarity",
    "Faster concussion & TBI recovery",
    "Reduced PTSD, anxiety, and depression symptoms",
    "Better sleep architecture & quality",
    "Enhanced memory & executive function",
    "Peak performance for athletes & professionals",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Concussion & TBI Recovery", "Veterans & PTSD", "Athletes Seeking Peak Performance", "ADHD & Focus Issues", "Anxiety & Sleep Disorders", "Aging & Cognitive Decline"],
  },
  pricing: {
    heading: "Session Pricing",
    description: "Neurofeedback packages designed for progressive brain training over 10–20 sessions.",
    tiers: [
      { name: "Brain Map Assessment", price: "$150", description: "Initial EEG brain mapping & consultation" },
      { name: "10-Session Package", price: "$1,200", description: "Recommended starter protocol" },
      { name: "20-Session Package", price: "$2,000", description: "Comprehensive optimization protocol" },
    ],
  },
  cta: {
    heading: "Optimize Your Brain",
    description: "Schedule your brain mapping assessment and discover your cognitive potential.",
    buttonText: "Book Brain Assessment",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
