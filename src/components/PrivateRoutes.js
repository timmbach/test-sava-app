
import React from "react";
import { Outlet } from "react-router-dom";
// import { Outlet, Navigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoutes() {
  // const { currentUser } = useAuth();

  // return currentUser ? <Outlet /> : <Navigate to="/landing-page" />;
  return <Outlet />
}
