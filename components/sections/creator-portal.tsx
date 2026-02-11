"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const CREATOR_REVENUE_ROWS = [
  {
    contentType: "Live class → memberships",
    example:
      "Trainer sells 100 Performance Memberships (@ $299) via live class",
    revenueShare: "50%",
    monthlyEarnings: "$14,950",
  },
  {
    contentType: "On-demand program",
    example: "Creator sells 50 Regeneration program enrollments (@ $499)",
    revenueShare: "50%",
    monthlyEarnings: "$12,475",
  },
  {
    contentType: "Short-form series",
    example: "Wellness series drives 200 Essential sign-ups (@ $99/mo)",
    revenueShare: "50%",
    monthlyEarnings: "$9,900",
  },
  {
    contentType: "Live from location",
    example: "Clinic-hosted stream drives 75 Elite conversions (@ $399/mo)",
    revenueShare: "50%",
    monthlyEarnings: "$14,963",
  },
] as const;

export function CreatorPortal() {
  return (
    <section className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Content Creators Earn 50% | Build on Regen TV Platform
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Original programming | 10 M monthly viewers | Live from 1,289
          RegenPulse locations
        </p>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Creator Revenue Model (50/50 Split)
          </h3>
          <Card className="border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-semibold text-foreground">
                    Content Type
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Example
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Revenue Share
                  </TableHead>
                  <TableHead className="font-semibold text-foreground text-right">
                    Monthly Earnings Potential
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {CREATOR_REVENUE_ROWS.map((row) => (
                  <TableRow key={row.contentType}>
                    <TableCell className="font-medium">
                      {row.contentType}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {row.example}
                    </TableCell>
                    <TableCell className="tabular-nums">
                      {row.revenueShare}
                    </TableCell>
                    <TableCell className="text-right font-semibold tabular-nums">
                      {row.monthlyEarnings}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
          <p className="mt-4 text-sm text-muted-foreground">
            Example: Trainer sells 100 Performance Memberships (@ $299) via
            live class → $14,950 monthly creator payout.
          </p>
        </div>
      </div>
    </section>
  );
}
