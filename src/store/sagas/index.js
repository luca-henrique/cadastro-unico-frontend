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

import { Types as FunTypes } from "../ducks/funcionario";
import {
  getFuncionarios,
  createFuncionario,
  deleteFuncionario
} from "./funcionario";

import { Types as BoxTypes } from "../ducks/box";
import { createBox, updateBox, deleteBox, getBoxes } from "./box";

import { Types as PasteTypes } from "../ducks/paste";
import { createPaste, updatePaste, deletePaste, getPastes } from "./paste";

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
    takeLatest(ContactTypes.UPDATE_CONTACT_REQUEST, updateContact),

    takeLatest(FunTypes.LOAD_FUNCIONARIO_REQUEST, getFuncionarios),
    takeLatest(FunTypes.CREATE_FUNCTIONARIO_SUCCESS, createFuncionario),
    takeLatest(FunTypes.DELETE_FUNCIONARIO_SUCCESSS, deleteFuncionario),

    takeLatest(BoxTypes.CREATE_BOX_REQUEST, createBox),
    takeLatest(BoxTypes.UPDATE_BOX_REQUEST, updateBox),
    takeLatest(BoxTypes.DELETE_BOX_REQUEST, deleteBox),
    takeLatest(BoxTypes.LOAD_ALL_BOXES, getBoxes),

    takeLatest(PasteTypes.CREATE_PASTE_REQUEST, createPaste),
    takeLatest(PasteTypes.UPDATE_PASTE_REQUEST, updatePaste),
    takeLatest(PasteTypes.DELETE_PASTE_REQUEST, deletePaste),
    takeLatest(PasteTypes.LOAD_ALL_PASTES, getPastes)
  ]);
}
