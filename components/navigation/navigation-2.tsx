"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, ChevronDown, GraduationCap, Building2, Landmark, Waves, Wind, Sparkles } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { cn } from "@/lib/utils";
import { REALPT } from "@/lib/realpt";

const SOLUTIONS_ITEMS = [
  {
    label: "REAL University",
    href: "/real-university",
    description: "Partner with athletics and university wellness to serve campuses.",
    icon: GraduationCap,
  },
  {
    label: "Corporate",
    href: "/corporate-wellness",
    description: "Enterprise wellness programs with guaranteed ROI and tiered pricing.",
    icon: Building2,
  },
  {
    label: "Government",
    href: "/government",
    description: "Public sector wellness and workforce health programs.",
    icon: Landmark,
  },
] as const;

const SERVICES_ITEMS = [
  {
    label: "Aquatic Therapy (SwimEx)",
    href: "/services/aquatic-therapy",
    description: "Clinical-grade hydrotherapy with adjustable current and multi-depth control.",
    icon: Waves,
  },
  {
    label: "HBOT + EXOPOD",
    href: "/services/hbot-exopod",
    description: "Hyperbaric oxygen therapy and stacked recovery modalities.",
    icon: Wind,
  },
  {
    label: "ExoSkin Body Contouring",
    href: "/services/exoskin",
    description: "Body contouring, cryo, and recovery treatments.",
    icon: Sparkles,
  },
] as const;

const PRIMARY_LINKS = [
  { label: "Explore", href: "/departments" },
  { label: "Services", href: "/services/aquatic-therapy" },
  { label: "Pricing", href: "/memberships" },
  { label: "Partners", href: "/partners/operator-equity" },
  { label: "Veterans", href: "/veterans/ans-program" },
] as const;

export default function Navigation2() {
  const { openCart, itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) setSolutionsOpen(false);
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(target)) setServicesOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent px-3 py-3 sm:px-6 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-[1200px] bg-transparent">
        <div className="relative rounded-full border border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-950/55 backdrop-blur-xl shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-neutral-950 dark:text-white"
              aria-label={`${REALPT.siteName} Home`}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950">
                R
              </span>
              <span className="hidden sm:inline">REAL PT & Wellness</span>
            </Link>

            {/* Desktop Center Links */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/departments" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors">Explore</Link>
              {/* Services dropdown */}
              <div className="relative" ref={servicesDropdownRef}>
                <button
                  type="button"
                  onClick={() => { setServicesOpen((v) => !v); setSolutionsOpen(false); }}
                  onMouseEnter={() => { setServicesOpen(true); setSolutionsOpen(false); }}
                  className="flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-2"
                    >
                      <div className="w-72 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl shadow-xl py-2">
                        {SERVICES_ITEMS.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setServicesOpen(false)}
                              className="flex gap-3 px-4 py-3 text-left hover:bg-neutral-100 dark:hover:bg-neutral-900/80 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                                <Icon className="h-4 w-4" />
                              </span>
                              <div>
                                <div className="font-medium text-neutral-900 dark:text-white">{item.label}</div>
                                <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Solutions dropdown — next to Services */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => { setSolutionsOpen((v) => !v); setServicesOpen(false); }}
                  onMouseEnter={() => { setSolutionsOpen(true); setServicesOpen(false); }}
                  className="flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors"
                  aria-expanded={solutionsOpen}
                  aria-haspopup="true"
                >
                  Solutions
                  <ChevronDown className={cn("h-4 w-4 transition-transform", solutionsOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      onMouseLeave={() => setSolutionsOpen(false)}
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-2"
                    >
                      <div className="w-72 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl shadow-xl py-2">
                        {SOLUTIONS_ITEMS.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setSolutionsOpen(false)}
                              className="flex gap-3 px-4 py-3 text-left hover:bg-neutral-100 dark:hover:bg-neutral-900/80 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                                <Icon className="h-4 w-4" />
                              </span>
                              <div>
                                <div className="font-medium text-neutral-900 dark:text-white">{item.label}</div>
                                <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="/memberships" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors">Pricing</Link>
              <Link href="/partners/operator-equity" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors">Partners</Link>
              <Link href="/veterans/ans-program" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors">Veterans</Link>
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
                href={REALPT.schedulingUrl}
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

          {/* Mobile Menu Panel — Solutions expandable */}
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
                  <Link href="/departments" className="block rounded-2xl border border-neutral-200/60 bg-white/40 px-4 py-3 text-sm font-medium text-neutral-700 dark:border-neutral-800/60 dark:bg-neutral-900/30 dark:text-neutral-200" onClick={() => setMobileMenuOpen(false)}>Explore</Link>
                  <Link href="/memberships" className="block rounded-2xl border border-neutral-200/60 bg-white/40 px-4 py-3 text-sm font-medium text-neutral-700 dark:border-neutral-800/60 dark:bg-neutral-900/30 dark:text-neutral-200" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                  <Link href="/partners/operator-equity" className="block rounded-2xl border border-neutral-200/60 bg-white/40 px-4 py-3 text-sm font-medium text-neutral-700 dark:border-neutral-800/60 dark:bg-neutral-900/30 dark:text-neutral-200" onClick={() => setMobileMenuOpen(false)}>Partners</Link>
                  <Link href="/veterans/ans-program" className="block rounded-2xl border border-neutral-200/60 bg-white/40 px-4 py-3 text-sm font-medium text-neutral-700 dark:border-neutral-800/60 dark:bg-neutral-900/30 dark:text-neutral-200" onClick={() => setMobileMenuOpen(false)}>Veterans</Link>

                  {/* Services expandable */}
                  <div className="rounded-2xl border border-neutral-200/60 bg-white/40 dark:border-neutral-800/60 dark:bg-neutral-900/30 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-200"
                      aria-expanded={mobileServicesOpen}
                    >
                      Services
                      <ChevronDown className={cn("h-4 w-4 transition-transform", mobileServicesOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-neutral-200/60 dark:border-neutral-800/60 px-4 py-2 space-y-1">
                            {SERVICES_ITEMS.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-xl px-3 py-2.5 text-sm text-neutral-600 dark:text-neutral-300 hover:bg-white/60 dark:hover:bg-neutral-800/50"
                                onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Solutions expandable */}
                  <div className="rounded-2xl border border-neutral-200/60 bg-white/40 dark:border-neutral-800/60 dark:bg-neutral-900/30 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setMobileSolutionsOpen((v) => !v)}
                      className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-200"
                      aria-expanded={mobileSolutionsOpen}
                    >
                      Solutions
                      <ChevronDown className={cn("h-4 w-4 transition-transform", mobileSolutionsOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {mobileSolutionsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-neutral-200/60 dark:border-neutral-800/60 px-4 py-2 space-y-1">
                            {SOLUTIONS_ITEMS.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-xl px-3 py-2.5 text-sm text-neutral-600 dark:text-neutral-300 hover:bg-white/60 dark:hover:bg-neutral-800/50"
                                onClick={() => { setMobileMenuOpen(false); setMobileSolutionsOpen(false); }}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

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
                      href={REALPT.schedulingUrl}
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
