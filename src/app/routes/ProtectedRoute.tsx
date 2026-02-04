import React from "react";
import { useAuthStore, type Role } from "../../store/auth.store";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  roles?: Role[];
};

//Authentication state lives in a global store, 
// while authorization is enforced both at route level and UI level. 
// This avoids accidental access through composition.

const ProtectedRoute = ({ children, roles }: Props) => {
  const { role, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) return <Navigate to="/login" />;

  if (roles && role && !role?.includes(role))
    return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
