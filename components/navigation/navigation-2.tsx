"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/cart-context";

const PRIMARY_LINKS = [
  { label: "Explore", href: "/departments" },
  { label: "Memberships", href: "/memberships" },
  { label: "Solutions", href: "/corporate-wellness" },
  { label: "Pricing", href: "/memberships#tier-comparison" },
] as const;

export default function Navigation2() {
  const { openCart, itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent px-3 py-3 sm:px-6 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-[1200px] bg-transparent">
        <div className="relative rounded-full border border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-950/55 backdrop-blur-xl shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-neutral-950 dark:text-white"
              aria-label="RegenPulse Home"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950">
                R
              </span>
              <span className="hidden sm:inline">RegenPulse</span>
            </Link>

            {/* Desktop Center Links */}
            <nav className="hidden md:flex items-center gap-8">
              {PRIMARY_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={openCart}
                className="relative hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors"
                aria-label={itemCount > 0 ? `Open cart, ${itemCount} items` : "Open cart"}
              >
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-neutral-950 px-1 text-[10px] font-medium text-white dark:bg-white dark:text-neutral-950">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </button>
              <Link
                href="/memberships"
                className="hidden sm:inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors"
              >
                Memberships
              </Link>
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 transition-colors"
              >
                Book a Consult
              </Link>

              {/* Mobile menu button */}
              <button
                className="inline-flex md:hidden items-center justify-center rounded-full p-2 text-neutral-700 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Panel — flat links, no dropdowns */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden px-4 pb-4 md:hidden"
              >
                <div className="space-y-2 pt-2">
                  {PRIMARY_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block rounded-2xl border border-neutral-200/60 bg-white/40 px-4 py-3 text-sm font-medium text-neutral-700 dark:border-neutral-800/60 dark:bg-neutral-900/30 dark:text-neutral-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        openCart();
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200/60 bg-white/60 px-4 py-3 text-sm font-semibold text-neutral-900 dark:border-neutral-800/60 dark:bg-neutral-900/40 dark:text-white"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Cart {itemCount > 0 ? `(${itemCount})` : ""}
                    </button>
                    <Link
                      href="/memberships"
                      className="inline-flex items-center justify-center rounded-2xl border border-neutral-200/60 bg-white/60 px-4 py-3 text-sm font-semibold text-neutral-900 dark:border-neutral-800/60 dark:bg-neutral-900/40 dark:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Memberships
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-2xl bg-neutral-950 px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Book a Consult
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
