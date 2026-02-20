"use client";

import Link from "next/link";
import { useCart } from "@/contexts/cart-context";
import { cartTotal } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

function formatPrice(dollars: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(dollars);
}

export function CheckoutClient() {
  const { items } = useCart();
  const total = cartTotal(items);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-md rounded-lg border border-border bg-muted/30 p-8 text-center">
        <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground" />
        <h2 className="mt-4 text-lg font-semibold">Your cart is empty</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Add equipment or products from Regen Mart to checkout.
        </p>
        <Button asChild className="mt-6">
          <Link href="/regen-mart">Browse Regen Mart</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <ul className="space-y-3 rounded-lg border border-border bg-card p-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between text-sm"
          >
            <span className="text-foreground">
              {item.name} × {item.quantity}
            </span>
            <span className="tabular-nums text-foreground">
              {formatPrice(item.price * item.quantity)}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between text-lg font-semibold">
        <span>Total</span>
        <span className="tabular-nums">{formatPrice(total)}</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Checkout and payment integration coming soon. For now, use the cart to
        collect items and contact us for orders.
      </p>
      <Button asChild variant="outline">
        <Link href="/regen-mart">Continue shopping</Link>
      </Button>
    </div>
  );
}
