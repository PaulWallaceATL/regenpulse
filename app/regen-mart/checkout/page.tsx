import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";
import { CheckoutClient } from "./checkout-client";

export const metadata: Metadata = {
  title: "Checkout | Regen Mart",
  description: "Complete your Regen Mart order.",
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <PageHero
        title="Checkout"
        description="Review your cart and complete your order."
      />
      <div className="container mx-auto px-4 py-12">
        <CheckoutClient />
      </div>
      <Footer />
    </div>
  );
}
