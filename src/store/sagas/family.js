import { call, put } from "redux-saga/effects";

import { Creators as FamilyCreators } from "../ducks/family";

import api from "../../services/api";

import { toastr } from "react-redux-toastr";

export function* createFamily({ payload }) {
  try {
    const { data } = yield call(api.post, "/family/", payload.family);
    console.log(data);
    yield put(FamilyCreators.createFamilySuccess(data));
    toastr.success("Familiar criado.");
  } catch (err) {
    toastr.error("Erro ao criar um familiar.");
  }
}

export function* updateFamily({ payload }) {
  try {
    yield call(api.put, `/family/${payload.family.id}`, payload.family);
    yield put(FamilyCreators.updateFamilySuccess(payload.family));
    toastr.success("Familiar atualizado.");
  } catch (err) {
    toastr.error("Erro ao atualizar um familiar.");
  }
}

export function* deleteFamily({ payload }) {
  try {
    yield call(api.delete, `/family/${payload.id}`);
    yield put(FamilyCreators.deleteFamilySuccess(payload.id));
    toastr.error("Familiar excluido.");
  } catch (err) {}
}

export function* readGroupFamilies({ payload }) {
  try {
    const { data } = yield call(api.get, `/group/${payload.id}`);
    yield put(FamilyCreators.readGroupFamiliarSuccess(data));
  } catch (err) {}
}
