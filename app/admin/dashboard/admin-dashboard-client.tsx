"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Users,
  Building2,
  CreditCard,
  Store,
  Mail,
  Package,
} from "lucide-react";
type TabId = "users" | "departments" | "tiers" | "partners" | "inquiries" | "products";

type UserRow = {
  id: string;
  full_name: string | null;
  email: string | null;
  user_type: string | null;
  created_at: string | null;
};

type DepartmentRow = {
  id: string;
  title: string | null;
  subheader: string | null;
  monthly_cost: number | null;
  feature_caption: string | null;
};

type TierRow = {
  id: string;
  tier_name: string | null;
  price_monthly: number | null;
  access_details: string | null;
  best_for: string | null;
};

type PartnerRow = {
  id: string;
  name: string | null;
  slug: string | null;
};

type LeadRow = {
  id: string;
  name: string | null;
  email: string | null;
  message: string | null;
  created_at: string | null;
};

type ProductRow = {
  id: string;
  name: string | null;
  sku: string | null;
  price: number | null;
  category: string | null;
  brand: string | null;
};

type Props = {
  users: UserRow[];
  departments: DepartmentRow[];
  tiers: TierRow[];
  partners: PartnerRow[];
  inquiries: LeadRow[];
  products: ProductRow[];
};

const TABS: { id: TabId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "users", label: "Users", icon: Users },
  { id: "departments", label: "Departments", icon: Building2 },
  { id: "tiers", label: "Membership Tiers", icon: CreditCard },
  { id: "partners", label: "Partners", icon: Store },
  { id: "inquiries", label: "Inquiries", icon: Mail },
  { id: "products", label: "Products", icon: Package },
];

export function AdminDashboardClient({
  users,
  departments,
  tiers,
  partners,
  inquiries,
  products,
}: Props) {
  const [activeTab, setActiveTab] = useState<TabId>("users");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-border pb-2">
        {TABS.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant={activeTab === id ? "secondary" : "ghost"}
            size="sm"
            className="gap-2"
            onClick={() => setActiveTab(id)}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Button>
        ))}
      </div>

      {activeTab === "users" && (
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <p className="text-sm text-muted-foreground">
                All platform accounts (user, member, partner, admin).
              </p>
            </CardHeader>
            <CardContent>
              {users.length === 0 ? (
                <p className="py-12 text-center text-muted-foreground">
                  No users yet.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Full name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((u) => (
                      <TableRow key={u.id}>
                        <TableCell className="font-medium">
                          {u.email ?? "—"}
                        </TableCell>
                        <TableCell>{u.full_name ?? "—"}</TableCell>
                        <TableCell>{u.user_type ?? "—"}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {u.created_at
                            ? new Date(u.created_at).toLocaleDateString()
                            : "—"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
      )}

      {activeTab === "departments" && (
          <Card>
            <CardHeader>
              <CardTitle>Departments</CardTitle>
              <p className="text-sm text-muted-foreground">
                Clinical and lifestyle departments (costs, features).
              </p>
            </CardHeader>
            <CardContent>
              {departments.length === 0 ? (
                <p className="py-12 text-center text-muted-foreground">
                  No departments yet.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Subheader</TableHead>
                      <TableHead>Monthly cost</TableHead>
                      <TableHead>Caption</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {departments.map((d) => (
                      <TableRow key={d.id}>
                        <TableCell className="font-medium">
                          {d.title ?? "—"}
                        </TableCell>
                        <TableCell>{d.subheader ?? "—"}</TableCell>
                        <TableCell>
                          {d.monthly_cost != null
                            ? `$${Number(d.monthly_cost).toLocaleString()}`
                            : "—"}
                        </TableCell>
                        <TableCell className="text-muted-foreground max-w-[200px] truncate">
                          {d.feature_caption ?? "—"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
      )}

      {activeTab === "tiers" && (
          <Card>
            <CardHeader>
              <CardTitle>Membership Tiers</CardTitle>
              <p className="text-sm text-muted-foreground">
                Subscription tiers and pricing.
              </p>
            </CardHeader>
            <CardContent>
              {tiers.length === 0 ? (
                <p className="py-12 text-center text-muted-foreground">
                  No membership tiers yet.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tier name</TableHead>
                      <TableHead>Price/mo</TableHead>
                      <TableHead>Access</TableHead>
                      <TableHead>Best for</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tiers.map((t) => (
                      <TableRow key={t.id}>
                        <TableCell className="font-medium">
                          {t.tier_name ?? "—"}
                        </TableCell>
                        <TableCell>
                          {t.price_monthly != null
                            ? `$${Number(t.price_monthly)}`
                            : "—"}
                        </TableCell>
                        <TableCell className="max-w-[200px] truncate">
                          {t.access_details ?? "—"}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {t.best_for ?? "—"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
      )}

      {activeTab === "partners" && (
          <Card>
            <CardHeader>
              <CardTitle>Partners (Manufacturers)</CardTitle>
              <p className="text-sm text-muted-foreground">
                Technology and vendor partners.
              </p>
            </CardHeader>
            <CardContent>
              {partners.length === 0 ? (
                <p className="py-12 text-center text-muted-foreground">
                  No partners yet.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Slug</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {partners.map((p) => (
                      <TableRow key={p.id}>
                        <TableCell className="font-medium">
                          {p.name ?? "—"}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {p.slug ?? "—"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
      )}

      {activeTab === "inquiries" && (
          <Card>
            <CardHeader>
              <CardTitle>Inquiries (Leads)</CardTitle>
              <p className="text-sm text-muted-foreground">
                Franchise and partnership requests from the site.
              </p>
            </CardHeader>
            <CardContent>
              {inquiries.length === 0 ? (
                <p className="py-12 text-center text-muted-foreground">
                  No inquiries yet.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inquiries.map((l) => (
                      <TableRow key={l.id}>
                        <TableCell className="font-medium">
                          {l.name ?? "—"}
                        </TableCell>
                        <TableCell>{l.email ?? "—"}</TableCell>
                        <TableCell className="max-w-[240px] truncate">
                          {l.message ?? "—"}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {l.created_at
                            ? new Date(l.created_at).toLocaleDateString()
                            : "—"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
      )}

      {activeTab === "products" && (
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <p className="text-sm text-muted-foreground">
                Regen Mart and platform products.
              </p>
            </CardHeader>
            <CardContent>
              {products.length === 0 ? (
                <p className="py-12 text-center text-muted-foreground">
                  No products yet.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>SKU</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Brand</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((p) => (
                      <TableRow key={p.id}>
                        <TableCell className="font-medium">
                          {p.name ?? "—"}
                        </TableCell>
                        <TableCell className="font-mono text-xs">
                          {p.sku ?? "—"}
                        </TableCell>
                        <TableCell>
                          {p.price != null
                            ? `$${Number(p.price).toLocaleString()}`
                            : "—"}
                        </TableCell>
                        <TableCell>{p.category ?? "—"}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {p.brand ?? "—"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
      )}
    </div>
  );
}
