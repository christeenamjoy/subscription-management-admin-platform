import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../../features/dashboard/Dashboard";
import Users from "../../features/users/Users";
import Subscriptions from "../../features/subscriptions/Subscriptions";
import Login from "../../features/auth/Login";
import ProtectedRoute from "./ProtectedRoute";

// I use React Router’s nested routes so layouts are owned by the router.
// This avoids prop drilling, keeps composition predictable,
// and makes it easy to add protected routes or multiple layouts later.

/* If asked “How do you structure navigation?”, you say:

“Navigation is driven from a centralized config, not hardcoded in JSX.
This makes role-based visibility, feature flags, and analytics straightforward.” */

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "users",
        element: (
          <ProtectedRoute roles={["admin", "manager"]}>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: "subscriptions",
        element: (
          <ProtectedRoute roles={["admin"]}>
            <Subscriptions />{" "}
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
