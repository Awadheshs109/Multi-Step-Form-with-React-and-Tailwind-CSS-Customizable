import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import StepForm from "./components/StepForm";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";

import ProtectedRoute from "./Auth/ProtectedRoute";
import { AuthProvider } from "./Auth/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <div className="bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/login" element={<LoginForm />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <StepForm />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
