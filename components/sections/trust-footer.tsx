"use client";

import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const TRUST_BADGES = [
  "Medicare Credentialed",
  "Multi-State Insurance Contracts",
  "Real-Time Benefits Check",
  "HSA/FSA Superbills",
  "Secure Billing & Claims",
];

export function TrustFooter() {
  const [liveChatOpen, setLiveChatOpen] = useState(false);

  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-3xl px-4 py-10 md:py-12 text-center">
        {/* Hero CTA — the main event */}
        <div className="flex items-center justify-center gap-3 text-sky-600">
          <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden />
          <span className="text-sm font-semibold uppercase tracking-wider">Instant Coverage Check</span>
        </div>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
          Check Your Coverage in 60 Seconds
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          Find out what your insurance covers before you ever walk in. No forms, no phone trees — just answers.
        </p>
        <Button
          size="lg"
          onClick={() => setLiveChatOpen(true)}
          className="mt-6 gap-2.5 rounded-xl bg-sky-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-600/20 transition-all hover:bg-sky-500 hover:shadow-sky-500/25 hover:scale-[1.02]"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          Start Live Chat Now
        </Button>

        {/* Trust badges — small supporting row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {TRUST_BADGES.map((label) => (
            <span
              key={label}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-400"
            >
              <Check className="h-3.5 w-3.5 text-sky-500" aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </div>

      <Dialog open={liveChatOpen} onOpenChange={setLiveChatOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Live Chat</DialogTitle>
            <DialogDescription>
              Check your coverage in 60 seconds
            </DialogDescription>
          </DialogHeader>
          <div className="rounded-lg border border-border bg-muted/30 p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Live chat placeholder. Connect your chat provider (e.g. Intercom,
              Drift, or custom) here to let visitors verify benefits in real
              time.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
