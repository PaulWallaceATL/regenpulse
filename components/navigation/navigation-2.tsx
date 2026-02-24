"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Sliders,
  LifeBuoy,
  FileText,
  Menu,
  X,
  MessageCircle,
  Users,
  HeartPulse,
  Building2,
  GraduationCap,
  Map,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "@/contexts/cart-context";

type MenuItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

type PrimaryLink =
  | { label: string; key: string }
  | { label: string; href: string };

export default function Navigation2() {
  const { openCart, itemCount } = useCart();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const menuItems: Record<string, MenuItem[]> = useMemo(
    () => ({
      Explore: [
        {
          icon: HeartPulse,
          title: "Departments",
          description: "Browse diagnostics, recovery, and performance programs",
          href: "/departments",
        },
        {
          icon: Map,
          title: "Partner Network",
          description: "Find a RegenPulse partner location near you",
          href: "/partner-network",
        },
        {
          icon: GraduationCap,
          title: "Regen University",
          description: "Learn protocols, fundamentals, and best practices",
          href: "/regen-university",
        },
      ],
      Memberships: [
        {
          icon: Users,
          title: "Memberships",
          description: "Compare tiers and choose the right level of access",
          href: "/memberships",
        },
        {
          icon: Sliders,
          title: "How it works",
          description: "See what's included and how to get started",
          href: "/memberships#how-it-works",
        },
        {
          icon: FileText,
          title: "FAQs",
          description: "Quick answers about access, booking, and benefits",
          href: "/memberships#faq",
        },
      ],
      Solutions: [
        {
          icon: Building2,
          title: "Corporate Wellness",
          description: "Performance and recovery programs for teams",
          href: "/corporate-wellness",
        },
        {
          icon: MessageCircle,
          title: "Partner Network",
          description: "Join the ecosystem of modern wellness providers",
          href: "/partner-network",
        },
        {
          icon: LifeBuoy,
          title: "Support",
          description: "Questions? Talk to our team",
          href: "/contact",
        },
      ],
    }),
    [],
  );

  const primaryLinks = useMemo<PrimaryLink[]>(
    () => [
      { label: "Explore", key: "Explore" },
      { label: "Memberships", key: "Memberships" },
      { label: "Solutions", key: "Solutions" },
      { label: "Pricing", href: "/memberships#tier-comparison" },
    ],
    [],
  );

  // Close dropdown on outside click / Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveMenu(null);
    }
    function onClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (!containerRef.current?.contains(target)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const isDropdown = (key: string) => !!menuItems[key];

  return (
    <div
      ref={containerRef}
      className="sticky top-0 z-50 w-full px-3 py-3 sm:px-6"
    >
      {/* Glass wrapper */}
      <div className="mx-auto max-w-[1200px]">
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
              {primaryLinks.map((link) => {
                if ("href" in link) {
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  );
                }

                const open = activeMenu === link.key;
                return (
                  <button
                    key={link.key}
                    onClick={() => setActiveMenu(open ? null : link.key)}
                    onMouseEnter={() => setActiveMenu(link.key)}
                    className={`text-sm font-medium transition-colors ${
                      open
                        ? "text-neutral-950 dark:text-white"
                        : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
                    }`}
                    aria-expanded={open}
                    aria-haspopup="menu"
                  >
                    {link.label}
                  </button>
                );
              })}
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

          {/* Desktop Dropdown Panel */}
          <AnimatePresence>
            {activeMenu && isDropdown(activeMenu) && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="absolute left-1/2 top-[72px] w-[min(900px,calc(100vw-24px))] -translate-x-1/2 rounded-3xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white/85 dark:bg-neutral-950/80 backdrop-blur-xl shadow-xl p-4"
                onMouseLeave={() => setActiveMenu(null)}
                role="menu"
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {menuItems[activeMenu].map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group flex gap-3 rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/40 dark:bg-neutral-900/30 p-4 hover:bg-white/70 dark:hover:bg-neutral-900/60 transition-colors"
                        role="menuitem"
                        onClick={() => setActiveMenu(null)}
                      >
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-neutral-950 dark:text-white">
                            {item.title}
                          </div>
                          <div className="mt-1 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-300">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Panel */}
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
                  {primaryLinks.map((link) => {
                    if ("href" in link) {
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block rounded-2xl border border-neutral-200/60 bg-white/40 px-4 py-3 text-sm font-medium text-neutral-700 dark:border-neutral-800/60 dark:bg-neutral-900/30 dark:text-neutral-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      );
                    }

                    return (
                      <div
                        key={link.key}
                        className="rounded-2xl border border-neutral-200/60 bg-white/40 dark:border-neutral-800/60 dark:bg-neutral-900/30"
                      >
                        <button
                          onClick={() =>
                            setActiveMenu((v) => (v === link.key ? null : link.key))
                          }
                          className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-neutral-950 dark:text-white"
                        >
                          {link.label}
                          <span className="text-neutral-500 dark:text-neutral-400">
                            {activeMenu === link.key ? "—" : "+"}
                          </span>
                        </button>

                        <AnimatePresence>
                          {activeMenu === link.key && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.18, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-2 px-3 pb-3">
                                {menuItems[link.key].map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      className="flex gap-3 rounded-xl border border-neutral-200/60 bg-white/60 px-3 py-3 dark:border-neutral-800/60 dark:bg-neutral-900/50"
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setActiveMenu(null);
                                      }}
                                    >
                                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950">
                                        <Icon className="h-5 w-5" />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-sm font-semibold text-neutral-950 dark:text-white">
                                          {item.title}
                                        </div>
                                        <div className="line-clamp-2 text-xs text-neutral-600 dark:text-neutral-300">
                                          {item.description}
                                        </div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}

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
    </div>
  );
}
