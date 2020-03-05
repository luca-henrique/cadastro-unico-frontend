import React from "react";

import { Route, Redirect } from "react-router-dom";

import { store } from "../store/index";

const LicensedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      store.getState().license.key.license === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/license", state: { from: props.location } }}
        />
      )
    }
  >
    {console.log(store.getState().license.key.license)}
    {console.log(store.getState().auth.signedIn)}
  </Route>
);

export default LicensedRoute;
