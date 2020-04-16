import { call, put } from "redux-saga/effects";
import { Creators as GeneratorCreators } from "../ducks/generator";

import { saveAs } from "file-saver";

import api from "../../services/api";

/**
 * Gera o pdf das caixas e familiares [tudo]
 */
export function* generatePdfRelationShipBoxFamilies() {
  try {
    const response = yield call(
      api.get,
      "/generate_pdf_relationship_box_family"
    );
    var file = new Blob([response.data], { type: "application/pdf" });

    saveAs(file);
  } catch (err) {}
}

/**
 * Gera o pdf das etiquetas
 */
export function* generatePdfHangTags() {
  try {
    const response = yield call(api.get, "/generate_pdf_hang_tags");
    var file = new Blob([response.data], { type: "application/pdf" });

    saveAs(file);
  } catch (err) {}
}

/**
 * Gera o pdf das sintetico
 */
export function* generatePdfSintetico() {
  try {
    const response = yield call(api.get, "/generate_pdf_boxes_responsible");
    var file = new Blob([response.data], { type: "application/pdf" });

    saveAs(file);
  } catch (err) {}
}

/**
 * Gera o pdf descartes
 */
export function* generatePdfDiscard() {
  try {
    const response = yield call(api.get, "/generate_pdf_discard");
    yield put(GeneratorCreators.generatePdfDiscardSuccess(response.data));
  } catch (err) {}
}

/**
 * Gera o pdf districts
 */
export function* generatePdfDistricts() {
  try {
    const response = yield call(api.get, "/generate_pdf_districts");
  } catch (err) {}
}

/**
 * Gera o pdf de uma caixa especifica com os familiares
 */
export function* generatePdfUniqueBoxFamilies({ payload }) {
  try {
    console.log(payload);
    const response = yield call(
      api.get,
      `/generate_pdf_unique_box_families/${payload.box_id}`
    );
    yield put(
      GeneratorCreators.GeneratePdfUniqueBoxFamiliesSuccess(response.data[0])
    );
  } catch (err) {}
}
