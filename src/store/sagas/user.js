import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as UsersCreatos } from "../ducks/user";
import { push } from "connected-react-router";

import { actions as toastrActions } from "react-redux-toastr";

export function* store({ payload }) {
  try {
    yield call([api, "post"], "/users", payload.user);
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
