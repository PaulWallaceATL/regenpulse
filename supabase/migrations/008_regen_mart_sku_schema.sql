-- Regen Mart: add SKU, brand, service flow, pts/hr, annual revenue for equipment catalog.
-- Run in Supabase SQL Editor after 004.

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'products' AND column_name = 'sku') THEN
    ALTER TABLE products ADD COLUMN sku TEXT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'products' AND column_name = 'service_flow') THEN
    ALTER TABLE products ADD COLUMN service_flow TEXT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'products' AND column_name = 'brand') THEN
    ALTER TABLE products ADD COLUMN brand TEXT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'products' AND column_name = 'pts_per_hr') THEN
    ALTER TABLE products ADD COLUMN pts_per_hr NUMERIC;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'products' AND column_name = 'annual_revenue') THEN
    ALTER TABLE products ADD COLUMN annual_revenue NUMERIC;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'products' AND column_name = 'qty') THEN
    ALTER TABLE products ADD COLUMN qty INT DEFAULT 1;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_products_sku ON products(sku);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_service_flow ON products(service_flow);
