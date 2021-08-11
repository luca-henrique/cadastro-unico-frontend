import React, { Suspense } from "react";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import history from "./history";

import SignIn from "~/pages/SignIn01";
import Sign from "~/pages/SignIn02";


const Routes = () => (
  <Suspense fallback={<div />}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/sign" exact component={Sign} />
      </Switch>
    </ConnectedRouter>
  </Suspense>
);

export default Routes;
