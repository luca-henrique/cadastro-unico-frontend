//Usuario logado

import { call, put } from "redux-saga/effects";

import { toastr } from "react-redux-toastr";

import api from "../../services/api";

import { Creators as UserCreators } from "../ducks/user";

export function* index() {
  try {
    const id = yield call(api.get, "/user/");
    const response = yield call(api.get, `/user/${id.data}`);
    yield put(UserCreators.readUserSuccess(response.data));
  } catch (err) {}
}

export function* update({ payload }) {
  try {
    console.log(payload);
    const response = yield call(api.put, "user/0", payload.user);
    yield put(UserCreators.readUserSuccess(response.data));
  } catch (err) {
    yield toastr.error("Falha", "Falha ao atualizar o email");
  }
}

export function* updateNew({ payload }) {
  try {
    const response = yield call(api.put, `/user_update`, payload.user);
  } catch (err) {
    yield toastr.error("Falha", "Falha ao atualizar o email");
  }
}

export function* destroy({ payload }) {
  try {
    yield call(api.delete, `user/${payload.id}`);

    yield put(UserCreators.readUserRequest());
  } catch (err) {
    yield toastr.error(
      "Falha",
      "Falha ao excluir o funcionário, verifique se o funcionário é um administrador"
    );
  }
}

export function* list() {
  try {
    yield call(api.get, "/users");
  } catch (err) {
    yield toastr.error("Falha", "Falha ao carregar funcionarios");
  }
}

export function* changerPassword({ payload }) {
  try {
    yield call(api.put, "/changer", {
      password: payload.password,
    });
    yield toastr.success("Senha alterada.");
  } catch (err) {
    yield toastr.error("Falha", "Falha ao alterar o password");
  }
}

/**
 *
 *
 *
 *
 *
 *
 *
 */

export function* getUserActive() {
  try {
    const response = yield call(api.get, "/user_active");
    yield put(UserCreators.readUserActiveSuccess(response.data));
  } catch (err) {}
}

export function* changerUserActive({ payload }) {
  try {
    yield call(api.put, "/user_active", payload.account);
    yield toastr.success("Sucesso.", "Alterações feitas com sucesso.");
  } catch (err) {
    yield toastr.error("Falha", "Email já existe");
  }
}
