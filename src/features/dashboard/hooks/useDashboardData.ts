import useMetricsQuery from "./useMetricsQuery";
import useRevenueTrendQuery from "./useRevenueTrendQuery";

export const useDashboardData = () => {
  const metricsQ = useMetricsQuery();
  const revenueQ = useRevenueTrendQuery();

  return {
    metrics: metricsQ.data,
    revenue: revenueQ.data,
    isLoading: metricsQ.isLoading || revenueQ.isLoading,
  };
};
