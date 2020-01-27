import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as AddressCreators } from "../ducks/address";

import { toastr } from "react-redux-toastr";

export function* createAddress({ payload }) {
  try {
    /**
     * create new adrdess {cep, estado, bairro, rua, numero}
     **/

    console.log(payload.address);

    const response = yield call(api.post, "/address", payload.address);

    console.log(response.data);

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
     Ordem dos atributos {  }
    **/

    const { cep, estado, bairro, complemento, rua, num } = payload.profile;

    const response = yield call(api.put, "/address/0", {
      cep,
      estado,
      bairro,
      complemento,
      rua,
      num
    });

    yield put(AddressCreators.loadAddressSucess(response.data));
    yield toastr.success("", "Informações atualizadas com sucesso.");
  } catch (err) {
    yield toastr.error("Falha", "Falha ao atualizar as informações pessoais");
  }
}
/*
export function* get() {
  try {
    const id = yield call(api.get, "/user");
    const response = yield call(api.get, `/profile/${id.data}`);

    yield put(ProfileCreators.loadProfileSucess(response.data));

    yield put(ProfileCreators.failLoadProfile(true));
    yield toastr.success("", "Todas as informações do usuario carregadas");
  } catch (err) {
    yield put(ProfileCreators.failLoadProfile(false));
    yield toastr.error("Erro", "Usuario não tem todas as informações");
  }
}
*/
