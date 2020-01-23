//Usuario logado

import { call } from "redux-saga/effects";

import { toastr } from "react-redux-toastr";

import api from "../../services/api";

export function* index() {
  try {
    const id = yield call(api.get, "/user/");
    const response = yield call(api.get, `/user/${id.data}`);
    localStorage.setItem("user", JSON.stringify(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* update({ payload }) {
  try {
    yield call(api.put, "user/0", payload.user);
  } catch (err) {
    yield toastr.error("Falha", "Falha ao atualizar o email");
  }
}

export function* destroy({ payload }) {
  try {
    yield call(api.delete, `user/${payload.id}`);
  } catch (err) {
    yield toastr.error("Falha", "Falha ao excluir o funcionario");
  }
}

export function* list() {
  try {
    const response = yield call(api.get, "/users");
    console.log(response);
  } catch (err) {
    yield toastr.error("Falha", "Falha ao carregar funcionarios");
  }
}

export function* changerPassword({ payload }) {
  try {
    const response = yield call(api.put, "/changer", {
      password: payload.password
    });
    console.log(response);
  } catch (err) {
    yield toastr.error("Falha", "Falha ao alterar o password");
  }
}
