import { call, put } from "redux-saga/effects";

import { Creators as FamilyCreators } from "../ducks/family";
import { Creators as BoxCreators } from "../ducks/box";

import { store } from "../index";

import api from "../../services/api";

import { toastr } from "react-redux-toastr";

export function* createFamily({ payload }) {
  try {
    const { data } = yield call(api.post, "/family/", payload.family);
    console.log(data);
    yield put(FamilyCreators.createFamilySuccess(data));
    if (data.tipo === "RESPONSAVEL") {
      const boxes = store.getState().box.boxes;
      const box = boxes.find((element) => element.id === payload.family.box_id);
      box.person_id = data.id;
      box.responsible = data;
      yield put(BoxCreators.updateBoxSuccess(box));
    }
    toastr.success("Familiar criado.");
  } catch (err) {
    toastr.error("Erro ao criar um familiar.");
  }
}

export function* updateFamily({ payload }) {
  try {
    const { family } = payload;

    yield call(api.put, `/family/${family.id}`, family);

    yield put(FamilyCreators.updateFamilySuccess(payload.family));
    toastr.success("Familiar atualizado.");
  } catch (err) {
    toastr.error("Erro ao atualizar um familiar.");
  }
}

export function* deleteFamily({ payload }) {
  try {
    yield call(api.delete, `/family/${payload.family.id}`);
    yield put(FamilyCreators.deleteFamilySuccess(payload.family.id));
    if (payload.family.tipo === "RESPONSAVEL") {
      const boxes = store.getState().box.boxes;
      const box = boxes.find((element) => element.id === payload.family.box_id);
      box.person_id = null;
      box.responsible = null;
      yield put(BoxCreators.updateBoxSuccess(box));
    }
    toastr.error("Familiar excluido.");
  } catch (err) {}
}

export function* readGroupFamilies({ payload }) {
  try {
    const { data } = yield call(api.get, `/group/${payload.id}`);
    yield put(FamilyCreators.readGroupFamiliarSuccess(data));
  } catch (err) {}
}
