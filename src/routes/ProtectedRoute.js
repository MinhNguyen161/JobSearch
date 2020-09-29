import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  if (!false) {
    //user.isAuthenticated === true
    /// neu ma dung thi moi ko prompt  login
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
