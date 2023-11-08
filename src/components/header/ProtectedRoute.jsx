import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;
}
