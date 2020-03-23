import { call, put } from "redux-saga/effects";

import { Creators as FamilyCreators } from "../ducks/family";

import api from "../../services/api";

import { toastr } from "react-redux-toastr";

export function* createFamily({ payload }) {
  try {
    // eslint-disable-next-line no-unused-vars
    const response = yield call(api.post, "/family/", payload.family);
    // eslint-disable-next-line no-unused-vars

    toastr.success("Familiar criado.");
  } catch (err) {
    toastr.error("Erro ao criar um familiar.");
  }
}

export function* getFamilies() {
  try {
    const response = yield call(api.get, "/family");

    yield put(FamilyCreators.readFamilySuccess(response.data));
  } catch (err) {}
}

export function* updateFamily({ payload }) {
  try {
    // eslint-disable-next-line no-unused-vars
    const response = yield call(
      api.put,
      `/family/${payload.family.id}`,
      payload.family
    );
    // eslint-disable-next-line no-unused-vars

    toastr.success("Familiar atualizado.");
  } catch (err) {
    toastr.error("Erro ao atualizar um familiar.");
  }
}

export function* deleteFamily({ payload }) {
  try {
    // eslint-disable-next-line no-unused-vars
    const response = yield call(
      api.delete,
      `/family/${JSON.stringify(payload.id)}`
    );

    // eslint-disable-next-line no-unused-vars
  } catch (err) {}
}
