"use client";

import { useEffect, useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import * as topojson from "topojson-client";
import { geoContains } from "d3-geo";
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

type Clinic = {
  coordinates: [number, number];
  stateName: string;
};

type StateFeature = GeoJSON.Feature<GeoJSON.Geometry> & {
  properties?: { name?: string };
};

function generateClinics(features: StateFeature[]): Clinic[] {
  const points: Clinic[] = [];
  const lngMin = -125;
  const lngMax = -66;
  const latMin = 24.5;
  const latMax = 49.5;

  while (points.length < 1200) {
    const lng = lngMin + Math.random() * (lngMax - lngMin);
    const lat = latMin + Math.random() * (latMax - latMin);
    const point: [number, number] = [lng, lat];

    const feature = features.find((f) =>
      f.geometry && geoContains(f, point)
    );
    if (feature?.properties?.name) {
      points.push({
        coordinates: point,
        stateName: String(feature.properties.name),
      });
    }
  }
  return points;
}

export function PartnerMap() {
  const [clinics, setClinics] = useState<Clinic[]>([]);

  useEffect(() => {
    fetch(US_TOPOLOGY_URL)
      .then((res) => res.json())
      .then((topology: { objects: { states: object } }) => {
        const states = topology.objects.states;
        const collection = topojson.feature(topology as never, states as never) as {
          features: StateFeature[];
        };
        const list = generateClinics(collection.features);
        setClinics(list);
      })
      .catch(console.error);
  }, []);

  const top5States = useMemo(() => {
    const counts: Record<string, number> = {};
    clinics.forEach((c) => {
      counts[c.stateName] = (counts[c.stateName] ?? 0) + 1;
    });
    return Object.entries(counts)
      .map(([state, volume]) => ({ state, volume }))
      .sort((a, b) => b.volume - a.volume)
      .slice(0, 5);
  }, [clinics]);

  return (
    <section className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-4 py-12">
        <div className="rounded-lg border border-border overflow-hidden bg-card">
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
              {clinics.map((clinic, i) => (
                <Marker key={i} coordinates={clinic.coordinates}>
                  <circle
                    r={2}
                    fill="var(--color-primary)"
                    fillOpacity={0.7}
                    stroke="var(--color-primary)"
                    strokeWidth={0.5}
                  />
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            Top 5 States by Volume
          </h3>
          <div className="rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">#</TableHead>
                  <TableHead>State</TableHead>
                  <TableHead className="text-right">Clinics</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {top5States.length > 0 ? (
                  top5States.map((row, i) => (
                    <TableRow key={row.state}>
                      <TableCell className="font-medium text-muted-foreground">
                        {i + 1}
                      </TableCell>
                      <TableCell>{row.state}</TableCell>
                      <TableCell className="text-right tabular-nums">
                        {row.volume.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center text-muted-foreground">
                      Loading…
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
