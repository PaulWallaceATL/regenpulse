import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PAYMENT_LOGOS = [
  { name: "Medicare", abbr: "Medicare" },
  { name: "Blue Cross Blue Shield", abbr: "BCBS" },
  { name: "Visa", abbr: "Visa" },
  { name: "Mastercard", abbr: "MC" },
  { name: "American Express", abbr: "AmEx" },
  { name: "HSA / FSA", abbr: "HSA/FSA" },
];

export function PaymentOptions() {
  return (
    <section className="border-t border-border bg-muted/20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Pay How You Want – Covered by Insurance or $0 Upfront
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {PAYMENT_LOGOS.map(({ name, abbr }) => (
            <div
              key={name}
              className="flex h-14 w-24 items-center justify-center rounded-lg border border-border bg-card px-3 py-2 text-center shadow-sm sm:h-16 sm:w-28"
              title={name}
              role="img"
              aria-label={name}
            >
              <span className="text-xs font-semibold text-muted-foreground sm:text-sm">
                {abbr}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Button size="lg">Verify Benefits</Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Government Programs</CardTitle>
              <CardDescription>
                Coverage through federal and state programs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Medicare and Medicaid may cover eligible wellness and regenerative services. We help you understand your benefits and file claims when applicable.</p>
              <ul className="list-inside list-disc space-y-1 pt-2">
                <li>Medicare Part B</li>
                <li>Medicaid (state-dependent)</li>
                <li>VA benefits</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Major Private Insurances</CardTitle>
              <CardDescription>
                Accepted plans from leading insurers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>We work with major carriers so your visits may be covered under your plan. Our team can verify your benefits before your first appointment.</p>
              <ul className="list-inside list-disc space-y-1 pt-2">
                <li>Blue Cross Blue Shield</li>
                <li>Aetna, Cigna, UnitedHealthcare</li>
                <li>Other in-network plans</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Flexible Payment Options</CardTitle>
              <CardDescription>
                $0 upfront when you use insurance or pay your way
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Pay with major credit cards, HSA, or FSA. Financing and payment plans available so you can start care without a large upfront cost.</p>
              <ul className="list-inside list-disc space-y-1 pt-2">
                <li>Visa, Mastercard, American Express</li>
                <li>HSA / FSA cards</li>
                <li>Payment plans & financing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
