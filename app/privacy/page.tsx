import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Statement | RegenPulse",
  description: "RegenPulse privacy statement and data practices.",
};

export default function PrivacyPage() {
  return (
    <div className="brand-page min-h-screen">
      <div className="container mx-auto max-w-3xl px-4 py-16 sm:py-24">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Privacy Statement</h1>
        <p className="mt-4 text-muted-foreground">
          Our privacy statement and data practices are available here. For questions, please{" "}
          <Link href="/contact" className="font-medium text-primary underline-offset-2 hover:underline">
            contact us
          </Link>
          .
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block text-sm font-medium text-primary hover:underline"
        >
          ← Back to Contact
        </Link>
      </div>
    </div>
  );
}
