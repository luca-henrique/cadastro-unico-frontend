import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { push } from "connected-react-router";

import AuthActions from "../ducks/auth";
import { actions as toastrActions } from "react-redux-toastr";
import { Creators as UserCreators } from "../ducks/user";

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, "authenticate", { email, password });
    if (response.status === 204) {
      throw new Error("Não veio jwt");
    }
    localStorage.setItem("@Omni:token", response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));

    yield put(UserCreators.readUserJoinedRequest());

    yield put(push("/owner"));
  } catch (err) {
    yield put(
      toastrActions.add({
        title: "Falha no login",
        message:
          "Email/senha errados, entre em contato com a empresa responsavel ou com o administrador.",
      })
    );
  }
}

export function* signOut() {
  /**
   * Remover tudo quando sair
   */

  localStorage.removeItem("@Omni:token");
  localStorage.removeItem("@Omni:team");

  yield put(push("/login"));
}
