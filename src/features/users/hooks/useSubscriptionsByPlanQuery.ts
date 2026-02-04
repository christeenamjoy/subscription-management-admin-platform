import { useQuery } from "@tanstack/react-query";
import { fetchSubscriptionsByPlan } from "../services/user.services";

 const useSubscriptionsByPlanQuery = () =>
useQuery({
  queryKey: ["subscriptions-by-plan"],
  queryFn: fetchSubscriptionsByPlan,
});

export default useSubscriptionsByPlanQuery
