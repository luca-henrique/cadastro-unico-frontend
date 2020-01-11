import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as toastr } from "react-redux-toastr";

import users from "./user";

import { reducer as auth } from "./auth";

export default history =>
  combineReducers({
    toastr,
    users,
    auth,
    router: connectRouter(history)
  });
