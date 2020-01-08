import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "../Pages/Auth/SignUp/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
