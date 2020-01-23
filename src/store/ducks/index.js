import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as toastr } from "react-redux-toastr";

import login from "./login";
import profile from "./profile";

import address from "./address";
import contact from "./contact";
import funcionario from "./funcionario";
import paste from "./pasta";
import box from "./caixa";
import familiar from "./familiar";

import { reducer as auth } from "./auth";

import user from "./user";

export default history =>
  combineReducers({
    toastr,
    box,
    familiar,
    paste,
    contact,
    funcionario,
    login,
    address,
    user,
    profile,
    auth,
    router: connectRouter(history)
  });
