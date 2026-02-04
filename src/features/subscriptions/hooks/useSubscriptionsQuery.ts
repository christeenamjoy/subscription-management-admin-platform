import { useQuery } from "@tanstack/react-query";
import { fetchSubscriptions } from "../services/subscription.services";

const useSubscriptionsQuery = () =>
useQuery({
  queryKey: ["subscriptions"],
  queryFn: fetchSubscriptions,
});
export default useSubscriptionsQuery