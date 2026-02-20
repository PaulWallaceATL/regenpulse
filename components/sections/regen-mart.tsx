"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Package, ShoppingCart, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/lib/supabase/client";

export type Product = {
  id: string;
  sku: string | null;
  name: string;
  description: string | null;
  price: number;
  category: string | null;
  brand: string | null;
  service_flow: string | null;
  qty: number | null;
  pts_per_hr: number | null;
  annual_revenue: number | null;
  image_url: string | null;
};

function formatPrice(dollars: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(dollars);
}

function formatRevenue(value: number | null): string {
  if (value == null) return "—";
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${Math.round(value / 1_000)}K`;
  return formatPrice(value);
}

export function RegenMart() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterBrand, setFilterBrand] = useState<string>("all");
  const [filterServiceFlow, setFilterServiceFlow] = useState<string>("all");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);
        const { data, error: fetchError } = await supabase
          .from("products")
          .select(
            "id, sku, name, description, price, category, brand, service_flow, qty, pts_per_hr, annual_revenue, image_url"
          )
          .order("category")
          .order("name");
        if (fetchError) throw fetchError;
        setProducts(
          (data ?? []).map((row) => ({
            id: row.id,
            sku: row.sku ?? null,
            name: row.name,
            description: row.description ?? null,
            price: Number(row.price ?? 0),
            category: row.category ?? null,
            brand: row.brand ?? null,
            service_flow: row.service_flow ?? null,
            qty: row.qty != null ? Number(row.qty) : null,
            pts_per_hr: row.pts_per_hr != null ? Number(row.pts_per_hr) : null,
            annual_revenue:
              row.annual_revenue != null ? Number(row.annual_revenue) : null,
            image_url: row.image_url ?? null,
          }))
        );
      } catch (e) {
        setError(
          e instanceof Error ? e.message : "Failed to load products"
        );
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const { categories, brands, serviceFlows } = useMemo(() => {
    const cat = new Set<string>();
    const br = new Set<string>();
    const sf = new Set<string>();
    products.forEach((p) => {
      if (p.category) cat.add(p.category);
      if (p.brand) br.add(p.brand);
      if (p.service_flow) sf.add(p.service_flow);
    });
    return {
      categories: Array.from(cat).sort(),
      brands: Array.from(br).sort(),
      serviceFlows: Array.from(sf).sort(),
    };
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (filterCategory !== "all" && p.category !== filterCategory)
        return false;
      if (filterBrand !== "all" && p.brand !== filterBrand) return false;
      if (filterServiceFlow !== "all" && p.service_flow !== filterServiceFlow)
        return false;
      return true;
    });
  }, [products, filterCategory, filterBrand, filterServiceFlow]);

  if (loading) {
    return (
      <section className="border-t border-border bg-muted/10">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Regen Mart | Equipment & Wearables Marketplace
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Equipment, wearables, and recovery gear—all in one place. Member
            pricing available.
          </p>
          <p className="mt-10 text-center text-muted-foreground">
            Loading products…
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="border-t border-border bg-muted/10">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Regen Mart | Equipment & Wearables Marketplace
          </h2>
          <p className="mt-10 text-center text-destructive">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Regen Mart | Equipment & Wearables Marketplace
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Equipment, wearables, and recovery gear—all in one place. Member
          pricing available.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Filter className="h-4 w-4 text-muted-foreground" aria-hidden />
          <Select
            value={filterCategory}
            onValueChange={setFilterCategory}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={filterBrand} onValueChange={setFilterBrand}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All brands</SelectItem>
              {brands.map((b) => (
                <SelectItem key={b} value={b}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={filterServiceFlow}
            onValueChange={setFilterServiceFlow}
          >
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Service flow" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All service flows</SelectItem>
              {serviceFlows.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {(filterCategory !== "all" ||
            filterBrand !== "all" ||
            filterServiceFlow !== "all") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setFilterCategory("all");
                setFilterBrand("all");
                setFilterServiceFlow("all");
              }}
            >
              Clear filters
            </Button>
          )}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col overflow-hidden border-border"
            >
              <div className="aspect-square w-full bg-muted relative overflow-hidden">
                {product.image_url ? (
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center text-muted-foreground"
                    role="img"
                    aria-label={`${product.name} placeholder image`}
                  >
                    <Package className="h-16 w-16 opacity-50" />
                  </div>
                )}
              </div>
              <CardContent className="flex-1 p-4">
                {product.sku && (
                  <p className="text-xs font-mono text-muted-foreground">
                    {product.sku}
                  </p>
                )}
                <h3 className="font-semibold text-foreground">{product.name}</h3>
                {(product.brand || product.category) && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {[product.brand, product.category].filter(Boolean).join(" · ")}
                  </p>
                )}
                {product.description && (
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                )}
                <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  {product.price > 0 && (
                    <span className="text-lg font-semibold tabular-nums text-foreground">
                      {formatPrice(product.price)}
                      {product.qty != null && product.qty > 1 && (
                        <span className="text-sm font-normal text-muted-foreground">
                          {" "}
                          / unit · {product.qty} units
                        </span>
                      )}
                    </span>
                  )}
                  {product.pts_per_hr != null && (
                    <span className="text-sm text-muted-foreground">
                      {product.pts_per_hr} pts/hr
                    </span>
                  )}
                </div>
                {product.annual_revenue != null && product.annual_revenue > 0 && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    Est. annual revenue: {formatRevenue(product.annual_revenue)}
                  </p>
                )}
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full gap-2" size="sm">
                  <ShoppingCart className="h-4 w-4" aria-hidden />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            {products.length === 0
              ? "No products yet. Run the Regen Mart SKU seed in Supabase."
              : "No products match the current filters."}
          </p>
        )}
      </div>
    </section>
  );
}
