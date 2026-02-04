import Table from "../../shared/components/ui/Table";
import { useAuthStore } from "../../store/auth.store";
import useSubscriptionsQuery from "./hooks/useSubscriptionsQuery";

const Subscriptions = () => {
  const { data = [] } = useSubscriptionsQuery();
  const role = useAuthStore((s) => s.role);

  const canEdit = role === "admin";

  const columns = [
    { key: "customer", header: "Customer", render: (s: any) => s.customer },
    { key: "plan", header: "Plan", render: (s: any) => s.plan },
    { key: "status", header: "Status", render: (s: any) => s.status },
    { key: "price", header: "Price", render: (s: any) => `$${s.price}` },
    {
      key: "actions",
      header: "Actions",
      render: () =>
        canEdit ? <button className="text-blue-600">Edit</button> : null,
    },
  ];

  return <Table data={data} columns={columns} />;
};

export default Subscriptions;
