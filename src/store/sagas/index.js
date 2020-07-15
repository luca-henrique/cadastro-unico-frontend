import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "../ducks/auth";
import { signIn, signOut } from "./auth";

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

import { teste } from "./teste";

export default function* rootSaga() {
  return yield all([
    takeLatest("persist/REHYDRATE", requestToken),
    takeLatest(LicenseTypes.CHECK_ACCESS_TOKEN, checkToken),

    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(UserTypes.READ_USER_JOINED_REQUEST, readUserJoined),
    takeLatest(UserTypes.READ_USER_REQUEST, readUser),
    takeLatest(UserTypes.DELETE_USER_REQUEST, deleteUser),
    takeLatest(UserTypes.CREATE_USER_REQUEST, createUser),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, updateUser),
    takeLatest(UserTypes.CHANGER_PASSWORD_REQUEST, changerPasswordUserJoined),
  ]);
}
