import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "../ducks/auth";
import { signIn, signOut } from "./auth";

import { Types as UserTypes } from "../ducks/user";
import { index, update, changerPassword } from "./user";

import { Types as ProfileTypes } from "../ducks/profile";
import { create, get, updateProfileRequest } from "./profile";

import { Types as AddressTypes } from "../ducks/address";
import { createAddress, updateAddress, getAddress } from "./address";

import { Types as ContactTypes } from "../ducks/contact";
import { createContact, getContact, updateContact } from "./contact";

import { teste } from "./teste";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest("persist/REHYDRATE", teste),

    takeLatest(UserTypes.LOAD_USER_REQUEST, index),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, update),
    takeLatest(UserTypes.CHANGER_PASSWORD_REQUEST, changerPassword),

    takeLatest(ProfileTypes.CREATE_PROFILE_REQUEST, create),
    takeLatest(ProfileTypes.LOAD_PROFILE_REQUEST, get),
    takeLatest(ProfileTypes.UPDATE_PROFILE_REQUEST, updateProfileRequest),

    takeLatest(AddressTypes.CREATE_ADDRESS_REQUEST, createAddress),
    takeLatest(AddressTypes.LOAD_ADDRESS_REQUEST, getAddress),
    takeLatest(AddressTypes.UPDATE_ADDRESS_REQUEST, updateAddress),

    takeLatest(ContactTypes.CREATE_CONTACT_REQUEST, createContact),
    takeLatest(ContactTypes.LOAD_CONTACT_REQUEST, getContact),
    takeLatest(ContactTypes.UPDATE_CONTACT_REQUEST, updateContact)
  ]);
}
