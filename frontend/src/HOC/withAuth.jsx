import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  const isAuthenticated = true;

  return () => {
    if (isAuthenticated) {
      return <Component />;
    } else {
      return <Navigate to="/login" />;
    }
  };
};

export default withAuth;
