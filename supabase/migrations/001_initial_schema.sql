-- Initial database schema: departments, membership tiers, users, corporate clients
-- Run this in the Supabase SQL Editor: https://supabase.com/dashboard → your project → SQL Editor

-- 1. Departments Table
CREATE TABLE departments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    subheader TEXT,
    monthly_cost NUMERIC,
    equipment_highlights TEXT[],
    feature_caption TEXT
);
ALTER TABLE departments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to departments" ON departments FOR SELECT USING (true);

-- 2. Membership Tiers Table
CREATE TABLE membership_tiers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tier_name TEXT NOT NULL,
    price_monthly NUMERIC NOT NULL,
    access_details TEXT,
    best_for TEXT
);
ALTER TABLE membership_tiers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to membership_tiers" ON membership_tiers FOR SELECT USING (true);

-- 3. Corporate Tiers Table
CREATE TABLE corporate_tiers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tier_name TEXT NOT NULL,
    company_size TEXT,
    annual_contract_cost NUMERIC,
    employee_benefits TEXT
);
ALTER TABLE corporate_tiers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to corporate_tiers" ON corporate_tiers FOR SELECT USING (true);

-- 4. Users Table (integrates with Supabase Auth)
CREATE TABLE users (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    full_name TEXT,
    membership_tier_id UUID REFERENCES membership_tiers(id),
    corporate_tier_id UUID REFERENCES corporate_tiers(id),
    wellness_score INT DEFAULT 0
);
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow users to view their own profile" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Allow users to update their own profile" ON users FOR UPDATE USING (auth.uid() = id);
