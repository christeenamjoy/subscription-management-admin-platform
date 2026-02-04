import { delay } from "../../../services/api";
import type { Subscription } from "../types";

export const fetchSubscriptions = async (): Promise<Subscription[]> => {
    await delay(500);
    return [
      {
        id: 1,
        customer: "Acme Inc",
        plan: "Pro",
        status: "Active",
        price: 49,
      },
      {
        id: 2,
        customer: "Globex",
        plan: "Enterprise",
        status: "Trial",
        price: 199,
      },
      {
        id: 3,
        customer: "Startup X",
        plan: "Basic",
        status: "Cancelled",
        price: 19,
      },
    ];
  };