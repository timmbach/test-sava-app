import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

export default function ExistingUserRoutes () {
  const { currentUser } = useAuth();

  return currentUser && currentUser.ProfilePixPresent ? <Outlet /> : <Navigate to="/upload-new-user" />;
}
