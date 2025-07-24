// AuthContext.jsx
import React, { createContext, useState } from "react";
import axiosInstance from "../API/axiosInstance";

// ✅ Create global AuthContext to manage auth state across the app
export const AuthContext = createContext();

// ✅ AuthProvider: Provides authentication state & actions (login/logout)
export const AuthProvider = ({ children }) => {
  // ✅ Check localStorage token on load to determine if user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem("accessToken");
    return !!token;
  });

  // ✅ Login function: Authenticates user & saves tokens
  const login = async (username, password) => {
    const res = await axiosInstance.post("/auth/login", {
      username,
      password,
      expiresInMins: 1, // Short expiry for testing token refresh
    });

    if (res.data.accessToken) {
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);

      setIsAuthenticated(true); // ✅ Mark user as authenticated
    }
  };

  // ✅ Logout function: Clears tokens & resets authentication state
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsAuthenticated(false);
  };

  // ✅ Expose auth functions to the whole app
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
