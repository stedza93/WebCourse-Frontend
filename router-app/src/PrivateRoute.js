import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "./auth/authService";
export const PrivateRoute = (props) => {
  let Component = props.component;
  let isAuthenticated = auth.getAuthStatus();
  return (
    <Route
      render={(props) => {
        return isAuthenticated ? (
          <Component></Component>
        ) : (
          <Redirect to="/login"></Redirect>
        );
      }}
    ></Route>
  );
};
