/**
 * Central config for REAL PT & Wellness — phone, scheduling, and contact URLs.
 * Use these constants for all CTAs so we don't hardcode in multiple places.
 */
export const REALPT = {
  /** Raw digits for tel: links */
  phone: "3868722656",
  /** Display format */
  displayPhone: "386-872-2656",
  /** Primary scheduling / book a consult (existing pathway) */
  schedulingUrl: "/contact",
  /** Contact / discuss / request info */
  contactUrl: "/contact",
  /** Book flow (ZIP-based clinic finder) */
  bookUrl: "/book",
  /** Memberships page (for "View Membership Options" etc.) */
  membershipsUrl: "/memberships",
  /** Site name for CTAs and footers */
  siteName: "REAL PT & Wellness",
} as const;
