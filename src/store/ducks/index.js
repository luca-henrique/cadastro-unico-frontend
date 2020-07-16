import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as toastr } from "react-redux-toastr";

import { reducer as auth } from "./auth";

import license from "./license";
import user from "./user";

import log from "./log";

import district from "./district";

export default (history) =>
  combineReducers({
    toastr,

    license,

    user,
    auth,

    log,

    district,

    router: connectRouter(history),
  });
