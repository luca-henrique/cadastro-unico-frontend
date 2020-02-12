import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as ContactCreators } from "../ducks/contact_prefecture";

import { toastr } from "react-redux-toastr";

export function* createContactPrefecture({ payload }) {
  try {
    const response = yield call(
      api.post,
      "/contactprefecture",
      payload.contact
    );

    yield put(ContactCreators.createPrefectureContactSuccess(response.data));

    yield put(ContactCreators.failLoadPrefectureContact(true));

    yield toastr.success("Contato da prefeitura atualizado com sucesso.");
  } catch (err) {
    yield put(ContactCreators.failLoadPrefectureContact(false));
    yield toastr.error("Falha", "Preencha o campo");
  }
}

export function* readContactPrefecture() {
  try {
    const response = yield call(api.get, "/contactprefecture/1");

    yield put(ContactCreators.readPrefectureContactSuccess(response.data));

    yield put(ContactCreators.failLoadPrefectureContact(true));
  } catch (err) {
    yield put(ContactCreators.failLoadPrefectureContact(false));
  }
}

export function* updateContactPrefecture({ payload }) {
  try {
    const response = yield call(
      api.put,
      "/contactprefecture/1",
      JSON.stringify(payload.contact)
    );

    yield put(ContactCreators.readPrefectureContactSuccess(response.data));

    yield toastr.success("Informações atualizadas com sucesso.");
  } catch (err) {
    yield toastr.error("Falha", "Falha ao atualizar as informações pessoais");
  }
}
