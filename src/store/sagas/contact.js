import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as ContactCreators } from "../ducks/contact";

import { toastr } from "react-redux-toastr";

export function* createContact({ payload }) {
  try {
    /**
     * create new adrdess {cep, estado, bairro, rua, numero}
     **/

    const response = yield call(api.post, "/contact", payload.contact);

    yield put(ContactCreators.createContactSuccess(response.data));

    yield put(ContactCreators.failLoadContact(true));

    yield toastr.success("Contato atualizado com sucesso.");
  } catch (err) {
    yield toastr.error("Falha", "Preencha o campo");
  }
}

export function* getContact() {
  try {
    const response = yield call(api.get, "/contact/0");

    yield put(ContactCreators.loadContactSuccess(response.data));

    yield put(ContactCreators.failLoadContact(true));
  } catch (err) {
    yield put(ContactCreators.failLoadContact(false));
  }
}

export function* updateContact({ payload }) {
  try {
    const response = yield call(api.put, "/contact/0", payload.contact);

    yield put(ContactCreators.loadContactSuccess(response.data));

    yield toastr.success("Informações atualizadas com sucesso.");
  } catch (err) {
    yield toastr.error("Falha", "Falha ao atualizar as informações pessoais");
  }
}
