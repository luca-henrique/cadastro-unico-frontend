import { combineReducers } from "redux";

import { reducer as auth } from "./auth";
import { reducer as toastr } from "react-redux-toastr";

import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    toastr,
    auth,
    router: connectRouter(history)
  });
