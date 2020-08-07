import { call, put } from "redux-saga/effects";
import { saveAs } from "file-saver";
import api from "../../services/api";
import { Creators as GenereteCreators } from "../ducks/generete";

/*
 *
 * Filtros
 *
 */
export function* generatePdfFilters({ payload }) {
  try {
    const response = yield call(api.post, "/box-filter", payload.box);
    var file = new Blob([response.data], { type: "application/pdf" });
    saveAs(file);
  } catch (err) {}
}

/*
 *
 * Etiquetas
 *
 */

export function* generatePdfHangtag() {
  try {
    const response = yield call(api.get, "/generate_pdf_hang_tags");
    var file = new Blob([response.data], { type: "application/pdf" });
    saveAs(file);
  } catch (err) {}
}

export function* generateHangTagId({ payload }) {
  try {
    const response = yield call(
      api.get,
      `/responsible_all_boxes/${payload.id}`
    );

    yield put(GenereteCreators.generateTagsUniqueBoxSuccess(response.data));
  } catch (err) {}
}

/**
 * Gera o pdf de uma caixa especifica com os familiares
 */
export function* generatePdfUniqueBoxFamilies({ payload }) {
  try {
    const { data } = yield call(
      api.get,
      `/generate_pdf_unique_box_families/${payload.id}`
    );

    yield put(GenereteCreators.generateFamiliesBoxSuccess(data[0]));
  } catch (err) {}
}

export function* generatePdfDiscard() {
  try {
    const response = yield call(api.get, "/generate_pdf_discard");
    yield put(GenereteCreators.generatePdfDiscardSuccess(response.data));
  } catch (err) {}
}

/**
 * Gera o pdf das sintetico
 */
export function* generatePdfSynthetic() {
  try {
    const response = yield call(api.get, "/generate_pdf_synthetic");
    var file = new Blob([response.data], { type: "application/pdf" });

    saveAs(file);
  } catch (err) {}
}
