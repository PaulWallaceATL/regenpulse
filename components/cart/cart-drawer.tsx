"use client";

import Image from "next/image";
import Link from "next/link";
import { Package, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";
import { cartTotal } from "@/lib/cart";

function formatPrice(dollars: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(dollars);
}

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem } = useCart();
  const total = cartTotal(items);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent
        side="right"
        className="flex w-full flex-col border-l border-border bg-background p-0 sm:max-w-md"
      >
        <SheetHeader className="border-b border-border px-4 py-4 text-left sm:px-6">
          <SheetTitle className="flex items-center gap-2 text-lg font-semibold">
            <ShoppingCart className="h-5 w-5" aria-hidden />
            Cart ({items.reduce((n, i) => n + i.quantity, 0)})
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-1 flex-col overflow-hidden">
          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 px-4 py-12 text-center">
              <div className="rounded-full bg-muted p-4">
                <ShoppingCart className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                Your cart is empty. Add equipment or products from Regen Mart.
              </p>
              <Button asChild variant="outline" onClick={closeCart}>
                <Link href="/regen-mart">Browse Regen Mart</Link>
              </Button>
            </div>
          ) : (
            <>
              <ul className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-3 border-b border-border py-4 last:border-0"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
                      {item.image_url ? (
                        <Image
                          src={item.image_url}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                          <Package className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      {item.sku && (
                        <p className="text-xs font-mono text-muted-foreground">
                          {item.sku}
                        </p>
                      )}
                      <p className="font-medium text-foreground truncate">
                        {item.name}
                      </p>
                      <p className="text-sm font-semibold tabular-nums text-foreground">
                        {formatPrice(item.price)}
                        {item.quantity > 1 && (
                          <span className="font-normal text-muted-foreground">
                            {" "}
                            × {item.quantity}
                          </span>
                        )}
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <div className="flex items-center rounded border border-input">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="flex h-7 w-7 items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="min-w-[1.5rem] text-center text-sm tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="flex h-7 w-7 items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Subtotal</span>
                  <span className="tabular-nums">{formatPrice(total)}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Tax and shipping calculated at checkout.
                </p>
                <Button className="mt-4 w-full" size="lg" asChild>
                  <Link href="/regen-mart/checkout" onClick={closeCart}>
                    Proceed to checkout
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
