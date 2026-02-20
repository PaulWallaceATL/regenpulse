# Test accounts (after running seed + seed_account_tiers)

Run migrations through `010_stripe_and_admin_access.sql`, then `seed.sql`, then `seed_account_tiers.sql` in the Supabase SQL Editor.  
**Password for all:** `password123`

| Role    | Email                  | Description                    |
|---------|------------------------|--------------------------------|
| **User**   | user@regenpulse.com     | Customer (patient), no tier    |
| **Member** | member@regenpulse.com   | Paying member (Premium tier)   |
| **Partner**| partner@oxyhealth.com   | Manufacturer/partner          |
| **Admin**  | admin@regenpulse.com    | Platform admin (full dashboard)|

- **User** → after login: redirects to `/book`
- **Member** → after login: redirects to `/member/dashboard`
- **Partner** → after login: redirects to `/dashboard` (manufacturer)
- **Admin** → after login: redirects to `/admin/dashboard` (manage users, departments, tiers, partners, inquiries, products)

Optional (from main seed):  
- **Clinic** – info@louisvillerecovery.com → `/clinic/dashboard`  
- **Creator** – sarah@recoverycoach.com → `/creator/dashboard`  
- **Patient** – patient@test.com → `/book`
