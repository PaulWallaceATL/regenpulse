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
    <footer className="border-t border-border bg-muted/20">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {TRUST_BADGES.map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3.5 w-3.5" aria-hidden />
              </span>
              {label}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            onClick={() => setLiveChatOpen(true)}
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            Live Chat — Check your coverage in 60 seconds
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          We bill Medicare Part B, major PPO plans, and provide superbills for
          HSA/FSA reimbursement.
        </p>
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
    </footer>
  );
}
