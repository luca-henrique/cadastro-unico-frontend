import { call, put } from "redux-saga/effects";
import { Creators as LogCreators } from "../ducks/log";

import api from "../../services/api";

export function* getLogs() {
  try {
    const response = yield call(api.get, "/log");

    console.log(response.data[0]);
    console.log(response.data);

    yield put(LogCreators.readLogSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
