import type { AdminRoles } from "../types/roles";

export interface user {
  data: UserInfo | undefined;
  isLoggedIn: boolean;
  role: AdminRoles | undefined;
}

export interface UserInfo {
  // userId: string;
  // email: string;
  // phoneNumber?: string;
  FirstName: string;
  FullName: string;
  Role: string;
  Token: string;
  RefreshToken: string;
}
