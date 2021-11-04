import React, { Suspense } from "react";

import { Switch,Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import history from "./history";

import SignIn from "../pages/SignIn/";



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
