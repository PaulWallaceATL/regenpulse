import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Check,
} from "lucide-react";

const LINK_GROUPS = [
  {
    title: "Discover",
    links: [
      { href: "/", label: "Home" },
      { href: "/#departments", label: "Departments" },
      { href: "/#memberships", label: "Memberships" },
      { href: "/#partner-network", label: "Partner Network" },
    ],
  },
  {
    title: "For Business",
    links: [
      { href: "/#corporate-wellness", label: "Corporate Wellness" },
      { href: "/#regen-university", label: "Regen University" },
      { href: "/#creator-portal", label: "Creator Portal" },
    ],
  },
  {
    title: "Programs & Shop",
    links: [
      { href: "/#regen-fresh", label: "Regen Fresh" },
      { href: "/#regen-mart", label: "Regen Mart" },
      { href: "/#cost-plus-rx", label: "Cost Plus RX" },
      { href: "/#regen-credit", label: "Regen Credit" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#gamification", label: "Gamification" },
      { href: "/#weekend-warrior", label: "Wellness Refunds" },
      { href: "/request-deck", label: "Request Franchise Deck" },
    ],
  },
] as const;

const SOCIAL_LINKS = [
  { href: "https://twitter.com/regenpulse", label: "Twitter", icon: Twitter },
  { href: "https://linkedin.com/company/regenpulse", label: "LinkedIn", icon: Linkedin },
  { href: "https://instagram.com/regenpulse", label: "Instagram", icon: Instagram },
  { href: "https://youtube.com/@regenpulse", label: "YouTube", icon: Youtube },
] as const;

const TRUST_AND_COMPLIANCE = [
  "HIPAA-Compliant Billing",
  "Medicare Credentialed",
  "Multi-State Insurance Contracts",
  "Real-Time Benefits Check",
  "HSA/FSA Superbills",
  "Secure Billing & Claims",
] as const;

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Link groups */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social media */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Follow us
          </h3>
          <ul className="mt-4 flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Trust signals & compliance */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-4">
            Trust & compliance
          </h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {TRUST_AND_COMPLIANCE.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} RegenPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
