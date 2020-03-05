import React from "react";
import { Switch } from "react-router-dom";
import SignIn from "../Pages/Auth/SignIn/index";
import OwnerView from "../Pages/Owner/index";
import history from "./history";
import Private from "./private";
import Guest from "./guest";

import { ConnectedRouter } from "connected-react-router";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/" exact component={SignIn} />

      <Private path="/owner" component={OwnerView} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
