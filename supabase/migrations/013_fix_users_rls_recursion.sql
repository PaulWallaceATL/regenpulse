-- Fix "infinite recursion detected in policy for relation 'users'".
-- Admin policies on public.users did EXISTS (SELECT 1 FROM users ...), which re-triggered
-- the same policies. Use a SECURITY DEFINER function so the admin check bypasses RLS.

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND user_type = 'admin');
$$;

-- Recreate users table admin policies to use is_admin() instead of querying users
DROP POLICY IF EXISTS "users_admin_select_all" ON users;
DROP POLICY IF EXISTS "users_admin_update_all" ON users;
CREATE POLICY "users_admin_select_all" ON users FOR SELECT USING (public.is_admin());
CREATE POLICY "users_admin_update_all" ON users FOR UPDATE USING (public.is_admin());

-- Required: RLS evaluates all policies; if is_admin() is not executable, SELECT returns 500
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon;
GRANT EXECUTE ON FUNCTION public.is_admin() TO service_role;
