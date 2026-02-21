-- Fix 500 on profile fetch: use one SELECT policy so (auth.uid() = id) is checked first.
-- When reading your own row, the OR short-circuits and is_admin() is never called,
-- avoiding permission errors if the function grant isn't applied.

DROP POLICY IF EXISTS "users_select_own" ON users;
DROP POLICY IF EXISTS "users_admin_select_all" ON users;
CREATE POLICY "users_select_own_or_admin" ON users FOR SELECT USING (
  auth.uid() = id OR public.is_admin()
);
