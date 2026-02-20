"use client";

import { CartProvider } from "@/contexts/cart-context";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { RegenMartChat } from "@/components/regen-mart/regen-mart-chat";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
      <RegenMartChat />
    </CartProvider>
  );
}
