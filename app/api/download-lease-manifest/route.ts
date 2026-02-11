import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import { supabase } from "@/lib/supabase/client";

type DepartmentRow = {
  id: string;
  title: string | null;
  subheader: string | null;
  monthly_cost: number | null;
};

function buildPdfBuffer(departments: DepartmentRow[]): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50 });
    const chunks: Buffer[] = [];
    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    doc.fontSize(20).text("Lease Manifest", { align: "center" });
    doc.moveDown(0.5);
    doc.fontSize(10).text("Departments & associated costs", { align: "center" });
    doc.moveDown(1.5);

    const tableTop = doc.y;
    const col1 = 50;
    const col2 = 320;
    const col3 = 450;

    doc.fontSize(10).font("Helvetica-Bold");
    doc.text("Department", col1, tableTop);
    doc.text("Subheader", col2, tableTop);
    doc.text("Monthly Cost", col3, tableTop);
    doc.moveTo(50, tableTop + 15).lineTo(550, tableTop + 15).stroke();
    doc.moveDown(0.5);

    doc.font("Helvetica").fontSize(10);
    let y = tableTop + 25;

    for (const row of departments) {
      if (y > 700) {
        doc.addPage();
        y = 50;
        doc.fontSize(10).font("Helvetica");
      }
      const title = (row.title ?? "—").slice(0, 35);
      const subheader = (row.subheader ?? "—").slice(0, 25);
      const cost =
        row.monthly_cost != null
          ? `$${Number(row.monthly_cost).toLocaleString()}`
          : "—";
      doc.text(title, col1, y);
      doc.text(subheader, col2, y);
      doc.text(cost, col3, y);
      y += 22;
    }

    doc.moveDown(1);
    const total = departments.reduce(
      (sum, d) => sum + (d.monthly_cost != null ? Number(d.monthly_cost) : 0),
      0
    );
    doc.font("Helvetica-Bold").text(
      `Total monthly cost: $${total.toLocaleString()}`,
      50,
      doc.y
    );

    doc.end();
  });
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("departments")
      .select("id, title, subheader, monthly_cost")
      .order("title", { ascending: true });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    const departments = (data as DepartmentRow[]) ?? [];
    const buffer = await buildPdfBuffer(departments);
    const body = new Uint8Array(buffer);

    return new NextResponse(body, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="lease-manifest.pdf"',
        "Content-Length": String(body.length),
      },
    });
  } catch (e) {
    console.error("Lease manifest PDF error:", e);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
