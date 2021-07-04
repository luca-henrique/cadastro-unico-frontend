import React, { Suspense } from "react";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import SignIn from "~/pages/SignIn/index.jsx";
import history from "./history";

const Routes = () => (
  <Suspense fallback={<div />}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={SignIn} />
      </Switch>
    </ConnectedRouter>
  </Suspense>
);

export default Routes;
