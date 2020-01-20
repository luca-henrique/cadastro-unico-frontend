import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as UsersCreatos } from "../ducks/user";
import { push } from "connected-react-router";

import { actions as toastrActions } from "react-redux-toastr";

export function* index() {
  try {
    const response = yield call(api.get, "/users");

    yield put(UsersCreatos.loadUserSuccess(response));

    console.log(response);

    //const user = yield call([api.get, `users/${response.data}`])
  } catch (err) {}
}

export function* list() {
  try {
    const response = yield call([api, "get"], "/users");
    yield put(UsersCreatos.loadUsersSuccess(response.data));
  } catch (err) {}
}

export function* updateUser({ payload }) {
  try {
    const response = yield call([api, "put"], `clients/${payload.id}`);
  } catch (err) {}
}
