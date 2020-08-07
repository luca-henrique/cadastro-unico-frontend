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
const HangTag = lazy(() => import("../Pages/Owner/pdf/hantags/"));
const BoxWithFamiliar = lazy(() =>
  import("../Pages/Owner/pdf/box-with-familiar")
);

const Districts = lazy(() => import("../Pages/Owner/pdf/district/"));

const Discard = lazy(() => import("../Pages/Owner/pdf/discard"));

const Routes = () => (
  <Suspense fallback={<Loader />}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Lisence} />
        <Route path="/login" exact component={SignIn} />

        <Route path="/box_tag" exact component={HangTag} />

        <Route path="/box_with_familiar" exact component={BoxWithFamiliar} />

        <Route path="/pdf_districts" exact component={Districts} />

        <Route path="/discard" exact component={Discard} />

        <Private path="/dashboard" component={Dashboard} />
      </Switch>
    </ConnectedRouter>
  </Suspense>
);

export default Routes;
