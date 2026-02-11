"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingCart, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { supabase } from "@/lib/supabase/client";

export type Product = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: string | null;
  image_url: string | null;
};

function formatPrice(dollars: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(dollars);
}

export function RegenMart() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);
        const { data, error: fetchError } = await supabase
          .from("products")
          .select("id, name, description, price, category, image_url")
          .order("name");
        if (fetchError) throw fetchError;
        setProducts(
          (data ?? []).map((row) => ({
            id: row.id,
            name: row.name,
            description: row.description ?? null,
            price: Number(row.price),
            category: row.category ?? null,
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

  if (loading) {
    return (
      <section className="border-t border-border bg-muted/10">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Regen Mart | Equipment & Wearables Marketplace
          </h2>
          <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
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
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Equipment, wearables, and recovery gear—all in one place. Member
          pricing available.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
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
                <h3 className="font-semibold text-foreground">{product.name}</h3>
                {product.description && (
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                )}
                <p className="mt-2 text-lg font-semibold tabular-nums text-foreground">
                  {formatPrice(product.price)}
                </p>
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

        {products.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            No products yet. Add rows to the products table in Supabase.
          </p>
        )}
      </div>
    </section>
  );
}
