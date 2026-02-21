-- If login still 500 after 011: some Supabase projects have extra token columns
-- (email_change_token_new, email_change_token_current). Update them only if they exist.

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'auth' AND table_name = 'users' AND column_name = 'email_change_token_new'
  ) THEN
    UPDATE auth.users SET email_change_token_new = '' WHERE email_change_token_new IS NULL;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'auth' AND table_name = 'users' AND column_name = 'email_change_token_current'
  ) THEN
    UPDATE auth.users SET email_change_token_current = '' WHERE email_change_token_current IS NULL;
  END IF;
END $$;
