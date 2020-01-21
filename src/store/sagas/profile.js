import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as ProfileCreators } from "../ducks/profile";

import { actions as toastrActions } from "react-redux-toastr";

export function* index() {
  try {
    const id = yield call(api.get, "/users/");
    const response = yield call(api.get, `/profile/${id.data}`);
    yield put(ProfileCreators.loadProfileSucess(response.data));
  } catch (err) {
    console.log(err);
  }
}
