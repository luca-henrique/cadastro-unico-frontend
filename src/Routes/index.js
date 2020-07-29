import React, { Suspense, lazy } from "react";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Loader from "../components/loader";
import SignIn from "../Pages/authentication/SignIn/index";
import Lisence from "../Pages/license";
import history from "./history";
import Private from "./private";

const Dashboard = lazy(() => import("../Pages/Owner/home"));

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
