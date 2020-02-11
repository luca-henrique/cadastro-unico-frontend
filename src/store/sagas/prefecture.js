import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as PrefectureCreators } from "../ducks/prefecture";

import { toastr } from "react-redux-toastr";

export function* createPrefecture({ payload }) {
  try {
    console.log("Payload com as informações para criar");
    console.log(payload);
    const response = yield call(api.post, "/prefecture", payload.prefecture);

    console.log("resposta do back end");
    console.log(response);

    yield put(PrefectureCreators.createPrefectureSuccess(response.data));

    yield put(PrefectureCreators.failLoadPrefecture(true));
  } catch (err) {
    yield toastr.error("Falha", "Preencha os campos");
  }
}

export function* updatePrefecture({ payload }) {
  try {
    console.log("Payload com as informações para atualizar");
    console.log(payload);
    const response = yield call(
      api.put,
      `/prefecture/${payload.prefecture.id}`,
      payload.prefecture
    );
    console.log("resposta do back end");
    console.log(response);
    yield put(PrefectureCreators.readPrefectureSuccess(response.data));
  } catch (err) {
    yield toastr.error("Falha", "Falha ao atualizar as informações.");
  }
}

export function* getPrefecture() {
  try {
    const response = yield call(api.get, "/prefecture/1");
    console.log(response);
    yield put(PrefectureCreators.readPrefectureSuccess(response.data));

    yield put(PrefectureCreators.failLoadPrefecture(true));
  } catch (err) {
    yield put(PrefectureCreators.failLoadPrefecture(false));
  }
}
