import { call, put } from "redux-saga/effects";
import { Creators as BoxCreators } from "../ducks/box";

import api from "../../services/api";

import { toastr } from "react-redux-toastr";

export function* createBox({ payload }) {
  try {
    const response = yield call(api.post, "/box", payload.box);
    console.log(response);
    toastr.success("Caixa criada");
  } catch (err) {}
}

export function* updateBox({ payload }) {
  try {
    const response = yield call(
      api.put,
      `/box/${payload.box.id}`,
      JSON.stringify(payload.box)
    );
    console.log(response);
  } catch (err) {}
}

export function* deleteBox({ payload }) {
  try {
    const response = yield call(api.delete, `/box/${payload.id}`);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

export function* getBoxes() {
  try {
    const response = yield call(api.get, "/box/");
    console.log(response);
    yield put(BoxCreators.readBoxesSuccess(response.data));
  } catch (err) {}
}

export function* getPastesBox({ payload }) {
  try {
    const response = yield call(api.get, `/pastes/${payload.id}`);

    yield put(BoxCreators.readPastesSuccess(response.data));
  } catch (err) {}
}

export function* getFamilyBox({ payload }) {
  try {
    const response = yield call(api.get, `/families/${payload.id}`);

    yield put(BoxCreators.readFamiliesSuccess(response.data));
  } catch (err) {}
}
