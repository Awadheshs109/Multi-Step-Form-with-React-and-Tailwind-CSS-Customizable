// ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

// ✅ ProtectedRoute: Restricts unauthenticated users from accessing private routes
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  const location = useLocation();

  // ✅ If not authenticated, redirect to login and remember attempted URL
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  // ✅ If authenticated, render requested component
  return children;
};

export default ProtectedRoute;
