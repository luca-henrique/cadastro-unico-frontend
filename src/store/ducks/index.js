import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as toastr } from "react-redux-toastr";

import { reducer as auth } from "./auth";
import view from "./view";
import user from "./user";
import profile from "./profile";
import address from "./address";

import login from "./login";

export default history =>
  combineReducers({
    toastr,
    address,
    user,
    profile,
    auth,
    view,
    login,
    router: connectRouter(history)
  });
