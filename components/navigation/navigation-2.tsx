"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, ChevronDown, GraduationCap, Building2, Landmark } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { cn } from "@/lib/utils";
import { REALPT } from "@/lib/realpt";

/* ── Services mega-menu data (5 columns, matching reference site) ── */

const SERVICES_MEGA = [
  {
    category: "Clinical Services",
    items: [
      { label: "Medicare Home Health PT & OT", href: "/services/medicare-home-health" },
      { label: "In-Clinic Physical Therapy", href: "/services/in-clinic-pt" },
      { label: "Y-Strap Chiropractic & Manual Therapy", href: "/services/chiropractic" },
      { label: "Occupational Therapy", href: "/services/occupational-therapy" },
      { label: "Symmetry Neuro Therapy", href: "/services/symmetry-neuro-therapy" },
    ],
  },
  {
    category: "Wellness & Recovery Technology",
    items: [
      { label: "Hyperbaric Oxygen Therapy (HBOT)", href: "/services/hbot-exopod" },
      { label: "Red Light Therapy", href: "/services/red-light-therapy" },
      { label: "PEMF", href: "/services/pemf" },
      { label: "Compression Therapy", href: "/services/compression-therapy" },
      { label: "Cryotherapy", href: "/services/cryotherapy" },
      { label: "Neuro Training & Cognitive Rehab", href: "/services/neuro-training" },
      { label: "ExoSkin Thermal Shock", href: "/services/exoskin" },
      { label: "SwimEx Aquatic Therapy", href: "/services/aquatic-therapy" },
      { label: "ANS Intelligence Testing", href: "/veterans/ans-program" },
    ],
  },
  {
    category: "Regenerative & Injection Services",
    items: [
      { label: "Joint Injections", href: "/services/joint-injections" },
      { label: "Trigger Point Injections", href: "/services/trigger-point-injections" },
      { label: "IV Therapy", href: "/services/iv-therapy" },
      { label: "B12 & Peptide Programs", href: "/services/b12-peptides" },
      { label: "GLP-1 Weight Loss Programs", href: "/services/glp1-weight-loss" },
    ],
  },
  {
    category: "Retail & Consumer Products",
    items: [
      { label: "REAL Fresh Nutrition", href: "/services/real-fresh-nutrition" },
      { label: "Branded Apparel & Gear", href: "/services/apparel" },
      { label: "Recovery Tools", href: "/services/recovery-tools" },
      { label: "Wearable Hardware", href: "/services/wearable-hardware" },
      { label: "Wearable Subscriptions", href: "/services/wearable-subscriptions" },
    ],
  },
  {
    category: "Digital & Community",
    items: [
      { label: "CLINIX Megabilling SaaS", href: "/services/clinix-saas" },
      { label: "Device Leasing & E-Commerce", href: "/services/device-leasing" },
      { label: "Mobile Events", href: "/services/mobile-events" },
      { label: "Partner Commissions", href: "/services/partner-commissions" },
      { label: "Corporate Telehealth", href: "/services/corporate-telehealth" },
      { label: "REAL TV Social Media Content", href: "/services/real-tv" },
      { label: "Member Community Platform", href: "/services/member-community" },
    ],
  },
] as const;

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

              {/* Services mega dropdown */}
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
                      className="fixed left-1/2 top-[68px] -translate-x-1/2 z-[60] w-[96vw] max-w-[1160px]"
                    >
                      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-950/95 backdrop-blur-xl shadow-2xl">
                        <div className="grid grid-cols-5 gap-0 divide-x divide-neutral-800/60 p-6">
                          {SERVICES_MEGA.map((col) => (
                            <div key={col.category} className="px-5 first:pl-0 last:pr-0">
                              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-400">
                                {col.category}
                              </h3>
                              <ul className="space-y-1">
                                {col.items.map((item) => (
                                    <li key={item.label}>
                                      <Link
                                        href={item.href}
                                        onClick={() => setServicesOpen(false)}
                                        className="block rounded-lg px-2.5 py-2 text-[13px] leading-snug transition-colors text-cyan-400 hover:bg-white/5 hover:text-cyan-300"
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Solutions dropdown */}
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
              <Link href="/veterans/ky-hbot" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors">KY HBOT for Vets</Link>
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
                  <Link href="/departments" className="block rounded-2xl border border-neutral-800/60 bg-neutral-900/30 px-4 py-3 text-sm font-medium text-neutral-200" onClick={() => setMobileMenuOpen(false)}>Explore</Link>
                  <Link href="/memberships" className="block rounded-2xl border border-neutral-800/60 bg-neutral-900/30 px-4 py-3 text-sm font-medium text-neutral-200" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                  <Link href="/partners/operator-equity" className="block rounded-2xl border border-neutral-800/60 bg-neutral-900/30 px-4 py-3 text-sm font-medium text-neutral-200" onClick={() => setMobileMenuOpen(false)}>Partners</Link>
                  <Link href="/veterans/ans-program" className="block rounded-2xl border border-neutral-800/60 bg-neutral-900/30 px-4 py-3 text-sm font-medium text-neutral-200" onClick={() => setMobileMenuOpen(false)}>Veterans</Link>
                  <Link href="/veterans/ky-hbot" className="block rounded-2xl border border-neutral-800/60 bg-neutral-900/30 px-4 py-3 text-sm font-medium text-neutral-200" onClick={() => setMobileMenuOpen(false)}>KY HBOT for Vets</Link>

                  {/* Services expandable — shows all 5 categories */}
                  <div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/30 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-neutral-200"
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
                          <div className="border-t border-neutral-800/60 px-4 py-3 space-y-4 max-h-[60vh] overflow-y-auto">
                            {SERVICES_MEGA.map((col) => (
                              <div key={col.category}>
                                <h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-500">
                                  {col.category}
                                </h4>
                                <div className="space-y-0.5">
                                  {col.items.map((item) => (
                                      <Link
                                        key={item.label}
                                        href={item.href}
                                        className="block rounded-lg px-2.5 py-2 text-[13px] leading-snug transition-colors text-cyan-400 hover:bg-white/5"
                                        onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                                      >
                                        {item.label}
                                      </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Solutions expandable */}
                  <div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/30 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setMobileSolutionsOpen((v) => !v)}
                      className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-neutral-200"
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
                          <div className="border-t border-neutral-800/60 px-4 py-2 space-y-1">
                            {SOLUTIONS_ITEMS.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-xl px-3 py-2.5 text-sm text-neutral-300 hover:bg-neutral-800/50"
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
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-800/60 bg-neutral-900/40 px-4 py-3 text-sm font-semibold text-white"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Cart {itemCount > 0 ? `(${itemCount})` : ""}
                    </button>
                    <Link
                      href={REALPT.schedulingUrl}
                      className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
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
