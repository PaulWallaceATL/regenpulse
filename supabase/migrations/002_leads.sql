-- Leads table for franchise/partnership deck requests
-- Run in Supabase SQL Editor or via: supabase db push

CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT
);
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert access to leads" ON leads FOR INSERT WITH CHECK (true);
