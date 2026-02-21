-- Fix 500 on login: Auth (GoTrue) cannot scan NULL into string for token columns.
-- Set confirmation_token, recovery_token, email_change to '' where NULL.
-- (email_change_token exists only in newer GoTrue schemas; omit if your project errors on it.)
-- Run in Supabase SQL Editor if 007 already ran and login still 500s.

UPDATE auth.users
SET
  confirmation_token = COALESCE(confirmation_token, ''),
  recovery_token = COALESCE(recovery_token, ''),
  email_change = COALESCE(email_change, '')
WHERE
  confirmation_token IS NULL
  OR recovery_token IS NULL
  OR email_change IS NULL;
