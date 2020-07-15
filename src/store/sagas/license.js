import { call, put } from "redux-saga/effects";
import { toastr } from "react-redux-toastr";

import { push } from "connected-react-router";

import api from "../../services/api";

import { store } from "../index";

export function* checkToken({ payload }) {
  try {
    const { data } = yield call(api.put, "/update-license", payload);
    const signedIn = store.getState().auth.signedIn;
    if (data.license) {
      if (signedIn) {
        yield put(push("/dashboard"));
      } else {
        yield put(push("/login"));
      }
    }
    yield toastr.success("Acesso liberado.");
  } catch (err) {
    yield toastr.error("Falha", "chave de acesso não existe.");
  }
}

export function* requestToken() {
  try {
    const { data } = yield call(api.get, "/last-license");
    const signedIn = store.getState().auth.signedIn;

    if (data.license) {
      if (signedIn) {
        yield put(push("/dashboard"));
      } else {
        yield put(push("/login"));
      }
    } else {
      yield put(push("/"));
    }
  } catch (err) {}
}
