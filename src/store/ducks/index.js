import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as toastr } from "react-redux-toastr";

import { reducer as auth } from "./auth";

import funcionario from "./funcionario";

import view from "./view";
import user from "./user";
import profile from "./profile";
import address from "./address";
import contact from "./contact";
import login from "./login";

import paste from "./paste";
import box from "./box";
import prefecture from "./prefecture";
import family from "./family";

export default history =>
  combineReducers({
    toastr,
    funcionario,
    address,
    user,
    profile,
    auth,
    family,
    view,
    contact,
    login,
    paste,
    box,
    prefecture,
    router: connectRouter(history)
  });
