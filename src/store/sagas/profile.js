import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as ProfileCreators } from "../ducks/profile";

import { actions as toastrActions, toastr } from "react-redux-toastr";

export function* create({ payload }) {
  try {
    console.log("mostra");
    console.log(payload.profile);
    const response = yield call(api.post, "/profile", payload.profile);
    localStorage.setItem("profile", JSON.stringify(response.data));
    //yield put(ProfileCreators.createProfileSucess(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* updateProfileRequest({ payload }) {
  try {
    const response = yield call(api.put, "/profile/0", payload.profile);
    console.log(response);
  } catch (err) {
    yield toastr.error("Falha", "Falha ao atualizar as informações pessoais");
  }
}

export function* get() {
  try {
    const id = yield call(api.get, "/user");
    const response = yield call(api.get, `/profile/${id.data}`);
    yield put(ProfileCreators.loadProfileSucess(response.data));
    localStorage.setItem("profile", JSON.stringify(response.data));
    yield put(ProfileCreators.failLoadProfile(true));
  } catch (err) {
    yield put(ProfileCreators.failLoadProfile(false));
    localStorage.setItem("profile", null);
    yield toastr.error("Erro", "Usuario não tem todas as informações");
  }
}

export function* list() {}
