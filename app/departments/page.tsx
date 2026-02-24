import type { Metadata } from "next";
import { DepartmentsVideoHero } from "@/components/departments/DepartmentsVideoHero";
import PricingMemberships from "@/components/departments/PricingMemberships";
import { DepartmentGrid } from "@/components/sections/department-grid";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Departments | RegenPulse",
  description:
    "Explore our 15 clinical and lifestyle departments for total wellness, regeneration, and performance.",
};

export default function DepartmentsPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden">
      <DepartmentsVideoHero />
      <PricingMemberships />
      <section className="scroll-mt-6" aria-labelledby="explore-departments-heading">
        <div className="container mx-auto px-4 pt-8 pb-4">
          <h2 id="explore-departments-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Explore Departments
          </h2>
          <p className="mt-2 text-muted-foreground">
            Browse by department, function, or monthly cost. View full equipment lists for each area.
          </p>
        </div>
        <DepartmentGrid />
      </section>
      <Footer />
    </div>
  );
}
