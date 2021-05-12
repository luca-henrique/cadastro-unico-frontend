import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { push } from "connected-react-router";

import AuthActions from "../ducks/auth";

import { toastr } from "react-redux-toastr";

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, "authenticate", { email, password });
    if (response.status === 204) {
      throw new Error("Não veio jwt");
    }

    localStorage.setItem("@Omni:token", response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));


    yield put(push("/dashboard"));
  } catch (err) {
    toastr.error(
      "Falha no login",
      "Email/senha errados, entre em contato com a empresa responsavel ou com o administrador."
    );
  }
}

export function* signOut() {
  localStorage.removeItem("@Omni:token");


  yield put(push("/login"));
}
