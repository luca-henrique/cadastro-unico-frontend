import { call, put } from "redux-saga/effects";
import { Creators as LicenseCreators } from "../ducks/license";

import { toastr } from "react-redux-toastr";

import { push } from "connected-react-router";

import api from "../../services/api";

export function* checkToken({ payload }) {
  try {
    // eslint-disable-next-line no-unused-vars
    const response = yield call(api.put, "/token", payload);

    yield put(push("/login"));

    yield toastr.success("Acesso liberado.");
  } catch (err) {
    yield toastr.error("Falha", "chave de acesso não existe.");
  }
}

export function* requestToken() {
  try {
    const tokens = yield call(api.get, "/token");

    var size = tokens.data.length - 1;

    if (size >= 0) {
      yield put(LicenseCreators.tokenRedirect(tokens.data[size].license));
      yield call(api.get, `/token/${tokens.data[size].id}`);
    }
    if (size < 0 || tokens.data[size].license === false) {
      yield put(push("/"));
    } else {
      yield put(push("/login"));
    }
  } catch (err) {}
}
