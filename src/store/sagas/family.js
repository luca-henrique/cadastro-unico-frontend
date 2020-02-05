import { call, put } from "redux-saga/effects";
import { Creators as FamilyCreators } from "../ducks/family";

import api from "../../services/api";

import { toastr } from "react-redux-toastr";

export function* createFamily({ payload }) {
  try {
    console.log(payload);
    const response = yield call(api.post, "/family/", payload.family);
    console.log(response);
  } catch (err) {}
}

export function* getFamilies() {
  try {
    const response = yield call(api.get, "/family");
    put(FamilyCreators.readFamilySuccess(response.data));
  } catch (err) {}
}

export function* updateFamily({ payload }) {
  try {
    console.log(payload.family);
    const response = yield call(
      api.put,
      `/family/${payload.family.id}`,
      payload.family
    );
    console.log(response);
  } catch (err) {}
}

export function* deleteFamily({ payload }) {
  try {
    const response = yield call(
      api.delete,
      `/family/${JSON.stringify(payload.id)}`
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
