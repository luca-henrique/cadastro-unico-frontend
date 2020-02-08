import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as AddressCreators } from "../ducks/address_prefecture";

import { toastr } from "react-redux-toastr";

export function* createAddressPrefecture({ payload }) {
  try {
    /**
     * create new adrdess {cep, estado, bairro, rua, numero}
     **/

    const response = yield call(
      api.post,
      "/adrressprefecture",
      payload.address
    );

    yield toastr.success("Endereço atualizado com sucesso.");
  } catch (err) {
    yield toastr.error("Falha", "Preencha os campos");
  }
}

export function* updateAddrressPrefecture({ payload }) {
  try {
    /** 
     Ordem dos atributos { cep, estado, bairro, complemento, rua, num  }
    **/

    const response = yield call(
      api.put,
      "/adrressprefecture/1",
      payload.address
    );

    console.log(response);

    yield toastr.success("Informações atualizadas com sucesso.");
  } catch (err) {
    yield toastr.error("Falha", "Falha ao atualizar as informações pessoais");
  }
}

export function* getAddrressPrefecture() {
  try {
    const response = yield call(api.get, "/adrressprefecture/1");

    console.log(response);
    yield put(AddressCreators.readAddressPrefectureSuccess(response.data));

    yield put(AddressCreators.failLoadAddressPrefecture(true));
  } catch (err) {
    yield put(AddressCreators.failLoadAddressPrefecture(false));
  }
}
