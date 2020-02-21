import api from "../../services/api";

import { call, put } from "redux-saga/effects";
import { toastr } from "react-redux-toastr";

import { Creators as PasteCreators } from "../ducks/paste";

export function* createPaste({ payload }) {
  try {
    // eslint-disable-next-line no-unused-vars
    const response = yield call(api.post, "/paste", payload.paste);
    toastr.success("Pasta cadastrada com sucesso.");
  } catch (err) {
    toastr.error("Falha", "Existe algum campo nulo ou já existente.");
  }
}

export function* updatePaste({ payload }) {
  try {
    // eslint-disable-next-line no-unused-vars
    const response = yield call(
      api.put,
      `/paste/${payload.paste.id}`,
      payload.paste
    );
    toastr.success("Pasta atualizada com sucesso.");
  } catch (err) {
    toastr.error("Falha", "Erro ao atualizar pasta.");
  }
}

export function* deletePaste({ payload }) {
  try {
    // eslint-disable-next-line no-unused-vars
    const response = yield call(api.delete, `/paste/${payload.id}`);
    toastr.error("A pasta selecionada foi excluida.");
  } catch (err) {}
}

export function* getPastes() {
  try {
    const response = yield call(api.get, "/paste/");
    yield put(PasteCreators.readPastesSuccess(response.data));
  } catch (err) {}
}
