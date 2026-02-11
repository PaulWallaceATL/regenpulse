"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check } from "lucide-react";

const PAYMENT_COLUMNS = [
  { id: "medicare", label: "Medicare" },
  { id: "private", label: "Private Ins." },
  { id: "medicaid", label: "Medicaid" },
  { id: "cash", label: "Cash Pay" },
] as const;

type PaymentId = (typeof PAYMENT_COLUMNS)[number]["id"];

type CoverageCell =
  | boolean
  | { covered: true; detail: string };

type CoverageRow = {
  department: string;
  medicare: CoverageCell;
  private: CoverageCell;
  medicaid: CoverageCell;
  cash: CoverageCell;
};

const COVERAGE_DATA: CoverageRow[] = [
  {
    department: "IV Therapy & Infusion",
    medicare: { covered: true, detail: "Covered when medically necessary; Part B may apply." },
    private: true,
    medicaid: { covered: true, detail: "State-dependent; prior auth may be required." },
    cash: true,
  },
  {
    department: "Hyperbaric Oxygen",
    medicare: { covered: true, detail: "Approved for specific wound care indications." },
    private: true,
    medicaid: { covered: true, detail: "Coverage varies by state." },
    cash: true,
  },
  {
    department: "Regenerative Medicine",
    medicare: { covered: true, detail: "Certain procedures; documentation required." },
    private: true,
    medicaid: false,
    cash: true,
  },
  {
    department: "Cryotherapy & Recovery",
    medicare: false,
    private: { covered: true, detail: "Often covered under physical therapy or wellness benefits." },
    medicaid: false,
    cash: true,
  },
  {
    department: "Peptide & Longevity",
    medicare: false,
    private: { covered: true, detail: "Some plans cover under specialty pharmacy." },
    medicaid: false,
    cash: true,
  },
  {
    department: "Imaging & Diagnostics",
    medicare: { covered: true, detail: "Part B covers approved imaging when ordered by physician." },
    private: true,
    medicaid: { covered: true, detail: "Covered when medically necessary." },
    cash: true,
  },
  {
    department: "Physical Therapy",
    medicare: { covered: true, detail: "Part B covers PT when medically necessary." },
    private: true,
    medicaid: true,
    cash: true,
  },
  {
    department: "Nutrition & Wellness",
    medicare: false,
    private: { covered: true, detail: "Some plans include nutrition counseling." },
    medicaid: false,
    cash: true,
  },
];

function getCoverage(cell: CoverageCell): boolean {
  return typeof cell === "boolean" ? cell : cell.covered;
}

function getDetail(cell: CoverageCell): string | undefined {
  return typeof cell === "object" && cell.covered ? cell.detail : undefined;
}

function CoverageCellView({ cell }: { cell: CoverageCell }) {
  const covered = getCoverage(cell);
  const detail = getDetail(cell);

  const checkmark = (
    <span
      className={
        covered
          ? "inline-flex text-green-600 dark:text-green-400"
          : "inline-flex text-muted-foreground/40"
      }
      aria-hidden
    >
      {covered ? <Check className="h-5 w-5" /> : "—"}
    </span>
  );

  if (covered && detail) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
            aria-label={`Covered. ${detail}`}
          >
            {checkmark}
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs">
          <p>{detail}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return checkmark;
}

export function CoverageMatrix() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Department</TableHead>
              {PAYMENT_COLUMNS.map((col) => (
                <TableHead key={col.id} className="text-center font-semibold">
                  {col.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {COVERAGE_DATA.map((row) => (
              <TableRow key={row.department}>
                <TableCell className="font-medium">{row.department}</TableCell>
                {PAYMENT_COLUMNS.map((col) => (
                  <TableCell key={col.id} className="text-center">
                    <CoverageCellView cell={row[col.id]} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  );
}
