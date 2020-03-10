import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { push } from "connected-react-router";

import AuthActions from "../ducks/auth";

import { Creators as UserCreators } from "../ducks/user";
import { Creators as BoxCreators } from "../ducks/box";
import { Creators as LogCreators } from "../ducks/log";
import { Creators as PrefeituraCreators } from "../ducks/prefecture";

import { actions as toastrActions } from "react-redux-toastr";

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, "authenticate", { email, password });
    localStorage.setItem("@Omni:token", response.data.token);
    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(UserCreators.readUserRequest());
    yield put(PrefeituraCreators.readPrefectureRequest());
    yield put(LogCreators.readLogRequest());
    yield put(BoxCreators.readBoxesRequest());

    yield put(push("/"));
  } catch (err) {
    yield put(
      toastrActions.add({
        title: "Falha no login",
        message:
          "Email/senha errados, entre em contato com a empresa responsavel ou com o administrador."
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

  yield put(push("/"));
}
