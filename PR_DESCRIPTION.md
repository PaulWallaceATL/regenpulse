# REAL PT & Wellness – Copy, Services, and New Pages (Jon Swistock Notes)

## Plan (summary)

- **Routing:** App Router confirmed; all new routes under `/app`.
- **Copy:** Lives in components and page `metadata`; no MDX/CMS. Updated layout metadata, hero, explore-features, departments hero, nav, footer, contact.
- **Nav:** `navigation-2.tsx` — added Services dropdown (Aquatic Therapy, HBOT+EXOPOD, ExoSkin), Partners (Operator–Equity), Veterans; primary CTAs use `lib/realpt.ts`.
- **Images:** New dirs under `public/images/` (services/swimex, services/hbot-exopod, services/exoskin, veterans/ans). Placeholder used where assets not in repo; replace with brochure/stock as needed.
- **Services:** No existing `/services/*`; created `/services/aquatic-therapy`, `/services/hbot-exopod`, `/services/exoskin` using existing `PageHero`, `Button`, `Card`, `Footer`.
- **Config:** `lib/realpt.ts` — phone (386-872-2656), scheduling URL, contact URL, site name. All CTAs reference this.

## Changes

### A) Global positioning
- Layout default title/description/OG: "REAL PT & Wellness – Physical and Aquatic Therapy"; SwimEx and insurance + cash/membership mentioned.
- Homepage hero: REAL PT & Wellness headline; SwimEx in-house, PT + aquatic + recovery, insurance + cash/membership.
- Explore section: "Explore REAL PT & Wellness"; added HBOT + EXOPOD tile; copy tightened.
- Departments hero: REAL PT & Wellness + SwimEx line.
- Nav logo/wordmark and footer: REAL PT & Wellness; footer links include new services, partners, veterans.

### B) Aquatic Therapy (SwimEx) – `/services/aquatic-therapy`
- Hero, dual CTAs (Book Aquatic PT Eval, View Membership Options).
- "Why SwimEx" (adjustable current, multi-depth, clinical control, true aquatic PT).
- Use cases grid; integration & payment; pricing teaser $49.99/mo + higher tiers.
- Image: placeholder (add assets to `public/images/services/swimex/`).

### C) HBOT + EXOPOD – `/services/hbot-exopod`
- Hero, HBOT overview (2.0 ATA chamber), pricing table (TBD placeholders + TODO).
- EXOPOD modalities grid (all 11); benefits list; 3 tiers (REAL RESET, PERFORMANCE, ELITE) with TBD pricing.
- Getting Started 1–2–3; Add-On Gaming TV block; phone callout (REAL PT & Wellness, 386-872-2656).

### D) ExoSkin – `/services/exoskin`
- Hero, feature list (CryoSlimming with softened claim, CryoFacials, chin/cellulite, pain, EMS).
- How it works (3 steps); safety (monitoring, stop button); What’s Included / Provider Support (training, coaching, warranty, etc.).

### E) Operator–Equity Partnership – `/partners/operator-equity`
- Hero "Not a Franchise"; 3 differentiators; How it Works timeline; CTA Discuss Partnership.
- Linked in nav under Partners.

### F) Veterans ANS – `/veterans/ans-program`
- Section IDs: `#veterans-hero`, `#veterans-why-ans`, `#veterans-proof`, `#veterans-how-it-works`, `#veterans-who-for`, `#veterans-application`, `#veterans-cta`.
- Copy: Physio PS ANS, FDA-cleared, ~15 min, VA/DoD use (East Orange, Atlanta, Walter Reed, ONR) as “has been used”; POTS, PTSD, toxic exposure, Long COVID; REAL PT complements VA, shares reports at request.
- CTAs: Request ANS Evaluation, Discuss Referral Options.

### Config & QA
- `lib/realpt.ts`: phone, displayPhone, schedulingUrl, contactUrl, membershipsUrl, siteName.
- All new routes build and load; CTAs point to `/contact` or anchors; no `href="#"`.
- Placeholder image used where real assets not present; replace under `public/images/` as needed.
