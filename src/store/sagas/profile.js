import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as ProfileCreators } from "../ducks/profile";

import { toastr } from "react-redux-toastr";

export function* create({ payload }) {
  try {
    /**
     * Criar novo profile
     */

    const response = yield call(api.post, "/profile", payload.profile);

    yield put(ProfileCreators.loadProfileSucess(response.data));
    yield put(ProfileCreators.failLoadProfile(true));
    yield toastr.success("Informações atualizadas com sucesso.");
  } catch (err) {
    yield toastr.error(
      "Existe informações duplicadas que estão gerando conflito"
    );
  }
}

export function* updateProfileRequest({ payload }) {
  try {
    /**
     * Ordem dos atributos { nome, cpf, cargo }
     */
    const { cpf, nome, cargo } = payload.profile;

    const response = yield call(api.put, "/profile/0", { cpf, nome, cargo });
    yield put(ProfileCreators.failLoadProfile(true));
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
    yield toastr.success("Todas as informações do usuario carregadas");
  } catch (err) {
    yield put(ProfileCreators.failLoadProfile(false));
    yield toastr.error("Erro", "Usuario não tem todas as informações");
  }
}

export function* list() {}
