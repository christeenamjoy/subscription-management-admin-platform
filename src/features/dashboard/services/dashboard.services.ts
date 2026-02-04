import { delay } from "../../../services/api";

export const fetchMetrics = async () => {
    await delay(500);
    return {
      revenue: 124_000,
      activeSubscriptions: 342,
      churnRate: 3.2,
    };
  };
  export const fetchRevenueTrend = async () => {
      await delay(500);
      return [
        { month: "Jan", revenue: 12000 },
        { month: "Feb", revenue: 15000 },
        { month: "Mar", revenue: 18000 },
        { month: "Apr", revenue: 22000 },
      ];
    };