import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { DepartmentGrid } from "@/components/sections/department-grid";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Departments | RegenPulse",
  description:
    "Explore our 15 clinical and lifestyle departments for total wellness, regeneration, and performance.",
};

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <PageHero
        title="Departments"
        description="15 clinical and lifestyle departments for regeneration, recovery, and performance."
      />
      <DepartmentGrid />
      <Footer />
    </div>
  );
}
