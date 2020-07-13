import { call, put } from "redux-saga/effects";
import { toastr } from "react-redux-toastr";

import { push } from "connected-react-router";

import api from "../../services/api";

export function* checkToken({ payload }) {
  try {
    const { data } = yield call(api.put, "/update-license", payload);
    if (data.license) {
      yield put(push("/login"));
    }
    yield toastr.success("Acesso liberado.");
  } catch (err) {
    yield toastr.error("Falha", "chave de acesso não existe.");
  }
}

export function* requestToken() {
  try {
    const { data } = yield call(api.get, "/last-license");
    console.log(data);
    if (data.license) {
      yield put(push("/login"));
    } else {
      yield put(push("/"));
    }
  } catch (err) {}
}
