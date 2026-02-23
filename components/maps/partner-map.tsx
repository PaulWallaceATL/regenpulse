"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const US_TOPOLOGY_URL =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

type KentuckyLocation = {
  name: string;
  coordinates: [number, number];
  pod: "Western Pod" | "Eastern/Central Pod" | "Future Phase 2";
  status: "Phase 1" | "Coming soon" | "Phase 1b" | "In development" | "Phase 2";
};

const KENTUCKY_LOCATIONS: KentuckyLocation[] = [
  {
    name: "Owensboro",
    coordinates: [-87.1133, 37.7742],
    pod: "Western Pod",
    status: "Phase 1",
  },
  {
    name: "Greenville / Muhlenberg",
    coordinates: [-87.1758, 37.2012],
    pod: "Western Pod",
    status: "Phase 1",
  },
  {
    name: "Madisonville",
    coordinates: [-87.4978, 37.3281],
    pod: "Western Pod",
    status: "Coming soon",
  },
  {
    name: "Hopkinsville / Ft Campbell",
    coordinates: [-87.4886, 36.8656],
    pod: "Western Pod",
    status: "Coming soon",
  },
  {
    name: "Henderson",
    coordinates: [-87.5906, 37.8362],
    pod: "Western Pod",
    status: "Coming soon",
  },
  {
    name: "Paducah",
    coordinates: [-88.6000, 37.0834],
    pod: "Western Pod",
    status: "Coming soon",
  },
  {
    name: "Richmond",
    coordinates: [-84.2947, 37.7479],
    pod: "Eastern/Central Pod",
    status: "Phase 1b",
  },
  {
    name: "Beattyville / Campton area",
    coordinates: [-83.7060, 37.5384],
    pod: "Eastern/Central Pod",
    status: "In development",
  },
  {
    name: "Irvine / Clay City / Stanton area",
    coordinates: [-83.9769, 37.6959],
    pod: "Eastern/Central Pod",
    status: "In development",
  },
  {
    name: "Louisville",
    coordinates: [-85.7585, 38.2527],
    pod: "Future Phase 2",
    status: "Phase 2",
  },
];

export function PartnerMap() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-foreground">
        Kentucky Hubs and Satellites
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Planned footprint across Western and Eastern/Central Kentucky, with
        Louisville in future Phase 2.
      </p>

      <div className="mt-5 rounded-lg border border-border overflow-hidden bg-card">
        <div className="aspect-[16/10] w-full min-h-[320px]">
          <ComposableMap
            projection="geoAlbersUsa"
            width={800}
            height={500}
            projectionConfig={{ scale: 1000 }}
          >
            <Geographies geography={US_TOPOLOGY_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="var(--color-muted)"
                    stroke="var(--color-border)"
                    strokeWidth={0.5}
                  />
                ))
              }
            </Geographies>
            {KENTUCKY_LOCATIONS.map((location) => (
              <Marker key={location.name} coordinates={location.coordinates}>
                <circle
                  r={location.status === "Phase 1" ? 4 : 3}
                  fill={
                    location.status === "Phase 1"
                      ? "var(--color-primary)"
                      : location.status === "Phase 2"
                        ? "var(--color-muted)"
                        : "var(--color-primary)"
                  }
                  fillOpacity={location.status === "Phase 2" ? 0.7 : 0.9}
                  stroke="var(--color-primary)"
                  strokeWidth={0.8}
                />
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Location</TableHead>
              <TableHead>Pod</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {KENTUCKY_LOCATIONS.map((location) => (
              <TableRow key={location.name}>
                <TableCell className="font-medium">{location.name}</TableCell>
                <TableCell>{location.pod}</TableCell>
                <TableCell>{location.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
