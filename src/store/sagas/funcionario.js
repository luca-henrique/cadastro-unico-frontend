import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as FuncionarioCreators } from "../ducks/funcionario";

import { toastr } from "react-redux-toastr";

export function* getFuncionarios() {
  try {
    const response = yield call(api.get, "/users/");
    console.log(response);
    yield put(FuncionarioCreators.loadFuncionarioSuccess(response.data));
  } catch (err) {}
}
