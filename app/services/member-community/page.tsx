import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Member Community Platform | REAL PT & Wellness",
  description: "Connect, share, and grow with the REAL PT member community and wellness network.",
};

const PAGE_DATA: ServicePageData = {
  title: "Member Community Platform",
  subtitle: "Connect, share, and grow with the REAL PT member community and wellness network.",
  overview: {
    heading: "Your Wellness Community",
    description: "The REAL PT Member Community is a private digital platform where members connect, share progress, join challenges, and access exclusive content. From accountability groups and wellness challenges to direct messaging with clinicians and peer support, our community platform makes health a team sport.",
    features: [
    "Private member-only community platform",
    "Wellness challenges & leaderboards",
    "Direct messaging with clinicians & coaches",
    "Progress sharing & accountability groups",
    "Exclusive member content & workshops",
    "Local meetup & event coordination",
    "Peer-to-peer wellness marketplace",
    "Mobile app access (iOS & Android)",
    ],
  },
  howItWorks: {
    heading: "Join the Community",
    steps: [
    { title: "Become a Member", description: "Any REAL PT membership tier includes access to our private community platform — just create your profile and connect." },
    { title: "Engage & Grow", description: "Join challenges, share your progress, connect with peers, and participate in exclusive workshops and Q&A sessions." },
    { title: "Level Up", description: "Earn points, badges, and rewards for engagement. Top community members get featured and receive exclusive perks." },
    ],
  },
  benefits: {
    heading: "Community Benefits",
    items: [
    "Accountability through peer connections",
    "Exclusive content from REAL PT clinicians",
    "Wellness challenges with real prizes",
    "Direct access to health professionals",
    "Local meetup coordination",
    "Points, badges, and reward system",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["REAL PT Members", "Wellness Enthusiasts", "Accountability Seekers", "Social Health Advocates", "Challenge Participants", "Local Community"],
  },
  cta: {
    heading: "Join the REAL Community",
    description: "Become a REAL PT member and unlock access to our private wellness community.",
    buttonText: "Join Now",
    buttonHref: "/memberships",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
