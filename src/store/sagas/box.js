import api from "../../services/api";

import { call, put } from "redux-saga/effects";
import { toastr } from "react-redux-toastr";
import { Creators as BoxCreators } from "../ducks/box";

export function* createBox({ payload }) {
  try {
    const response = yield call(api.post, "/box", payload.box);
    yield put(BoxCreators.createBoxSuccess(response.data));
    toastr.success("Caixa criada com sucesso");
  } catch (err) {
    toastr.error("Erro ao criar a caixa.");
  }
}

export function* updateBox({ payload }) {
  try {
    yield call(api.put, `/box/${payload.box.id}`, payload.box);
    yield put(BoxCreators.updateBoxSuccess(payload.box));
    toastr.success("Atualização feita na caixa");
  } catch (err) {
    toastr.error("Erro ao atualizar a caixa.");
  }
}

export function* deleteBox({ payload }) {
  try {
    yield call(api.delete, `/box/${payload.id}`);
    yield put(BoxCreators.deleteBoxSuccess(payload.id));
    toastr.error("Caixa excluida.");
  } catch (err) {
    toastr.error("Ocorreu um erro ao excluir a caixa.");
  }
}

export function* readBox() {
  try {
    const { data } = yield call(api.get, `/box`);

    yield put(BoxCreators.readBoxSuccess(data));
  } catch (err) {}
}
