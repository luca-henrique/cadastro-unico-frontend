import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as ProfileCreators } from "../ducks/profile";

import { toastr } from "react-redux-toastr";

export function* create({ payload }) {
  try {
    /**
     * Criar novo profile
     * LocalStorage (profile) => salva as informações no local storage para ser recuperado
     * LocalStorage (exist) => se foi salvo vai para true para não executar essa função novamente
     */

    const response = yield call(api.post, "/profile", payload.profile);

    localStorage.setItem("profile", JSON.stringify(response.data));
    localStorage.setItem("exist", true);

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

    localStorage.setItem("profile", JSON.stringify(response.data));
    localStorage.setItem("exist", true);

    yield toastr.success("", "Informações atualizadas com sucesso.");
  } catch (err) {
    yield toastr.error("Falha", "Falha ao atualizar as informações pessoais");
  }
}

export function* get() {
  try {
    const id = yield call(api.get, "/user");
    const response = yield call(api.get, `/profile/${id.data}`);

    localStorage.setItem("profile", JSON.stringify(response.data));
    localStorage.setItem("exist", true);

    yield toastr.success("", "Todas as informações do usuario carregadas");
  } catch (err) {
    localStorage.setItem("profile", null);
    yield toastr.error("Erro", "Usuario não tem todas as informações");
  }
}

export function* list() {}
