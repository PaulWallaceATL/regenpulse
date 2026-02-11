import { HeroSection } from "@/components/sections/hero-section";
import { MembershipBenefits } from "@/components/sections/membership-benefits";
import { WeekendWarrior } from "@/components/sections/weekend-warrior";
import { GamifiedHealth } from "@/components/sections/gamified-health";
import { RegenCredit } from "@/components/sections/regen-credit";
import { CreatorPortal } from "@/components/sections/creator-portal";
import { CreatorFeatures } from "@/components/sections/creator-features";
import { GamificationIntro } from "@/components/sections/gamification-intro";
import { GamificationRewards } from "@/components/sections/gamification-rewards";
import { CorporateWellness } from "@/components/sections/corporate-wellness";
import { RegenUniversity } from "@/components/sections/regen-university";
import { RegenFresh } from "@/components/sections/regen-fresh";
import { RegenMart } from "@/components/sections/regen-mart";
import { CostPlusRx } from "@/components/sections/cost-plus-rx";
import { DepartmentGrid } from "@/components/sections/department-grid";
import { MembershipTiers } from "@/components/sections/membership-tiers";
import { PartnerNetwork } from "@/components/sections/partner-network";
import { PaymentOptions } from "@/components/sections/payment-options";
import { TrustFooter } from "@/components/sections/trust-footer";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <section id="membership-benefits" aria-label="Membership benefits">
        <MembershipBenefits />
      </section>
      <WeekendWarrior />
      <GamifiedHealth />
      <RegenCredit />
      <CreatorPortal />
      <CreatorFeatures />
      <GamificationIntro />
      <GamificationRewards />
      <section id="corporate-wellness" aria-label="Corporate wellness">
        <CorporateWellness />
      </section>
      <section id="regen-university" aria-label="Regen University">
        <RegenUniversity />
      </section>
      <RegenFresh />
      <section id="regen-mart" aria-label="Regen Mart">
        <RegenMart />
      </section>
      <CostPlusRx />
      <section id="departments" aria-label="Departments">
        <DepartmentGrid />
      </section>
      <section id="memberships" aria-label="Membership tiers">
        <MembershipTiers />
      </section>
      <section id="partner-network" aria-label="Partner network">
        <PartnerNetwork />
      </section>
      <PaymentOptions />
      <TrustFooter />
      <Footer />
    </div>
  );
}
