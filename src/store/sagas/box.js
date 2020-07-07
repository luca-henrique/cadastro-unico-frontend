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
    console.log(payload);
    yield call(api.put, `/box/${payload.box.id}`, payload.box);
    yield put(BoxCreators.updateBoxSuccess(payload.objUpdated));
    toastr.success("Atualização feita");
  } catch (err) {}
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

export function* getBox({ payload }) {
  try {
    const response = yield call(api.get, `/box/${payload.id}`);
    yield put(BoxCreators.boxSelectedSuccess(response.data));
  } catch (err) {}
}

export function* getBoxes() {
  try {
    const response = yield call(api.get, "/search");

    yield put(BoxCreators.readBoxesSuccess(response.data));
  } catch (err) {}
}

export function* getPastesBox({ payload }) {
  try {
    const response = yield call(api.get, `/pastes/${payload.id}`);

    yield put(BoxCreators.readPastesSuccess(response.data));
  } catch (err) {}
}

export function* getFamilyBox({ payload }) {
  try {
    const response = yield call(api.get, `/families/${payload.id}`);

    yield put(BoxCreators.readFamiliesSuccess(response.data));
  } catch (err) {}
}

export function* getBoxSize({ payload }) {
  try {
    const response = yield call(api.get, `/boxes/${payload.id}`);

    yield put(BoxCreators.boxSizeSuccess(response.data));
  } catch (err) {}
}
