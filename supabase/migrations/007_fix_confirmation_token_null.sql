-- Fix 500 on login: Auth server cannot scan NULL into string for these columns.
-- Seed users leave these NULL; set to '' so Auth can scan. Run in Supabase SQL Editor.

UPDATE auth.users
SET
  confirmation_token = COALESCE(confirmation_token, ''),
  recovery_token = COALESCE(recovery_token, ''),
  email_change = COALESCE(email_change, '')
WHERE
  confirmation_token IS NULL
  OR recovery_token IS NULL
  OR email_change IS NULL;
