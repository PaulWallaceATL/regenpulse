-- Temporarily remove ALL triggers on auth.users to test if 500 on login is trigger-related.
-- Run in Supabase SQL Editor. If login works after this, a trigger was causing the 500.

-- Drop our trigger from 005
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Drop any other common trigger names
DROP TRIGGER IF EXISTS on_auth_user_updated ON auth.users;
DROP TRIGGER IF EXISTS trigger_on_auth_user_created ON auth.users;
DROP TRIGGER IF EXISTS handle_new_user_trigger ON auth.users;

-- List any remaining triggers (run as separate query to inspect):
-- SELECT tgname, tgrelid::regclass FROM pg_trigger WHERE tgrelid = 'auth.users'::regclass;
