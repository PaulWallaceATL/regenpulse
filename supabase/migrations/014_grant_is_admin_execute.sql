-- Allow authenticated and anon to execute is_admin() so RLS policies can evaluate.
-- Without this, SELECT on public.users can return 500 when the policy calls is_admin().

GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon;
GRANT EXECUTE ON FUNCTION public.is_admin() TO service_role;
