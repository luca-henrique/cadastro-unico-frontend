import React from "react";

import { Route, Redirect } from "react-router-dom";

import { store } from "../store/index";

const AdministratorRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      store.getState().user.user.admin ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  ></Route>
);

export default AdministratorRoute;
