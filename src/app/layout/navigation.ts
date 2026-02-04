export type NavItem = {
  label: string;
  path: string;
  roles?: Array<"admin" | "manager" | "viewer">;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", path: "/", roles: ["admin", "manager", "viewer"] },
  { label: "Users", path: "/users", roles: ["admin", "manager"] },
  { label: "Subscriptions", path: "/subscriptions", roles: ["admin"] },
];
