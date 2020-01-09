import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import AuthActions from "../ducks/auth";
import { push } from "connected-react-router";

import { actions as toastrActions } from "react-redux-toastr";

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, "authenticate", { email, password });

    localStorage.setItem("@Omni:token", response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push("/owner"));
  } catch (err) {
    yield put(
      toastrActions.add({
        title: "Falha no login",
        message:
          "Email/password errados, entre em contato com a empresa responsavel ou com administrador do sistema"
      })
    );
  }
}

export function* signOut() {
  localStorage.removeItem("@Omni:token");
  localStorage.removeItem("@Omni:team");

  yield put(push("/"));
}
