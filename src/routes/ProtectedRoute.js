import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../context/Authentication";

const ProtectedRoute = (props) => {
  const { state } = useContext(AuthenticationContext);
  if (!state.isAuthenticated) {
    return <Redirect to="/public"/>;
  }
  const { Component } = props;
  return <Route component={Component} {...props} />;
};

export default ProtectedRoute;
