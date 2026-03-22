import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Branded Apparel & Gear | REAL PT & Wellness",
  description: "Performance wear and recovery gear built for the REAL lifestyle.",
};

const PAGE_DATA: ServicePageData = {
  title: "Branded Apparel & Gear",
  subtitle: "Performance wear and recovery gear built for the REAL lifestyle.",
  overview: {
    heading: "Wear the Brand",
    description: "REAL PT branded apparel and gear is designed for performance, recovery, and lifestyle. From moisture-wicking training shirts to compression sleeves and recovery accessories, every piece carries the REAL PT identity and is built to perform during your most demanding sessions and beyond.",
    features: [
    "Moisture-wicking performance shirts & tanks",
    "Compression sleeves & recovery socks",
    "Training shorts & joggers",
    "Branded hoodies & outerwear",
    "Gym bags & recovery backpacks",
    "Headwear & accessories",
    "Limited edition drops",
    "Member-exclusive pricing",
    ],
  },
  howItWorks: {
    heading: "Shop REAL Gear",
    steps: [
    { title: "Browse Collection", description: "Shop our apparel line online through REAL Mart or in-clinic at our retail display." },
    { title: "Member Discounts", description: "REAL PT members get exclusive pricing and early access to limited edition drops." },
    { title: "Fast Delivery", description: "2-day shipping on all orders, or pick up in-clinic at your next appointment." },
    ],
  },
  benefits: {
    heading: "Why REAL Apparel",
    items: [
    "Performance-grade materials for training & recovery",
    "Represent the REAL PT community",
    "Member-exclusive pricing & early access",
    "Designed by athletes, for athletes",
    "Limited edition seasonal collections",
    "In-clinic pickup or 2-day shipping",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["REAL PT Members", "Athletes", "Fitness Enthusiasts", "Brand Ambassadors", "Gift Shoppers", "Recovery Focused"],
  },
  cta: {
    heading: "Shop the Collection",
    description: "Browse our latest apparel and gear on REAL Mart.",
    buttonText: "Shop Now",
    buttonHref: "/real-mart",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
