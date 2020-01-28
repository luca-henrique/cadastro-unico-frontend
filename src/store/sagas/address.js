import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as AddressCreators } from "../ducks/address";

import { toastr } from "react-redux-toastr";

export function* createAddress({ payload }) {
  try {
    /**
     * create new adrdess {cep, estado, bairro, rua, numero}
     **/

    const response = yield call(api.post, "/address", payload.address);

    yield put(AddressCreators.createAddressSucess(response.data));

    yield put(AddressCreators.failLoadAddress(true));

    yield toastr.success("Endereço atualizado com sucesso.");
  } catch (err) {
    yield toastr.error("Falha", "Preencha os campos");
  }
}

export function* updateAddress({ payload }) {
  try {
    /** 
     Ordem dos atributos { cep, estado, bairro, complemento, rua, num  }
    **/

    const response = yield call(api.put, "/address/0", payload.address);

    yield put(AddressCreators.loadAddressSucess(response.data));

    yield toastr.success("Informações atualizadas com sucesso.");
  } catch (err) {
    yield toastr.error("Falha", "Falha ao atualizar as informações pessoais");
  }
}

export function* getAddress() {
  try {
    const response = yield call(api.get, "/address/0");

    yield put(AddressCreators.loadAddressSucess(response.data));

    yield put(AddressCreators.failLoadAddress(true));
  } catch (err) {
    yield put(AddressCreators.failLoadAddress(false));
  }
}
