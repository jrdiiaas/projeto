import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = !!localStorage.getItem("token");
    const location = useLocation();

    return isLoggedIn ? (
        children
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRoute;
