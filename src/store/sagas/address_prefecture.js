import { call, put } from "redux-saga/effects";

import { Creators as AddressCreators } from "../ducks/address_prefecture";

import api from "../../services/api";

import { toastr } from "react-redux-toastr";

export function* createAddressPrefecture({ payload }) {
  try {
    const response = yield call(
      api.post,
      "/adrressprefecture",
      payload.address
    );

    yield put(AddressCreators.readAddressPrefectureSuccess(response.data));
    yield put(AddressCreators.failLoadAddressPrefecture(true));
    yield toastr.success("O endereço da prefeitura foi adicionado.");
  } catch (err) {
    yield toastr.error("Falha", "Preencha os campos");
  }
}

export function* updateAddrressPrefecture({ payload }) {
  try {
    const response = yield call(
      api.put,
      "/adrressprefecture/1",
      payload.address
    );

    yield put(AddressCreators.readAddressPrefectureSuccess(response.data));
    yield put(AddressCreators.failLoadAddressPrefecture(true));
    yield toastr.success("Endereço da prefeitura atualizado.");
  } catch (err) {
    yield toastr.error("Falha", "Falha ao atualizar o endereço");
  }
}

export function* getAddrressPrefecture() {
  try {
    const response = yield call(api.get, "/adrressprefecture/1");

    yield put(AddressCreators.readAddressPrefectureSuccess(response.data));

    yield put(AddressCreators.failLoadAddressPrefecture(true));
  } catch (err) {
    yield put(AddressCreators.failLoadAddressPrefecture(false));
  }
}
