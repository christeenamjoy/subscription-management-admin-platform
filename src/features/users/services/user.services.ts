import { delay } from "../../../services/api";

export const fetchUsers = async () => {
    await delay(500);
    return [
      { id: 1, name: "Alice", role: "Admin" },
      { id: 2, name: "Bob", role: "Viewer" },
    ];
  };

  export const fetchSubscriptionsByPlan = async () => {
    await delay(500);
    return [
      { plan: "Basic", count: 120 },
      { plan: "Pro", count: 160 },
      { plan: "Enterprise", count: 62 },
    ];
  };
  