import React, { Suspense, lazy } from "react";

import Circular from "@material-ui/core/CircularProgress";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import SignIn from "../Pages/authentication/SignIn/index";
import Lisence from "../Pages/license";
import history from "./history";
import Private from "./private";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div>
        <Circular style={{ color: "rgb(2, 90, 10)" }} />
      </div>
    </div>
  );
};

const Dashboard = lazy(() => import("../Pages/Owner/Home/"));

const Routes = () => (
  <Suspense fallback={<Loader />}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Lisence} />
        <Route path="/login" exact component={SignIn} />

        <Private path="/dashboard" component={Dashboard} />
      </Switch>
    </ConnectedRouter>
  </Suspense>
);

export default Routes;
