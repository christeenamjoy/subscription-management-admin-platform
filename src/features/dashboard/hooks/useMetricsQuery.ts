import { useQuery } from "@tanstack/react-query";
import { fetchMetrics } from "../services/dashboard.services";

 const useMetricsQuery = () =>
  useQuery({
    queryKey: ["metrics"],
    queryFn: fetchMetrics,
  });

  export default useMetricsQuery