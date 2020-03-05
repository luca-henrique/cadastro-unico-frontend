import { call, put } from "redux-saga/effects";
import { Creators as LicenseCreators } from "../ducks/license";

import { toastr } from "react-redux-toastr";

import api from "../../services/api";

export function* verification({ payload }) {
  try {
    const response = yield call(api.put, "/token", payload);

    yield put(LicenseCreators.tokenAccess(response.data));

    yield toastr.success("Acesso liberado.");
  } catch (err) {
    yield toastr.error("Falha", "chave de acesso não existe.");
  }
}

export function* requestToken({ payload }) {
  try {
    const tokens = yield call(api.get, "/tokens");
    var size = tokens.data.length - 1;
    yield put(LicenseCreators.tokenAccess(tokens.data[size]));
  } catch (err) {}
}
