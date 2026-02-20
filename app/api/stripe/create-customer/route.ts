import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecret) {
      return NextResponse.json(
        { error: "Stripe is not configured." },
        { status: 503 }
      );
    }

    const supabase = await createClient();
    const {
      data: { user: authUser },
      error: authError,
    } = await supabase.auth.getUser();
    if (authError || !authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("users")
      .select("stripe_customer_id, email, full_name")
      .eq("id", authUser.id)
      .single();

    if (profile?.stripe_customer_id) {
      return NextResponse.json(
        { customerId: profile.stripe_customer_id, alreadyExists: true }
      );
    }

    const stripe = new Stripe(stripeSecret);
    const customer = await stripe.customers.create({
      email: profile?.email ?? authUser.email ?? undefined,
      name: profile?.full_name ?? undefined,
      metadata: { supabase_user_id: authUser.id },
    });

    await supabase
      .from("users")
      .update({ stripe_customer_id: customer.id })
      .eq("id", authUser.id);

    return NextResponse.json({
      customerId: customer.id,
      alreadyExists: false,
    });
  } catch (err) {
    console.error("Stripe create-customer error:", err);
    return NextResponse.json(
      { error: "Failed to create billing profile." },
      { status: 500 }
    );
  }
}
