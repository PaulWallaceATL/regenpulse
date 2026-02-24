"use client";

import { useState, useEffect, useCallback } from "react";
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
  MessageCircle,
  Upload,
  Trash2,
  Loader2,
} from "lucide-react";
type TabId = "users" | "departments" | "tiers" | "partners" | "inquiries" | "products" | "chatbot";

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
  { id: "chatbot", label: "Chat Bot", icon: MessageCircle },
  { id: "departments", label: "Departments", icon: Building2 },
  { id: "tiers", label: "Membership Tiers", icon: CreditCard },
  { id: "partners", label: "Partners", icon: Store },
  { id: "inquiries", label: "Inquiries", icon: Mail },
  { id: "products", label: "Products", icon: Package },
];

type ChatbotDoc = { id: string; name: string; created_at: string };

export function AdminDashboardClient({
  users,
  departments,
  tiers,
  partners,
  inquiries,
  products,
}: Props) {
  const [activeTab, setActiveTab] = useState<TabId>("users");
  const [chatbotDocs, setChatbotDocs] = useState<ChatbotDoc[]>([]);
  const [chatbotLoading, setChatbotLoading] = useState(false);
  const [chatbotUploading, setChatbotUploading] = useState(false);
  const [chatbotError, setChatbotError] = useState<string | null>(null);

  const fetchChatbotDocs = useCallback(async () => {
    setChatbotLoading(true);
    setChatbotError(null);
    try {
      const res = await fetch("/api/admin/chatbot-documents");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load");
      setChatbotDocs(data.documents ?? []);
    } catch (e) {
      setChatbotError(e instanceof Error ? e.message : "Failed to load documents");
    } finally {
      setChatbotLoading(false);
    }
  }, []);

  useEffect(() => {
    if (activeTab === "chatbot") fetchChatbotDocs();
  }, [activeTab, fetchChatbotDocs]);

  const handleChatbotUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setChatbotUploading(true);
    setChatbotError(null);
    try {
      const formData = new FormData();
      formData.set("file", file);
      const res = await fetch("/api/admin/chatbot-documents", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");
      await fetchChatbotDocs();
      e.target.value = "";
    } catch (err) {
      setChatbotError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setChatbotUploading(false);
    }
  };

  const handleChatbotDelete = async (id: string) => {
    setChatbotError(null);
    try {
      const res = await fetch(`/api/admin/chatbot-documents?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Delete failed");
      setChatbotDocs((prev) => prev.filter((d) => d.id !== id));
    } catch (err) {
      setChatbotError(err instanceof Error ? err.message : "Delete failed");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 overflow-x-auto border-b border-border pb-2">
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

      {activeTab === "chatbot" && (
        <Card>
          <CardHeader>
            <CardTitle>Chat Bot context</CardTitle>
            <p className="text-sm text-muted-foreground">
              Upload .txt documents to give the Regen Mart chatbot extra context. Customers will get answers based on this content when they use the assistant.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent">
                <Upload className="h-4 w-4" />
                Upload document
                <input
                  type="file"
                  accept=".txt,text/plain"
                  className="sr-only"
                  disabled={chatbotUploading}
                  onChange={handleChatbotUpload}
                />
              </label>
              {chatbotUploading && (
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Uploading…
                </span>
              )}
            </div>
            {chatbotError && (
              <p className="text-sm text-destructive">{chatbotError}</p>
            )}
            {chatbotLoading ? (
              <p className="text-sm text-muted-foreground">Loading documents…</p>
            ) : chatbotDocs.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No documents yet. Upload a .txt file to add context for the chatbot.
              </p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Added</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {chatbotDocs.map((d) => (
                    <TableRow key={d.id}>
                      <TableCell className="font-medium">{d.name}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {d.created_at
                          ? new Date(d.created_at).toLocaleDateString()
                          : "—"}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:text-destructive"
                          onClick={() => handleChatbotDelete(d.id)}
                          aria-label={`Delete ${d.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
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
