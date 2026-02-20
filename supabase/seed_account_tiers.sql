-- Account tiers seed: membership_tiers, departments, and one login per role (User, Member, Partner, Admin).
-- Run after 010_stripe_and_admin_access.sql and after main seed.sql. Password for all: password123
-- Logins: user@regenpulse.com (User), member@regenpulse.com (Member), partner@oxyhealth.com (Partner), admin@regenpulse.com (Admin)

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 1. Membership tiers (fixed IDs for reference)
INSERT INTO membership_tiers (id, tier_name, price_monthly, access_details, best_for) VALUES
  ('a0000001-0001-0001-0001-000000000001', 'Basic', 29, 'Single location access, 2 visits/month', 'Getting started'),
  ('a0000001-0001-0001-0001-000000000002', 'Premium', 79, 'All locations, unlimited visits, 10% Regen Mart', 'Regular recovery'),
  ('a0000001-0001-0001-0001-000000000003', 'Elite', 149, 'Everything in Premium + priority booking, 20% Regen Mart', 'Performance focus')
ON CONFLICT (id) DO UPDATE SET
  tier_name = EXCLUDED.tier_name,
  price_monthly = EXCLUDED.price_monthly,
  access_details = EXCLUDED.access_details,
  best_for = EXCLUDED.best_for;

-- 2. Departments (sample for admin to manage)
INSERT INTO departments (id, title, subheader, monthly_cost, feature_caption) VALUES
  ('b0000001-0001-0001-0001-000000000001', 'Recovery', 'HBOT, Cryo, Compression', 2500, 'Core recovery tech'),
  ('b0000001-0001-0001-0001-000000000002', 'Diagnostics', 'PNOE, DEXA, Vitals', 1800, 'Assessment & screening'),
  ('b0000001-0001-0001-0001-000000000003', 'Rehab & Strength', 'Speediance, Storz, Olympic', 2200, 'Therapeutic strength')
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  subheader = EXCLUDED.subheader,
  monthly_cost = EXCLUDED.monthly_cost,
  feature_caption = EXCLUDED.feature_caption;

-- 3. Add User (customer) and Member (paying member) if not already in auth
DO $$
DECLARE
  uid_user   UUID := 'f0000001-0001-0001-0001-000000000001';
  uid_member UUID := 'f0000002-0002-0002-0002-000000000002';
  enc_pw     TEXT := crypt('password123', gen_salt('bf'));
BEGIN
  INSERT INTO auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at)
  VALUES
    (uid_user,  '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'user@regenpulse.com', enc_pw, NOW(), '{"provider":"email","providers":["email"]}', '{}', NOW(), NOW()),
    (uid_member,'00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'member@regenpulse.com', enc_pw, NOW(), '{"provider":"email","providers":["email"]}', '{}', NOW(), NOW())
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
  VALUES
    (uid_user,  uid_user,  format('{"sub":"%s","email":"user@regenpulse.com"}', uid_user)::jsonb,  'email', uid_user::text,  NOW(), NOW(), NOW()),
    (uid_member,uid_member,format('{"sub":"%s","email":"member@regenpulse.com"}', uid_member)::jsonb, 'email', uid_member::text, NOW(), NOW(), NOW())
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.users (id, full_name, email, user_type, membership_tier_id, created_at)
  VALUES
    (uid_user,  'Demo User',   'user@regenpulse.com',  'patient', NULL, NOW()),
    (uid_member,'Demo Member', 'member@regenpulse.com', 'member',  'a0000001-0001-0001-0001-000000000002', NOW())
  ON CONFLICT (id) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    email = EXCLUDED.email,
    user_type = EXCLUDED.user_type,
    membership_tier_id = EXCLUDED.membership_tier_id;
END $$;

-- Confirmation token fix for new users (avoid 500 on login)
UPDATE auth.users SET confirmation_token = '' WHERE confirmation_token IS NULL;
UPDATE auth.users SET recovery_token = '' WHERE recovery_token IS NULL;
UPDATE auth.users SET email_change = '' WHERE email_change IS NULL;
