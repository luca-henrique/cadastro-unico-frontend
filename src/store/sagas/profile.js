import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as ProfileCreators } from "../ducks/profile";

import { toastr } from "react-redux-toastr";

export function* create({ payload }) {
  try {
    /**
     * Criar novo profile
     */

    console.log(payload);
    const response = yield call(
      api.post,
      "/profile",
      JSON.stringify(payload.profile)
    );

    //yield put(ProfileCreators.loadProfileSucess(response.data));

    yield toastr.success("", "Informações atualizadas com sucesso.");
  } catch (err) {
    yield toastr.error(
      "Falha",
      "Preencha todos os campos para atulizar as informações do usuario"
    );
  }
}

export function* updateProfileRequest({ payload }) {
  try {
    const response = yield call(api.put, "/profile/0", payload.profile);

    yield put(ProfileCreators.loadProfileSucess(response.data));
    yield toastr.success("", "Informações atualizadas com sucesso.");
  } catch (err) {
    yield toastr.error("Falha", "Falha ao atualizar as informações pessoais");
  }
}

export function* get() {
  try {
    const id = yield call(api.get, "/user");
    const response = yield call(api.get, `/profile/${id.data}`);

    yield put(ProfileCreators.loadProfileSucess(response.data));

    yield put(ProfileCreators.failLoadProfile(true));
    yield toastr.success("", "Todas as informações do usuario carregadas");
  } catch (err) {
    yield put(ProfileCreators.failLoadProfile(false));
    yield toastr.error("Erro", "Usuario não tem todas as informações");
  }
}

export function* list() {}
