import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "../ducks/auth";
import { signIn, signOut } from "./auth";

import { Types as UserTypes } from "../ducks/user";

import { index, update } from "./user";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(UserTypes.LOAD_USER_REQUEST, index),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, update)
  ]);
}
