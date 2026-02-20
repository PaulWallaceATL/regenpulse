# Debug Auth 500 on Login

The 500 comes from **Supabase Auth** (`/auth/v1/token`), not from our app. Follow these steps to get the real error.

## Step 1: Get the real error from Supabase

1. Open **Supabase Dashboard** → your project.
2. In the left sidebar click **Logs** (or **Log Explorer**).
3. Try logging in again at regenpulse.vercel.app/login (partner@oxyhealth.com / password123).
4. In Logs, open **Postgres** (or **Database**) and look for the **timestamp of your login attempt**.
5. Find a row where **user_name** is `supabase_auth_admin` or where **event_message** / **detail** mentions ERROR.
6. Double-click that row to expand it. The **detail**, **hint**, or **event_message** will show the actual Postgres error (e.g. column does not exist, constraint violation, permission denied).

If Postgres logs don’t show it, try **Auth** logs: filter by status 500 or level “error” and check the message.

## Step 2: Test with a dashboard-created user

If the logs are hard to read, this narrows it down:

1. In Supabase go to **Authentication** → **Users**.
2. Click **Add user** → **Create new user**.
3. Email: `test@regenpulse.com`, Password: `password123`.
4. Create the user.
5. In your app, log in with **test@regenpulse.com** / **password123**.

- **If this login works:** the 500 is likely tied to the **seed users** (e.g. how we inserted into `auth.users` / `auth.identities`). We can then fix the seed or use dashboard users for testing.
- **If this login also returns 500:** the problem is project-wide (auth schema, permissions, or config). The Postgres/Auth log from Step 1 is required to fix it.

## What to send back

Paste or describe:

- The **exact error message** from the Postgres or Auth log (the expanded row from Step 1), or  
- The result of the Step 2 test (dashboard user login works vs. also 500).

Then we can target the fix (e.g. constraint, missing column, or seed format).
