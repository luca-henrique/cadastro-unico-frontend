import React from "react";

import { Route, Redirect } from "react-router-dom";

import { store } from "../store/index";

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !store.getState().auth.signedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/owner", state: { from: props.location } }}
        />
      )
    }
  ></Route>
);

export default GuestRoute;
