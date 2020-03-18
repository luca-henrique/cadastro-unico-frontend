import React from "react";

import { Route, Redirect } from "react-router-dom";

import { store } from "../store/index";

const UnlicensedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !store.getState().license.key.license === true ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  ></Route>
);

export default UnlicensedRoute;
