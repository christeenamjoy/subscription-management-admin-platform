import { useQuery } from "@tanstack/react-query";
import {  fetchRevenueTrend } from "../services/dashboard.services";



   const useRevenueTrendQuery = () =>
  useQuery({
    queryKey: ["revenue-trend"],
    queryFn: fetchRevenueTrend,
  });

  export default useRevenueTrendQuery