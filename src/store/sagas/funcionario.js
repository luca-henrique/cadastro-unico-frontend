import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as FuncionarioCreators } from "../ducks/funcionario";

import { toastr } from "react-redux-toastr";

export function* getFuncionarios() {
  try {
    const response = yield call(api.get, "/users/");

    yield put(FuncionarioCreators.loadFuncionarioSuccess(response.data));
  } catch (err) {}
}

export function* createFuncionario({ payload }) {
  try {
    const response = yield call(api.post, "/user/", payload.funcionario);
    console.log(response);
  } catch (err) {}
}

export function* deleteFuncionario({ payload }) {
  try {
    const id = JSON.stringify(payload.funcionario.id);
    yield call(api.delete, `/user/${id}`);
  } catch (err) {
    console.log(err);
  }
}
