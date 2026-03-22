import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "REAL TV Social Media Content | REAL PT & Wellness",
  description: "Live health commerce, expert demos, and wellness content across all platforms.",
};

const PAGE_DATA: ServicePageData = {
  title: "REAL TV Social Media Content",
  secondaryImage: "/images/services/real-tv-2.png",
  heroImage: "/images/services/real-tv.jpg",
  subtitle: "Live health commerce, expert demos, and wellness content across all platforms.",
  overview: {
    heading: "Health Content That Converts",
    description: "REAL TV is our live commerce and social media content engine. We produce daily health and wellness content — expert demonstrations, product reviews, live Q&As, and behind-the-scenes clinic footage — distributed across YouTube, Instagram, TikTok, and our own REAL TV streaming platform. For brands and partners, REAL TV offers co-branded content and influencer placements.",
    features: [
    "Daily live health commerce broadcasts",
    "Expert therapy & product demonstrations",
    "Behind-the-scenes clinic content",
    "Social media content across all platforms",
    "Co-branded content for partner brands",
    "Influencer & health expert collaborations",
    "Live product drops with exclusive pricing",
    "Streaming on web, mobile & smart TV",
    ],
  },
  howItWorks: {
    heading: "How REAL TV Works",
    steps: [
    { title: "Watch & Shop", description: "Tune in to daily live broadcasts featuring therapy demos, product reveals, and expert health discussions — buy featured products in real time." },
    { title: "Learn & Engage", description: "Follow our social channels for daily health tips, workout routines, recovery protocols, and community challenges." },
    { title: "Partner & Promote", description: "Brands and providers can partner with REAL TV for co-branded content, product placements, and influencer collaborations." },
    ],
  },
  benefits: {
    heading: "REAL TV Benefits",
    items: [
    "Daily health content from licensed clinicians",
    "Live commerce with exclusive deals",
    "Multi-platform distribution (YouTube, IG, TikTok)",
    "Brand partnership & co-branded content opportunities",
    "Build community around health & wellness",
    "Free with Prime Elite membership",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Health & Wellness Enthusiasts", "REAL PT Members", "Brand Partners", "Influencers & Content Creators", "Product Companies", "Wellness Educators"],
  },
  cta: {
    heading: "Watch REAL TV",
    description: "Follow us on social media or stream REAL TV live — free with Prime Elite membership.",
    buttonText: "Start Watching",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
