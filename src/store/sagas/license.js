import { call, put } from "redux-saga/effects";
import { Creators as LicenseCreators } from "../ducks/license";

import api from "../../services/api";

export function* verification({ payload }) {
  try {
    const response = yield call(api.put, "/token", JSON.parse(payload));

    console.log(response);

    yield put(LicenseCreators.tokenAccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
