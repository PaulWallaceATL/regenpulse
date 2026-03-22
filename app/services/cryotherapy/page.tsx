import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Cryotherapy | REAL PT & Wellness",
  description: "Whole-body and localized cryotherapy for inflammation, recovery, and performance.",
};

const PAGE_DATA: ServicePageData = {
  title: "Cryotherapy",
  subtitle: "Whole-body and localized cryotherapy for inflammation, recovery, and performance.",
  overview: {
    heading: "Clinical Cryotherapy",
    description: "Cryotherapy at REAL PT & Wellness uses controlled cold exposure to trigger powerful anti-inflammatory and recovery responses. Our whole-body cryo chamber delivers sessions at -166°F to -256°F, while localized cryo units target specific injuries and pain points with precision.",
    features: [
    "Whole-body cryotherapy chamber",
    "Localized cryo for targeted injury treatment",
    "Temperatures ranging -166°F to -256°F",
    "3-minute whole-body sessions",
    "Post-workout inflammation reduction",
    "Chronic pain & arthritis relief",
    "Metabolism boost & calorie burn",
    "Mood enhancement (endorphin release)",
    ],
  },
  howItWorks: {
    heading: "How Cryotherapy Works",
    steps: [
    { title: "Cold Exposure", description: "Step into our cryo chamber for a 2–3 minute session. Extreme cold triggers vasoconstriction, flushing inflammation from tissues." },
    { title: "Recovery Response", description: "Upon exiting, your body initiates a powerful rewarming response — flooding tissues with oxygen-rich blood, anti-inflammatory proteins, and endorphins." },
    { title: "Cumulative Benefits", description: "Regular sessions (2–3x per week) build cumulative anti-inflammatory and performance benefits, enhancing recovery capacity over time." },
    ],
  },
  benefits: {
    heading: "Cryotherapy Benefits",
    items: [
    "Rapid inflammation reduction in 3 minutes",
    "Accelerated muscle & joint recovery",
    "Natural endorphin & mood boost",
    "Improved sleep quality",
    "Metabolic boost (500–800 calorie afterburn)",
    "Reduced chronic pain & arthritis symptoms",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Athletes & Competitors", "Chronic Pain & Arthritis", "Post-Surgical Recovery", "Weight Management", "Mood & Mental Health", "Anti-Aging & Skin Health"],
  },
  pricing: {
    heading: "Session Pricing",
    description: "Single cryo sessions and packages available. Unlimited cryo included in membership plans.",
    tiers: [
      { name: "Single Session", price: "$45", description: "3-minute whole-body cryo session" },
      { name: "10-Pack", price: "$350", description: "Save 22% with a cryo package" },
      { name: "Unlimited", price: "From $149/mo", description: "Included in select membership tiers" },
    ],
  },
  cta: {
    heading: "Feel the Freeze",
    description: "Book your cryotherapy session and experience the most powerful 3 minutes in recovery.",
    buttonText: "Book Cryo Session",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
