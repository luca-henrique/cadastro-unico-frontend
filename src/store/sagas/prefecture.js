import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as PrefectureCreators } from "../ducks/prefecture";

import { toastr } from "react-redux-toastr";

export function* createPrefecture({ payload }) {
  try {
    console.log(payload);
    const response = yield call(api.post, "/prefecture", payload.prefecture);

    yield put(PrefectureCreators.createPrefectureSuccess(response.data));

    yield put(PrefectureCreators.failLoadPrefecture(true));
  } catch (err) {
    yield toastr.error("Falha", "Preencha os campos");
  }
}

export function* updatePrefecture({ payload }) {
  try {
    console.log("Aqui");
    console.log(payload.prefecture);
    const response = yield call(
      api.put,
      `/prefecture/${payload.prefecture.id}`,
      JSON.stringify(payload.prefecture)
    );
    console.log(response);
    yield put(PrefectureCreators.readPrefectureSuccess(response.data));
  } catch (err) {
    yield toastr.error(
      "Falha",
      "Falha ao carregar as informações da prefeitura"
    );
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
