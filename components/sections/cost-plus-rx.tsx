"use client";

import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TOP_PRESCRIPTIONS = [
  { medication: "Semaglutide", price: "$199/mo", note: "GLP-1, weight wellness" },
  { medication: "Tirzepatide", price: "$349/mo", note: "Dual GIP/GLP-1" },
  { medication: "Testosterone", price: "$99/mo", note: "Hormone optimization" },
  { medication: "Sermorelin", price: "$249/mo", note: "Growth hormone support" },
  { medication: "NAD+", price: "$499/mo", note: "IV or injectable, longevity" },
] as const;

const TRUST_SIGNALS = [
  "No insurance markups",
  "Delivered to your door",
  "Integrated with Regen Credit",
] as const;

export function CostPlusRx() {
  return (
    <section className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Cost Plus RX | Transparent Pricing | $99 – $499/mo
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Pharmacy with transparent cost-plus pricing. No hidden fees or
          insurance markups—just cost plus a small margin.
        </p>

        {/* Top 5 Prescriptions */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Top 5 Prescriptions
          </h3>
          <Card className="border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-semibold text-foreground">
                    Medication
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Price (typical)
                  </TableHead>
                  <TableHead className="font-semibold text-foreground hidden sm:table-cell">
                    Note
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {TOP_PRESCRIPTIONS.map((row) => (
                  <TableRow key={row.medication}>
                    <TableCell className="font-medium">{row.medication}</TableCell>
                    <TableCell className="tabular-nums">
                      {row.price}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm hidden sm:table-cell">
                      {row.note}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Cost Plus Pricing Model */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Cost Plus Pricing Model
          </h3>
          <Card className="border-border border-primary/20 bg-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                Simple formula
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm font-medium text-foreground">
                Your price = <strong>Cost</strong> + <strong>small markup</strong> (e.g. 15%) + <strong>shipping</strong>
              </p>
              <div className="rounded-lg border border-border bg-background/80 p-4 text-sm">
                <p className="font-medium text-muted-foreground mb-1">
                  Example
                </p>
                <p className="text-foreground">
                  If our cost for a medication is $150/month, we add 15% ($22.50) and a flat shipping fee. You pay ~$175–$185 instead of typical retail or insurance-cash prices that can be 2–3× higher.
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                Exact prices depend on dose, formulation, and plan. No rebates or middlemen—savings pass to you.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Trust signals */}
        <div className="mt-10 rounded-lg border border-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">
            Why Cost Plus RX
          </p>
          <ul className="grid gap-3 sm:grid-cols-3">
            {TRUST_SIGNALS.map((signal) => (
              <li
                key={signal}
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                  aria-hidden
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
