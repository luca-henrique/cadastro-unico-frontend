import { call, put } from "redux-saga/effects";
import { Creators as GeneratorCreators } from "../ducks/generator";

import api from "../../services/api";

export function* etiquetas() {
  try {
    // eslint-disable-next-line no-unused-vars
    const response = yield call(api.get, "/etiquetas");

    yield put(GeneratorCreators.generatorPdfEtiquetasSuccess(response.data));
  } catch (err) {}
}

export function* descartes() {
  try {
    const response = yield call(api.get, "/descartes");
    yield put(GeneratorCreators.generatorPdfDescartesSuccess(response.data));
  } catch (err) {}
}

export function* listBoxesFamilies() {
  try {
    const response = yield call(api.get, "/box");

    yield put(GeneratorCreators.generatorPdfTodosSuccess(response.data));
  } catch (err) {}
}
