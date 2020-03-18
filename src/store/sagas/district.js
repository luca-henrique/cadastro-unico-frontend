/* eslint-disable no-unused-vars */
import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as DistrictCreators } from "../ducks/district";

import { toastr } from "react-redux-toastr";

export function* createDistrict({ payload }) {
  try {
    const response = yield call(api.post, "/district", payload.district);

    yield put(DistrictCreators.createDistrictSuccess(response.data));

    yield put(DistrictCreators.readDistrictRequest());

    yield toastr.success("Bairro criado com sucesso.");
  } catch (err) {
    yield toastr.error("Falha", "Falha ao criar bairro.");
  }
}

export function* getDistricts() {
  try {
    const response = yield call(api.get, "/district");

    yield put(DistrictCreators.readDistrictSuccess(response.data));
  } catch (err) {}
}

export function* updateDistrict({ payload }) {
  try {
    // eslint-disable-next-line no-unused-vars
    const response = yield call(
      api.put,
      `/district/${payload.district.id}`,
      payload.district
    );

    yield put(DistrictCreators.readDistrictRequest());

    yield toastr.success("Nome do bairro atualizado com sucesso..");
  } catch (err) {
    yield toastr.error("Falha ao atualizar o nome do bairro");
  }
}

export function* deleteDistrict({ payload }) {
  try {
    const response = yield call(api.delete, `/district/${payload.id}`);

    yield toastr.success("Bairro excluido");

    yield put(DistrictCreators.readDistrictRequest());
  } catch (err) {
    yield toastr.error("Falha ao excluir");
  }
}
