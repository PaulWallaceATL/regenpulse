"use client";

import { useMemo } from "react";
import { Calendar } from "@/components/ui/calendar";

export type Booking = {
  id: string;
  scheduled_at: string;
  status: string | null;
  therapies: { name: string | null } | null;
};

type Props = {
  bookings: Booking[];
  bookedDates: string[];
};

export function ClinicDashboardClient({ bookings, bookedDates }: Props) {
  const dateSet = useMemo(
    () => new Set(bookedDates),
    [bookedDates]
  );

  const modifiers = useMemo(
    () => ({
      booked: (date: Date) => dateSet.has(date.toDateString()),
    }),
    [dateSet]
  );

  if (bookings.length === 0) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        You have no upcoming bookings.
      </p>
    );
  }

  const now = new Date();
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  return (
    <div className="space-y-6">
      <Calendar
        mode="single"
        month={thisMonth}
        modifiers={modifiers}
        modifiersClassNames={{
          booked: "bg-primary/20 text-primary font-medium",
        }}
      />
      <div>
        <h3 className="mb-2 text-sm font-medium">Upcoming</h3>
        <ul className="space-y-2">
          {bookings.slice(0, 10).map((b) => {
            const d = new Date(b.scheduled_at);
            const therapyName =
              b.therapies?.name ?? "—";
            return (
              <li
                key={b.id}
                className="flex items-center justify-between rounded-md border px-3 py-2 text-sm"
              >
                <span className="font-medium">
                  {d.toLocaleDateString()} at {d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
                <span className="text-muted-foreground">{therapyName}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
