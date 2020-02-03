import { call, put } from "redux-saga/effects";
import { Creators as PasteCreators } from "../ducks/paste";

import api from "../../services/api";

import { toastr } from "react-redux-toastr";

export function* createPaste({ payload }) {
  try {
    console.log(payload.paste);
    const response = yield call(api.post, "/paste", payload.paste);
    console.log(response);
  } catch (err) {}
}

export function* updatePaste({ payload }) {
  try {
    const response = yield call(
      api.put,
      `/paste/${payload.paste.id}`,
      payload.paste
    );
  } catch (err) {}
}

export function* deletePaste({ payload }) {
  try {
    const response = yield call(api.delete, `/paste/${payload.id}`);
  } catch (err) {}
}

export function* getPastes() {
  try {
    const response = yield call(api.get, "/paste/");

    yield put(PasteCreators.loadAllPastes(response.data));
  } catch (err) {}
}
