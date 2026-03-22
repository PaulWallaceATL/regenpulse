import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import type { ServicePageData } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Y-Strap Chiropractic & Manual Therapy | REAL PT & Wellness",
  description: "Spinal decompression, Y-strap adjustments, and advanced manual therapy for pain relief.",
};

const PAGE_DATA: ServicePageData = {
  title: "Y-Strap Chiropractic & Manual Therapy",
  subtitle: "Spinal decompression, Y-strap adjustments, and advanced manual therapy for pain relief.",
  overview: {
    heading: "Precision Chiropractic Care",
    description: "Our chiropractic program specializes in the Y-Strap technique — a targeted spinal decompression method that provides immediate relief for compressed discs, nerve impingement, and chronic back pain. Combined with manual therapy and integrated with our recovery technology suite, this is chiropractic evolved.",
    features: [
    "Y-Strap spinal decompression technique",
    "Full-spine & extremity adjustments",
    "Soft tissue mobilization & myofascial release",
    "Spinal X-ray analysis & diagnostics",
    "Posture correction programs",
    "Headache & migraine relief protocols",
    "Sciatica & radiculopathy treatment",
    "Pre/post-surgical spinal care",
    ],
  },
  howItWorks: {
    heading: "Treatment Process",
    steps: [
    { title: "Spinal Assessment", description: "Digital X-rays, postural analysis, and neurological screening to identify the root cause of your pain and dysfunction." },
    { title: "Targeted Adjustment", description: "Precise Y-Strap decompression and manual adjustments tailored to your specific spinal conditions and comfort level." },
    { title: "Recovery Integration", description: "Complementary modalities like PEMF, red light therapy, and corrective exercises to maintain alignment and prevent recurrence." },
    ],
  },
  benefits: {
    heading: "Benefits of Y-Strap Chiropractic",
    items: [
    "Immediate relief for compressed discs & nerve impingement",
    "Non-surgical spinal decompression alternative",
    "Improved range of motion & flexibility",
    "Reduced chronic back, neck, and headache pain",
    "Enhanced recovery when combined with PT & regenerative services",
    "Evidence-based protocols with measurable outcomes",
    ],
  },
  whoIsItFor: {
    heading: "Who Is This For",
    audiences: ["Chronic Back Pain", "Sciatica Patients", "Athletes", "Desk Workers", "Post-Accident Recovery", "Headache & Migraine Sufferers"],
  },
  pricing: {
    heading: "Insurance & Pricing",
    description: "Most insurance plans cover chiropractic care. We accept Medicare, major PPOs/HMOs, workers' comp, and offer competitive self-pay rates.",
  },
  cta: {
    heading: "Get Aligned Today",
    description: "Book your chiropractic consultation and experience the difference precision spinal care makes.",
    buttonText: "Book Chiropractic Visit",
  },
};

export default function Page() {
  return <ServicePageTemplate data={PAGE_DATA} />;
}
