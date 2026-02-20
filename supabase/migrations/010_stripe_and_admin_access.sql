-- Stripe fields for user accounts; admin access to leads, departments, membership_tiers
-- Run after 009. Idempotent.

-- 1. Users: Stripe customer and subscription (for members)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'stripe_customer_id') THEN
    ALTER TABLE users ADD COLUMN stripe_customer_id TEXT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'stripe_subscription_id') THEN
    ALTER TABLE users ADD COLUMN stripe_subscription_id TEXT;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_users_stripe_customer ON users(stripe_customer_id) WHERE stripe_customer_id IS NOT NULL;

-- 2. Leads: admin can read (for inquiries management)
DROP POLICY IF EXISTS "Allow public insert access to leads" ON leads;
CREATE POLICY "leads_insert_public" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "leads_admin_select" ON leads FOR SELECT USING (
  EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);

-- 3. Departments: admin insert, update, delete (select already public)
CREATE POLICY "departments_admin_insert" ON departments FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);
CREATE POLICY "departments_admin_update" ON departments FOR UPDATE USING (
  EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);
CREATE POLICY "departments_admin_delete" ON departments FOR DELETE USING (
  EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);

-- 4. Membership tiers: admin insert, update, delete
CREATE POLICY "membership_tiers_admin_insert" ON membership_tiers FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);
CREATE POLICY "membership_tiers_admin_update" ON membership_tiers FOR UPDATE USING (
  EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);
CREATE POLICY "membership_tiers_admin_delete" ON membership_tiers FOR DELETE USING (
  EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);

-- 5. Products: admin full access (products may have RLS from elsewhere; ensure admin can manage)
DROP POLICY IF EXISTS "products_admin_select" ON products;
CREATE POLICY "products_admin_select" ON products FOR SELECT USING (
  EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);
CREATE POLICY "products_admin_insert" ON products FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);
CREATE POLICY "products_admin_update" ON products FOR UPDATE USING (
  EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);
CREATE POLICY "products_admin_delete" ON products FOR DELETE USING (
  EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);

-- 6. Manufacturers (partners): admin full access
CREATE POLICY "manufacturers_admin_insert" ON manufacturers FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);
CREATE POLICY "manufacturers_admin_update" ON manufacturers FOR UPDATE USING (
  EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);
CREATE POLICY "manufacturers_admin_delete" ON manufacturers FOR DELETE USING (
  EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);
