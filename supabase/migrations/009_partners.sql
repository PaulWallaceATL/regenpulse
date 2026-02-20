-- Partners table for Partner Network page (technology / vendor partners)
CREATE TABLE IF NOT EXISTS partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  url TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to partners" ON partners FOR SELECT USING (true);

CREATE INDEX IF NOT EXISTS idx_partners_sort ON partners(sort_order);
