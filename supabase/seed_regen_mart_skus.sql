-- Regen Mart: seed equipment SKUs with brands, categories, and service flows.
-- Run after 008_regen_mart_sku_schema.sql. Uses existing products table; clears existing generic products optional.

-- Categories: Aquatic, HBOT, Thermal/Ozone, Recovery Pods, Rehab/Strength, Diagnostics, Neuro/Vets, Retail/POS, Kitchen/Lounge
-- Insert equipment SKUs (idempotent by sku if you add ON CONFLICT later; for now we insert new rows)

INSERT INTO products (sku, name, description, price, category, brand, service_flow, qty, pts_per_hr, annual_revenue) VALUES
-- AQUATIC (3 units)
('RP-T1-AQ-001', 'SwimEx Hydro Treadmill', 'Full Regen / Aquatic. Pool 1.', 175, 'Aquatic', 'SwimEx', 'Full Regen/Aquatic Only', 1, 12, 158000),
('RP-T1-AQ-002', 'SwimEx Contrast Veterans', 'Full Regen / Aquatic. Pool 2.', 125, 'Aquatic', 'SwimEx', 'Full Regen/Aquatic Only', 1, 12, 76000),
('RP-T1-AQ-003', 'SwimEx Recovery Soak', 'Full Regen / Aquatic. Pool 3.', 99, 'Aquatic', 'SwimEx', 'Full Regen/Aquatic Only', 1, 12, 38000),
-- HBOT (8 units)
('RP-T1-HB-004~011', 'HBOT Pro Chambers (VIP/Corp/Vet/Multi)', 'Chambers 1-8. Full Regen / Oxygen.', 85, 'HBOT', 'HBOT Pro', 'Full Regen/Oxygen', 8, 32, 102000),
-- THERMAL/OZONE (2 units)
('RP-T1-HC-012', 'HOCATT Ozone Sauna', 'Full Regen / Oxygen. HOCATT.', 50, 'Thermal/Ozone', 'HOCATT', 'Full Regen/Oxygen', 1, 6, 51000),
('RP-T1-PE-013~014', 'Ammortal PEMF Zero-G', 'Full Regen / Oxygen. PEMF.', 0, 'Thermal/Ozone', 'Ammortal', 'Full Regen/Oxygen', 2, 6, 25000),
-- RECOVERY PODS (38 units)
('RP-T2-HP-015~020', 'Hyperice Normatec (legs/arms/core x2)', 'Recovery Bay. 6 units.', 45, 'Recovery Pods', 'Hyperice', 'Recovery Bay', 6, 20, 502000),
('RP-T2-CP-021', 'CryoPhit Nitrogen', 'Recovery Bay.', 75, 'Recovery Pods', 'CryoPhit', 'Recovery Bay', 1, 11, 82000),
('RP-T2-LP-022', 'Lympha Press Drainage', 'Recovery Bay.', 55, 'Recovery Pods', 'Lympha Press', 'Recovery Bay', 1, 11, 60000),
('RP-T2-VB-023~025', 'VAbody Bodyshape Vibration x3', 'Recovery Bay. 3 units.', 35, 'Recovery Pods', 'VAbody', 'Recovery Bay', 3, 33, 115000),
('RP-T2-AA-026~027', 'Arca Aesthetics Pods x2', 'Recovery Bay. 2 units.', 85, 'Recovery Pods', 'Arca Aesthetics', 'Recovery Bay', 2, 22, 187000),
-- REHAB/STRENGTH (6 units)
('RP-T1-ST-028~029', 'Speediance AI (CPT 97110)', 'Full Regen / Rehab. 2 units.', 75, 'Rehab/Strength', 'Speediance', 'Full Regen/Rehab', 2, 24, 90000),
('RP-T1-SH-048', 'Storz Medical Shockwave', 'NEW Rehab Bay.', 85, 'Rehab/Strength', 'Storz Medical', 'NEW Rehab Bay', 1, 6, 52000),
('RP-T1-LS-049', 'LightForce Class IV Laser', 'NEW Rehab Bay.', 85, 'Rehab/Strength', 'LightForce', 'NEW Rehab Bay', 1, 6, 52000),
('RP-T1-RK-050~051', 'Olympic Racks (CPT 97530)', 'NEW Strength Bay. 2 units.', 75, 'Rehab/Strength', 'Olympic', 'NEW Strength Bay', 2, 12, 45000),
-- DIAGNOSTICS (10 units)
('RP-T1-DX-030~033', 'DEXA Kiosks (CPT 77081) x4', 'Full Regen / Intake. 4 units.', 45, 'Diagnostics', 'DEXA', 'Full Regen/Intake', 4, 24, 54000),
('RP-T1-DG-034~036', 'PNOE VO2/ANS/X-ray', 'Full Regen / End. 3 units.', 45, 'Diagnostics', 'PNOE', 'Full Regen/End', 3, 18, 54000),
-- NEURO/VETS (2 units)
('RP-T4-NR-044~045', 'Symmetry qEEG TBI/PTSD', 'Neuro/Vets Branch. 2 units.', 95, 'Neuro/Vets', 'Symmetry', 'Neuro/Vets Branch', 2, 8, 85000),
-- RETAIL/POS (5 units)
('RP-RT-IN-040~041', 'Inogen O2 Concentrators', 'Retail Upsell. 2 units. DEXA upsell.', 1497, 'Retail/POS', 'Inogen', 'Retail Upsell', 2, NULL, NULL),
('RP-RT-HP-042~043', 'Hyperice Retail Units', 'Retail Upsell. 2 units. DEXA upsell.', 995, 'Retail/POS', 'Hyperice', 'Retail Upsell', 2, NULL, NULL),
-- KITCHEN/LOUNGE (3 units)
('RP-T1-KT-046', 'O2 Smoothie Station', 'Full Regen / Public. Kitchen.', 18, 'Kitchen/Lounge', 'O2 Smoothie', 'Full Regen/Public', 1, 100, 65000),
('RP-LG-MS-037~039', 'Masimo Vitals Kiosks x3', 'Lounge/Public. 3 units.', 199, 'Kitchen/Lounge', 'Masimo', 'Lounge/Public', 3, NULL, 32000);
