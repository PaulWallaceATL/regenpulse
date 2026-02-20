export type UserWithRole = {
  id: string;
  full_name: string | null;
  user_type: string | null;
  manufacturer_id: string | null;
  clinic_id: string | null;
  content_creator_id: string | null;
};

export function getRedirectPathForUserType(userType: string | null): string {
  switch (userType) {
    case "manufacturer":
      return "/dashboard";
    case "clinic_admin":
      return "/clinic/dashboard";
    case "creator":
      return "/creator/dashboard";
    case "admin":
      return "/admin/dashboard";
    case "member":
      return "/member/dashboard";
    case "patient":
    default:
      return "/book";
  }
}
