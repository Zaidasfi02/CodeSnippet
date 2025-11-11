import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");

  return email && password ? children : <Navigate to="/login" />;
}

