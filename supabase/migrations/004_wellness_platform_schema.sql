-- Wellness platform: manufacturers, clinics, therapies, bookings, campaigns, content, transactions
-- Extends users with user_type and role FKs. Idempotent; run after 001, 002, 003.

-- 1. Manufacturers (no deps)
CREATE TABLE IF NOT EXISTS manufacturers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE manufacturers ENABLE ROW LEVEL SECURITY;
CREATE INDEX IF NOT EXISTS idx_manufacturers_slug ON manufacturers(slug);

-- 2. Content creators (no deps)
CREATE TABLE IF NOT EXISTS content_creators (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE content_creators ENABLE ROW LEVEL SECURITY;

-- 3. Therapies (no deps)
CREATE TABLE IF NOT EXISTS therapies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE therapies ENABLE ROW LEVEL SECURITY;

-- 4. Clinics (depends on manufacturers)
CREATE TABLE IF NOT EXISTS clinics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    manufacturer_id UUID NOT NULL REFERENCES manufacturers(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    address TEXT,
    city TEXT,
    state TEXT,
    zip TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE clinics ENABLE ROW LEVEL SECURITY;
CREATE INDEX IF NOT EXISTS idx_clinics_manufacturer ON clinics(manufacturer_id);
CREATE INDEX IF NOT EXISTS idx_clinics_zip ON clinics(zip);

-- 5. Alter users: add role columns (after manufacturers, clinics, content_creators exist)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'users' AND column_name = 'user_type') THEN
        ALTER TABLE users ADD COLUMN user_type TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'users' AND column_name = 'manufacturer_id') THEN
        ALTER TABLE users ADD COLUMN manufacturer_id UUID REFERENCES manufacturers(id);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'users' AND column_name = 'clinic_id') THEN
        ALTER TABLE users ADD COLUMN clinic_id UUID REFERENCES clinics(id);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'users' AND column_name = 'content_creator_id') THEN
        ALTER TABLE users ADD COLUMN content_creator_id UUID REFERENCES content_creators(id);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'users' AND column_name = 'email') THEN
        ALTER TABLE users ADD COLUMN email TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'users' AND column_name = 'created_at') THEN
        ALTER TABLE users ADD COLUMN created_at TIMESTAMPTZ DEFAULT now();
    END IF;
END $$;

-- Set default for existing rows
UPDATE users SET user_type = 'patient' WHERE user_type IS NULL;

-- 6. Bookings (clinic, patient user, therapy)
CREATE TABLE IF NOT EXISTS bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clinic_id UUID NOT NULL REFERENCES clinics(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    therapy_id UUID REFERENCES therapies(id),
    scheduled_at TIMESTAMPTZ NOT NULL,
    status TEXT DEFAULT 'scheduled',
    created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
CREATE INDEX IF NOT EXISTS idx_bookings_clinic ON bookings(clinic_id);
CREATE INDEX IF NOT EXISTS idx_bookings_user ON bookings(user_id);
CREATE INDEX IF NOT EXISTS idx_bookings_scheduled ON bookings(scheduled_at);

-- 7. Campaigns (manufacturer)
CREATE TABLE IF NOT EXISTS campaigns (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    manufacturer_id UUID NOT NULL REFERENCES manufacturers(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
CREATE INDEX IF NOT EXISTS idx_campaigns_manufacturer ON campaigns(manufacturer_id);

-- 8. Content (content_creator)
CREATE TABLE IF NOT EXISTS content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content_creator_id UUID NOT NULL REFERENCES content_creators(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    body TEXT,
    url TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
CREATE INDEX IF NOT EXISTS idx_content_creator ON content(content_creator_id);

-- 9. Products: add manufacturer_id if not present (link to platform)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'products' AND column_name = 'manufacturer_id') THEN
        ALTER TABLE products ADD COLUMN manufacturer_id UUID REFERENCES manufacturers(id);
    END IF;
END $$;

-- 10. Transactions (manufacturer, clinic, amount)
CREATE TABLE IF NOT EXISTS transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    manufacturer_id UUID REFERENCES manufacturers(id),
    clinic_id UUID REFERENCES clinics(id),
    amount NUMERIC NOT NULL,
    type TEXT,
    reference_id UUID,
    created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
CREATE INDEX IF NOT EXISTS idx_transactions_manufacturer ON transactions(manufacturer_id);
CREATE INDEX IF NOT EXISTS idx_transactions_clinic ON transactions(clinic_id);

-- Drop existing user RLS policies so we can replace with role-aware ones (keep policy names unique)
DROP POLICY IF EXISTS "Allow users to view their own profile" ON users;
DROP POLICY IF EXISTS "Allow users to update their own profile" ON users;

-- Users: own profile + admin sees all and can update; allow insert for own row (signup)
CREATE POLICY "users_select_own" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "users_update_own" ON users FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "users_insert_own" ON users FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "users_admin_select_all" ON users FOR SELECT USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);
CREATE POLICY "users_admin_update_all" ON users FOR UPDATE USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);

-- Manufacturers: manufacturer sees own; admin sees all
CREATE POLICY "manufacturers_select_own" ON manufacturers FOR SELECT USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.manufacturer_id = manufacturers.id)
);
CREATE POLICY "manufacturers_admin_select" ON manufacturers FOR SELECT USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);

-- Clinics: manufacturer sees own; clinic_admin sees own; admin sees all; public can read (for booking)
CREATE POLICY "clinics_select_public" ON clinics FOR SELECT USING (true);
CREATE POLICY "clinics_manufacturer_select" ON clinics FOR SELECT USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.manufacturer_id = clinics.manufacturer_id)
);
CREATE POLICY "clinics_admin_select" ON clinics FOR SELECT USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);

-- Therapies: public read
CREATE POLICY "therapies_select_public" ON therapies FOR SELECT USING (true);

-- Bookings: clinic sees own; patient sees own; admin sees all
CREATE POLICY "bookings_select_clinic" ON bookings FOR SELECT USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.clinic_id = bookings.clinic_id)
);
CREATE POLICY "bookings_select_patient" ON bookings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "bookings_admin_select" ON bookings FOR SELECT USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);
CREATE POLICY "bookings_insert_clinic" ON bookings FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.clinic_id = bookings.clinic_id)
);
CREATE POLICY "bookings_insert_patient" ON bookings FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Campaigns: manufacturer sees own; admin sees all
CREATE POLICY "campaigns_select_own" ON campaigns FOR SELECT USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.manufacturer_id = campaigns.manufacturer_id)
);
CREATE POLICY "campaigns_admin_select" ON campaigns FOR SELECT USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);

-- Content creators: creator sees own; admin sees all
CREATE POLICY "content_creators_select_own" ON content_creators FOR SELECT USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.content_creator_id = content_creators.id)
);
CREATE POLICY "content_creators_admin_select" ON content_creators FOR SELECT USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);

-- Content: public read for now; creator/admin can be added later
CREATE POLICY "content_select_public" ON content FOR SELECT USING (true);

-- Transactions: manufacturer sees own; clinic sees own; admin sees all
CREATE POLICY "transactions_select_manufacturer" ON transactions FOR SELECT USING (
    manufacturer_id IS NOT NULL AND EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.manufacturer_id = transactions.manufacturer_id)
);
CREATE POLICY "transactions_select_clinic" ON transactions FOR SELECT USING (
    clinic_id IS NOT NULL AND EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.clinic_id = transactions.clinic_id)
);
CREATE POLICY "transactions_admin_select" ON transactions FOR SELECT USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.user_type = 'admin')
);
