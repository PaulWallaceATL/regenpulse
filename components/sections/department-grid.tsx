"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { supabase } from "@/lib/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Download } from "lucide-react";
import { FacilityRender, PLACEHOLDER_FACILITY_GLB } from "@/components/canvas/facility-render";

export type SortOption = "department" | "function" | "monthly_cost";

function sortDepartments(departments: Department[], sortBy: SortOption): Department[] {
  const copy = [...departments];
  switch (sortBy) {
    case "department":
      return copy.sort((a, b) =>
        (a.title ?? "").localeCompare(b.title ?? "", undefined, { sensitivity: "base" })
      );
    case "function":
      // Placeholder: same order as department for now
      return copy.sort((a, b) =>
        (a.title ?? "").localeCompare(b.title ?? "", undefined, { sensitivity: "base" })
      );
    case "monthly_cost":
      return copy.sort((a, b) => {
        const costA = a.monthly_cost ?? Infinity;
        const costB = b.monthly_cost ?? Infinity;
        return costA - costB;
      });
    default:
      return copy;
  }
}

export type Department = {
  id: string;
  title: string | null;
  subheader: string | null;
  monthly_cost: number | null;
  equipment_highlights: string[] | null;
  feature_caption: string | null;
};

function DepartmentCard({
  department,
  onViewEquipment,
  onEquipmentClick,
}: {
  department: Department;
  onViewEquipment: (department: Department) => void;
  onEquipmentClick?: (item: string, department: Department) => void;
}) {
  const highlights = department.equipment_highlights ?? [];
  const preview = highlights.slice(0, 2);

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{department.title ?? "Department"}</CardTitle>
        {department.subheader && (
          <CardDescription>{department.subheader}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-1 space-y-2">
        {department.monthly_cost != null && (
          <p className="text-sm font-medium text-foreground">
            ${Number(department.monthly_cost).toLocaleString()}/mo
          </p>
        )}
        {preview.length > 0 && (
          <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
            {preview.map((item, i) =>
              onEquipmentClick ? (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => onEquipmentClick(item, department)}
                    className="text-left underline decoration-muted-foreground/50 underline-offset-2 transition-colors hover:decoration-primary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                  >
                    {item}
                  </button>
                </li>
              ) : (
                <li key={i}>{item}</li>
              )
            )}
          </ul>
        )}
        {department.feature_caption && (
          <p className="text-sm text-muted-foreground">
            {department.feature_caption}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full sm:w-auto"
          onClick={() => onViewEquipment(department)}
        >
          View Full Equipment List
        </Button>
      </CardFooter>
    </Card>
  );
}

function EquipmentDetailDialog({
  equipmentName,
  department,
  open,
  onOpenChange,
}: {
  equipmentName: string | null;
  department: Department | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!equipmentName) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{equipmentName}</DialogTitle>
          {department?.title && (
            <DialogDescription>
              {department.title}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="space-y-4">
          <section>
            <h4 className="mb-2 text-sm font-semibold">Description</h4>
            <p className="text-sm text-muted-foreground">
              Detailed description for this equipment can be added here. You can
              replace this with rich text, specs, or content from your CMS or
              database when available.
            </p>
          </section>

          <section>
            <h4 className="mb-2 text-sm font-semibold">Image</h4>
            <div className="flex aspect-video items-center justify-center rounded-lg border border-border bg-muted/30">
              <span className="text-xs text-muted-foreground">
                Image placeholder — add image URL when available
              </span>
            </div>
          </section>

          <section>
            <h4 className="mb-2 text-sm font-semibold">Video</h4>
            <div className="flex aspect-video items-center justify-center rounded-lg border border-border bg-muted/30">
              <span className="text-xs text-muted-foreground">
                Embedded video placeholder — add video URL or iframe when available
              </span>
            </div>
          </section>

          <section>
            <h4 className="mb-2 text-sm font-semibold">3D model</h4>
            <div className="rounded-lg border border-border overflow-hidden">
              <FacilityRender
                modelUrl={PLACEHOLDER_FACILITY_GLB}
                className="h-[200px] w-full"
              />
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function DepartmentDetailDialog({
  department,
  open,
  onOpenChange,
  onEquipmentClick,
}: {
  department: Department | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEquipmentClick?: (item: string, department: Department) => void;
}) {
  if (!department) return null;

  const highlights = department.equipment_highlights ?? [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{department.title ?? "Department"}</DialogTitle>
          {department.subheader && (
            <DialogDescription>{department.subheader}</DialogDescription>
          )}
        </DialogHeader>
        <div className="space-y-4">
          {department.monthly_cost != null && (
            <p className="text-sm font-medium">
              Monthly cost: ${Number(department.monthly_cost).toLocaleString()}
            </p>
          )}
          {department.feature_caption && (
            <p className="text-sm text-muted-foreground">
              {department.feature_caption}
            </p>
          )}
          {highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold mb-2">Full equipment list</h4>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                {highlights.map((item, i) =>
                  onEquipmentClick ? (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => onEquipmentClick(item, department)}
                        className="text-left underline decoration-muted-foreground/50 underline-offset-2 transition-colors hover:decoration-primary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                      >
                        {item}
                      </button>
                    </li>
                  ) : (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </div>
          )}
          <div className="rounded-lg border border-border overflow-hidden">
            <FacilityRender
              modelUrl={PLACEHOLDER_FACILITY_GLB}
              className="h-[200px] w-full"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function DepartmentGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useScrollAnimation(sectionRef, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0, duration: 0.5 },
    scrollTrigger: { start: "top 90%" },
    disabled: loading || !!error,
  });

  const [detailDepartment, setDetailDepartment] = useState<Department | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const [equipmentDialogOpen, setEquipmentDialogOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(null);
  const [selectedDepartmentForEquipment, setSelectedDepartmentForEquipment] =
    useState<Department | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("department");

  const sortedDepartments = useMemo(
    () => sortDepartments(departments, sortBy),
    [departments, sortBy]
  );

  useEffect(() => {
    async function fetchDepartments() {
      try {
        setLoading(true);
        setError(null);
        const { data, error: fetchError } = await supabase
          .from("departments")
          .select("*")
          .order("title", { ascending: true });
        if (fetchError) throw fetchError;
        setDepartments((data as Department[]) ?? []);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load departments");
        setDepartments([]);
      } finally {
        setLoading(false);
      }
    }
    fetchDepartments();
  }, []);

  const handleViewEquipment = (department: Department) => {
    setDetailDepartment(department);
    setDialogOpen(true);
  };

  const handleEquipmentClick = (item: string, department: Department) => {
    setSelectedEquipment(item);
    setSelectedDepartmentForEquipment(department);
    setEquipmentDialogOpen(true);
  };

  if (loading) {
    return (
      <section className="container mx-auto px-4 py-12">
        <p className="text-center text-muted-foreground">Loading departments…</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto px-4 py-12">
        <p className="text-center text-destructive">{error}</p>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            Sort by
          </span>
          <ToggleGroup
            type="single"
            value={sortBy}
            onValueChange={(value) => value && setSortBy(value as SortOption)}
            className="flex flex-wrap gap-1"
          >
            <ToggleGroupItem value="department" aria-label="Sort by department name">
              By Department
            </ToggleGroupItem>
            <ToggleGroupItem value="function" aria-label="Sort by function">
              By Function
            </ToggleGroupItem>
            <ToggleGroupItem value="monthly_cost" aria-label="Sort by monthly cost">
              By Monthly Cost
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <Button variant="outline" asChild>
          <a
            href="/api/download-lease-manifest"
            download="lease-manifest.pdf"
            className="inline-flex items-center gap-2"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download lease manifest
          </a>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedDepartments.map((dept) => (
          <DepartmentCard
            key={dept.id}
            department={dept}
            onViewEquipment={handleViewEquipment}
            onEquipmentClick={handleEquipmentClick}
          />
        ))}
      </div>
      {departments.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No departments yet. Add records in the Supabase departments table.
        </p>
      )}
      <DepartmentDetailDialog
        department={detailDepartment}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onEquipmentClick={handleEquipmentClick}
      />
      <EquipmentDetailDialog
        equipmentName={selectedEquipment}
        department={selectedDepartmentForEquipment}
        open={equipmentDialogOpen}
        onOpenChange={setEquipmentDialogOpen}
      />
    </section>
  );
}
