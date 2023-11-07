import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    alert("로그인 후 이용 가능한 서비스입니다.");
    return <Navigate to="/login" replace />;
  }
  return children;
}
