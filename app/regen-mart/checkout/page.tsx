import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Footer } from "@/components/layout/footer";
import { CheckoutClient } from "./checkout-client";

export const metadata: Metadata = {
  title: "Checkout | Regen Mart",
  description: "Complete your Regen Mart order.",
};

export default function CheckoutPage() {
  return (
    <div className="brand-page">
      <PageHero
        title="Checkout"
        description="Review your cart and complete your order."
      />
      <div className="container mx-auto px-4 py-12">
        <div className="brand-panel p-4 sm:p-6">
          <CheckoutClient />
        </div>
      </div>
      <Footer />
    </div>
  );
}
