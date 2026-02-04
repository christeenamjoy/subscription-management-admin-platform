export type Subscription = {
    id: number;
    customer: string;
    plan: "Basic" | "Pro" | "Enterprise";
    status: "Active" | "Trial" | "Cancelled";
    price: number;
  };