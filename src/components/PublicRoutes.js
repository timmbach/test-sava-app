import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

export default function PublicRoute () {
  const { currentUser } = useAuth();

  return !currentUser ? <Outlet /> : <Navigate to="/dashboard" />;
}
