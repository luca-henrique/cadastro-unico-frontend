//Usuario logado

import { call, put } from "redux-saga/effects";

import { toastr } from "react-redux-toastr";

import api from "../../services/api";

import { Creators as UserCreators } from "../ducks/user";

export function* readUserJoined() {
  try {
    const { data } = yield call(api.get, "/user-joined");

    yield put(UserCreators.readUserJoinedSuccess(data));
  } catch (error) {}
}

export function* createUser({ payload }) {
  try {
    const respose = yield call(api.post, "/user", payload.user);
    yield put(UserCreators.createUserSuccess(respose.data));
    toastr.success("Usuário criado.");
  } catch (error) {
    toastr.error("Erro ao criar usuário.");
  }
}

export function* updateUser({ payload }) {
  try {
    yield call(api.put, `/user/${payload.user.id}`, payload.user);
    yield put(UserCreators.updateUserSuccess(payload.user));
    toastr.success("Usuário atualizado.");
  } catch (error) {
    toastr.error("Erro ao criar atualizado.");
  }
}

export function* readUser() {
  try {
    const { data } = yield call(api.get, "/user");
    yield put(UserCreators.readUserSuccess(data));
  } catch (error) {}
}

export function* deleteUser({ payload }) {
  try {
    yield call(api.delete, `/user/${payload.id}`);
    yield put(UserCreators.deleteUserSuccess(payload.id));
    toastr.error("Usuário excluido.");
  } catch (error) {}
}

export function* changerPasswordUserJoined({ payload }) {
  try {
    yield call(api.put, `/changer-password`, payload.password);
    toastr.success("Senha alterada.");
  } catch (error) {}
}
