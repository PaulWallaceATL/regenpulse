-- Fix 500 on login: stop using is_admin() in SELECT so profile fetch never calls it.
-- Users (including admin) can only read their own row. Login works; admin dashboard
-- Users tab will show only the current user unless you add an API route with service role.

DROP POLICY IF EXISTS "users_select_own_or_admin" ON users;
DROP POLICY IF EXISTS "users_select_own" ON users;
DROP POLICY IF EXISTS "users_admin_select_all" ON users;
CREATE POLICY "users_select_own" ON users FOR SELECT USING (auth.uid() = id);
