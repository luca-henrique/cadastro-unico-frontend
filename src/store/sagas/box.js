import { call, put } from "redux-saga/effects";
import { Creators as BoxCreators } from "../ducks/box";

import api from "../../services/api";

import { toastr } from "react-redux-toastr";

export function* createBox({ payload }) {
  try {
    const response = yield call(api.post, "/box", payload.box);
  } catch (err) {}
}

export function* updateBox({ payload }) {
  try {
    const response = yield call(api.put, `/box/${payload.box.id}`, payload.box);
  } catch (err) {}
}

export function* deleteBox({ payload }) {
  try {
    const response = yield call(api.delete, `/box/${payload.id}`);
  } catch (err) {}
}

export function* getBoxes() {
  try {
    const response = yield call(api.get, "/box/");

    yield put(BoxCreators.loadAllBoxes(response.data));
  } catch (err) {}
}
