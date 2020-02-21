import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { push } from "connected-react-router";

import AuthActions from "../ducks/auth";

import { Creators as UserCreators } from "../ducks/user";
import { Creators as ProfileCreators } from "../ducks/profile";
import { Creators as AddressCreators } from "../ducks/address";
import { Creators as ContactCreators } from "../ducks/contact";

import { Creators as PrefectureCreators } from "../ducks/prefecture";
import { Creators as PrefectureContactCreators } from "../ducks/contact_prefecture";
import { Creators as PrefectureAddrressCreators } from "../ducks/address_prefecture";

import { actions as toastrActions } from "react-redux-toastr";

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, "authenticate", { email, password });
    localStorage.setItem("@Omni:token", response.data.token);
    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(UserCreators.readUserRequest());

    yield put(ProfileCreators.loadProfileRequest());
    yield put(AddressCreators.loadAddressRequest());
    yield put(ContactCreators.loadContactRequest());

    yield put(PrefectureCreators.readPrefectureRequest());
    yield put(PrefectureContactCreators.readPrefectureContactRequest());
    yield put(PrefectureAddrressCreators.readAddressPrefectureRequest({}));

    yield put(push("/"));
  } catch (err) {
    yield put(
      toastrActions.add({
        title: "Falha no login",
        message:
          "Email/senha errados, entre em contato com a empresa responsavel ou com o administrador."
      })
    );
  }
}

export function* signOut() {
  /**
   * Remover tudo quando sair
   */

  yield put(UserCreators.readUserSuccess({}));

  yield put(ProfileCreators.loadProfileSucess({}));
  yield put(ProfileCreators.failLoadProfile(false));

  yield put(AddressCreators.loadAddressSucess({}));
  yield put(AddressCreators.failLoadAddress(false));

  yield put(ContactCreators.loadContactSuccess({}));
  yield put(ContactCreators.failLoadContact(false));

  yield put(PrefectureCreators.readPrefectureSuccess({}));
  yield put(PrefectureCreators.failLoadPrefecture(false));

  yield put(PrefectureContactCreators.readPrefectureContactSuccess({}));
  yield put(PrefectureContactCreators.failLoadPrefectureContact(false));

  yield put(PrefectureAddrressCreators.readAddressPrefectureSuccess({}));
  yield put(PrefectureAddrressCreators.failLoadAddressPrefecture(false));

  localStorage.removeItem("@Omni:token");
  localStorage.removeItem("@Omni:team");

  yield put(push("/"));
}
