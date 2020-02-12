import { call, put } from "redux-saga/effects";

import { Creators as PrefectureCreators } from "../ducks/prefecture";

import api from "../../services/api";

import { toastr } from "react-redux-toastr";

export function* createPrefecture({ payload }) {
  try {
    const response = yield call(api.post, "/prefecture", payload.prefecture);

    yield put(PrefectureCreators.createPrefectureSuccess(response.data));

    yield toastr.success("Informações da prefeitura atualizadas com sucesso.");

    yield put(PrefectureCreators.failLoadPrefecture(true));
  } catch (err) {
    yield toastr.error("Falha", "Preencha os campos");
  }
}

export function* updatePrefecture({ payload }) {
  try {
    const response = yield call(
      api.put,
      `/prefecture/${payload.prefecture.id}`,
      payload.prefecture
    );

    yield put(PrefectureCreators.failLoadPrefecture(true));

    yield toastr.success("Informações da prefeitura atualizadas com sucesso.");

    yield put(PrefectureCreators.readPrefectureSuccess(response.data));
  } catch (err) {
    yield toastr.error("Falha", "Falha ao atualizar as informações.");
  }
}

export function* getPrefecture() {
  try {
    const response = yield call(api.get, "/prefecture/1");

    yield put(PrefectureCreators.readPrefectureSuccess(response.data));

    yield put(PrefectureCreators.failLoadPrefecture(true));
  } catch (err) {
    yield put(PrefectureCreators.failLoadPrefecture(false));
  }
}
