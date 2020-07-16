import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "../ducks/auth";
import { signIn, signOut } from "./auth";

import { Types as LogTypes } from "../ducks/log";
import { getLogs } from "./log";

import { Types as LicenseTypes } from "../ducks/license";
import { checkToken, requestToken } from "./license";

import { Types as UserTypes } from "../ducks/user";
import {
  readUserJoined,
  readUser,
  deleteUser,
  createUser,
  updateUser,
  changerPasswordUserJoined,
} from "./user";

import { Types as DistrictTypes } from "../ducks/district";
import {
  createDistrict,
  readDistrict,
  deleteDistrict,
  updateDistrict,
} from "./district";

export default function* rootSaga() {
  return yield all([
    takeLatest("persist/REHYDRATE", requestToken),
    takeLatest(LicenseTypes.CHECK_ACCESS_TOKEN, checkToken),

    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(LogTypes.READ_LOG_REQUEST, getLogs),

    takeLatest(UserTypes.READ_USER_JOINED_REQUEST, readUserJoined),
    takeLatest(UserTypes.READ_USER_REQUEST, readUser),
    takeLatest(UserTypes.DELETE_USER_REQUEST, deleteUser),
    takeLatest(UserTypes.CREATE_USER_REQUEST, createUser),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, updateUser),
    takeLatest(UserTypes.CHANGER_PASSWORD_REQUEST, changerPasswordUserJoined),

    takeLatest(DistrictTypes.CREATE_DISTRICT_REQUEST, createDistrict),
    takeLatest(DistrictTypes.READ_DISTRICT_REQUEST, readDistrict),
    takeLatest(DistrictTypes.DELETE_DISTRICT_REQUEST, deleteDistrict),
    takeLatest(DistrictTypes.UPDATE_DISTRICT_REQUEST, updateDistrict),
  ]);
}
