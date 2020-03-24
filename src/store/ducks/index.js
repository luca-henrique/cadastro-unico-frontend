import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as toastr } from "react-redux-toastr";

import { reducer as auth } from "./auth";

import license from "./license";

import funcionario from "./funcionario";

import district from "./district";

import user from "./user";

import box from "./box";

import family from "./family";

import prefecture from "./prefecture";
import prefectureAddrress from "./address_prefecture";
import prefectureContact from "./contact_prefecture";

import log from "./log";

import generator from "./generator";

export default history =>
  combineReducers({
    toastr,
    license,
    user,
    auth,
    box,
    family,
    funcionario,
    log,
    generator,

    prefecture,
    prefectureAddrress,
    prefectureContact,

    district,

    router: connectRouter(history)
  });
