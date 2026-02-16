-- Seed data for wellness platform. Run after migrations. Idempotent where possible.
-- In Supabase Dashboard: turn OFF "Confirm email" for easy testing.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 1. Manufacturers (5)
INSERT INTO manufacturers (id, name, slug) VALUES
  ('11111111-1111-1111-1111-111111111101', 'OxyHealth', 'oxyhealth'),
  ('11111111-1111-1111-1111-111111111102', 'Hyperice', 'hyperice'),
  ('11111111-1111-1111-1111-111111111103', 'PNOE', 'pnoe'),
  ('11111111-1111-1111-1111-111111111104', 'CryoBuilt', 'cryobuilt'),
  ('11111111-1111-1111-1111-111111111105', 'Ammortal', 'ammortal')
ON CONFLICT (id) DO NOTHING;

-- 2. Clinics (10) – Louisville area for ZIP 40202, others for variety
INSERT INTO clinics (id, manufacturer_id, name, address, city, state, zip) VALUES
  ('22222222-2222-2222-2222-222222222201', '11111111-1111-1111-1111-111111111101', 'Louisville Recovery Center', '100 Main St', 'Louisville', 'KY', '40202'),
  ('22222222-2222-2222-2222-222222222202', '11111111-1111-1111-1111-111111111101', 'OxyHealth Downtown', '200 Oak Ave', 'Louisville', 'KY', '40203'),
  ('22222222-2222-2222-2222-222222222203', '11111111-1111-1111-1111-111111111101', 'OxyHealth East', '300 East Blvd', 'Louisville', 'KY', '40204'),
  ('22222222-2222-2222-2222-222222222204', '11111111-1111-1111-1111-111111111102', 'Hyperice Performance Louisville', '400 River Rd', 'Louisville', 'KY', '40202'),
  ('22222222-2222-2222-2222-222222222205', '11111111-1111-1111-1111-111111111102', 'Hyperice Nashville', '500 Music Row', 'Nashville', 'TN', '37203'),
  ('22222222-2222-2222-2222-222222222206', '11111111-1111-1111-1111-111111111103', 'PNOE Wellness Austin', '600 Congress Ave', 'Austin', 'TX', '78701'),
  ('22222222-2222-2222-2222-222222222207', '11111111-1111-1111-1111-111111111104', 'CryoBuilt Denver', '700 Colfax Ave', 'Denver', 'CO', '80202'),
  ('22222222-2222-2222-2222-222222222208', '11111111-1111-1111-1111-111111111104', 'CryoBuilt Boulder', '800 Pearl St', 'Boulder', 'CO', '80302'),
  ('22222222-2222-2222-2222-222222222209', '11111111-1111-1111-1111-111111111105', 'Ammortal Miami', '900 Ocean Dr', 'Miami Beach', 'FL', '33139'),
  ('22222222-2222-2222-2222-222222222210', '11111111-1111-1111-1111-111111111101', 'OxyHealth Lexington', '110 Vine St', 'Lexington', 'KY', '40507')
ON CONFLICT (id) DO NOTHING;

-- 3. Therapies (8)
INSERT INTO therapies (id, name, description) VALUES
  ('33333333-3333-3333-3333-333333333301', 'HBOT', 'Hyperbaric Oxygen Therapy'),
  ('33333333-3333-3333-3333-333333333302', 'Cryo', 'Whole Body Cryotherapy'),
  ('33333333-3333-3333-3333-333333333303', 'PEMF', 'Pulsed Electromagnetic Field'),
  ('33333333-3333-3333-3333-333333333304', 'IV Therapy', 'IV Drip & Nutrient Therapy'),
  ('33333333-3333-3333-3333-333333333305', 'Red Light', 'Red Light Therapy'),
  ('33333333-3333-3333-3333-333333333306', 'Compression', 'Compression Therapy'),
  ('33333333-3333-3333-3333-333333333307', 'Sauna', 'Infrared Sauna'),
  ('33333333-3333-3333-3333-333333333308', 'Recovery Assessment', 'PNOE Assessment')
ON CONFLICT (id) DO NOTHING;

-- 4. Content creators (4)
INSERT INTO content_creators (id, name, email) VALUES
  ('44444444-4444-4444-4444-444444444401', 'Sarah Coach', 'sarah@recoverycoach.com'),
  ('44444444-4444-4444-4444-444444444402', 'Mike Wellness', 'mike@wellness.com'),
  ('44444444-4444-4444-4444-444444444403', 'Jane Regen', 'jane@regen.com'),
  ('44444444-4444-4444-4444-444444444404', 'Alex Performance', 'alex@perf.com')
ON CONFLICT (id) DO NOTHING;

-- 5. Auth users + public.users (5 test users, password: password123)
-- Use fixed UUIDs so we can reference them in public.users and bookings.
DO $$
DECLARE
  uid_manufacturer UUID := 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';
  uid_clinic      UUID := 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb';
  uid_creator     UUID := 'cccccccc-cccc-cccc-cccc-cccccccccccc';
  uid_patient     UUID := 'dddddddd-dddd-dddd-dddd-dddddddddddd';
  uid_admin       UUID := 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee';
  enc_pw          TEXT := crypt('password123', gen_salt('bf'));
BEGIN
  INSERT INTO auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at)
  VALUES
    (uid_manufacturer, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'partner@oxyhealth.com', enc_pw, NOW(), '{"provider":"email","providers":["email"]}', '{}', NOW(), NOW()),
    (uid_clinic,      '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'info@louisvillerecovery.com', enc_pw, NOW(), '{"provider":"email","providers":["email"]}', '{}', NOW(), NOW()),
    (uid_creator,     '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'sarah@recoverycoach.com', enc_pw, NOW(), '{"provider":"email","providers":["email"]}', '{}', NOW(), NOW()),
    (uid_patient,     '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'patient@test.com', enc_pw, NOW(), '{"provider":"email","providers":["email"]}', '{}', NOW(), NOW()),
    (uid_admin,       '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'admin@regenpulse.com', enc_pw, NOW(), '{"provider":"email","providers":["email"]}', '{}', NOW(), NOW())
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
  VALUES
    (uid_manufacturer, uid_manufacturer, format('{"sub":"%s","email":"partner@oxyhealth.com"}', uid_manufacturer)::jsonb, 'email', uid_manufacturer::text, NOW(), NOW(), NOW()),
    (uid_clinic,      uid_clinic,      format('{"sub":"%s","email":"info@louisvillerecovery.com"}', uid_clinic)::jsonb, 'email', uid_clinic::text, NOW(), NOW(), NOW()),
    (uid_creator,     uid_creator,     format('{"sub":"%s","email":"sarah@recoverycoach.com"}', uid_creator)::jsonb, 'email', uid_creator::text, NOW(), NOW(), NOW()),
    (uid_patient,     uid_patient,     format('{"sub":"%s","email":"patient@test.com"}', uid_patient)::jsonb, 'email', uid_patient::text, NOW(), NOW(), NOW()),
    (uid_admin,       uid_admin,       format('{"sub":"%s","email":"admin@regenpulse.com"}', uid_admin)::jsonb, 'email', uid_admin::text, NOW(), NOW(), NOW())
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.users (id, full_name, email, user_type, manufacturer_id, clinic_id, content_creator_id, created_at)
  VALUES
    (uid_manufacturer, 'OxyHealth Partner', 'partner@oxyhealth.com', 'manufacturer', '11111111-1111-1111-1111-111111111101', NULL, NULL, NOW()),
    (uid_clinic,      'Louisville Recovery Admin', 'info@louisvillerecovery.com', 'clinic_admin', NULL, '22222222-2222-2222-2222-222222222201', NULL, NOW()),
    (uid_creator,     'Sarah Coach', 'sarah@recoverycoach.com', 'creator', NULL, NULL, '44444444-4444-4444-4444-444444444401', NOW()),
    (uid_patient,     'Test Patient', 'patient@test.com', 'patient', NULL, NULL, NULL, NOW()),
    (uid_admin,       'Platform Admin', 'admin@regenpulse.com', 'admin', NULL, NULL, NULL, NOW())
  ON CONFLICT (id) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    email = EXCLUDED.email,
    user_type = EXCLUDED.user_type,
    manufacturer_id = EXCLUDED.manufacturer_id,
    clinic_id = EXCLUDED.clinic_id,
    content_creator_id = EXCLUDED.content_creator_id;
END $$;

-- 6. Products (9) – some linked to manufacturers
INSERT INTO products (id, name, description, price, category, manufacturer_id) VALUES
  (gen_random_uuid(), 'HBOT Session Pack', '10 sessions', 499, 'clinical', '11111111-1111-1111-1111-111111111101'),
  (gen_random_uuid(), 'Cryo Single', 'Single session', 59, 'clinical', '11111111-1111-1111-1111-111111111104'),
  (gen_random_uuid(), 'Hyperice Venom', 'Recovery wearable', 199, 'consumer', '11111111-1111-1111-1111-111111111102'),
  (gen_random_uuid(), 'PNOE Assessment', 'Metabolic assessment', 149, 'clinical', '11111111-1111-1111-1111-111111111103'),
  (gen_random_uuid(), 'Recovery Bundle', 'HBOT + Cryo', 299, 'clinical', NULL),
  (gen_random_uuid(), 'Red Light Panel', 'Home panel', 349, 'consumer', NULL),
  (gen_random_uuid(), 'PEMF Mat', 'Home PEMF', 599, 'consumer', '11111111-1111-1111-1111-111111111101'),
  (gen_random_uuid(), 'IV Hydration', 'IV drip', 199, 'clinical', NULL),
  (gen_random_uuid(), 'Membership Monthly', 'Unlimited access', 99, 'membership', NULL)
ON CONFLICT (id) DO NOTHING;

-- 7. Campaigns (OxyHealth)
INSERT INTO campaigns (id, manufacturer_id, name, description, start_date, end_date) VALUES
  (gen_random_uuid(), '11111111-1111-1111-1111-111111111101', 'Spring HBOT Promo', '20% off HBOT packs', CURRENT_DATE, CURRENT_DATE + 30),
  (gen_random_uuid(), '11111111-1111-1111-1111-111111111101', 'Louisville Launch', 'Grand opening', CURRENT_DATE - 7, CURRENT_DATE + 14)
ON CONFLICT (id) DO NOTHING;

-- 8. Transactions (sample)
INSERT INTO transactions (manufacturer_id, clinic_id, amount, type) VALUES
  ('11111111-1111-1111-1111-111111111101', '22222222-2222-2222-2222-222222222201', 1250.00, 'revenue'),
  ('11111111-1111-1111-1111-111111111101', '22222222-2222-2222-2222-222222222202', 890.50, 'revenue'),
  ('11111111-1111-1111-1111-111111111101', '22222222-2222-2222-2222-222222222203', 2100.00, 'revenue');

-- 9. Bookings (3 for Louisville clinic – clinic_id 22222222-2222-2222-2222-222222222201, patient dddddddd-...)
INSERT INTO bookings (clinic_id, user_id, therapy_id, scheduled_at, status) VALUES
  ('22222222-2222-2222-2222-222222222201', 'dddddddd-dddd-dddd-dddd-dddddddddddd', '33333333-3333-3333-3333-333333333301', NOW() + INTERVAL '2 days', 'scheduled'),
  ('22222222-2222-2222-2222-222222222201', 'dddddddd-dddd-dddd-dddd-dddddddddddd', '33333333-3333-3333-3333-333333333302', NOW() + INTERVAL '5 days', 'scheduled'),
  ('22222222-2222-2222-2222-222222222201', 'dddddddd-dddd-dddd-dddd-dddddddddddd', '33333333-3333-3333-3333-333333333303', NOW() + INTERVAL '9 days', 'scheduled');

-- 10. Content (sample)
INSERT INTO content (content_creator_id, title, body, url) VALUES
  ('44444444-4444-4444-4444-444444444401', 'Recovery Tips', 'Top 5 recovery habits.', NULL),
  ('44444444-4444-4444-4444-444444444401', 'HBOT Explained', 'What is hyperbaric oxygen therapy?', NULL);
