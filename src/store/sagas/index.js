import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "../ducks/auth";
import { signIn, signOut } from "./auth";

import { Types as LicenseTypes } from "../ducks/license";
import { verification, requestToken } from "./license";

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
import {
  createBox,
  updateBox,
  deleteBox,
  getBox,
  getBoxes,
  getPastesBox,
  getFamilyBox
} from "./box";

import { Types as PasteTypes } from "../ducks/paste";
import { createPaste, updatePaste, deletePaste, getPastes } from "./paste";

import { Types as PrefectureTypes } from "../ducks/prefecture";
import {
  createPrefecture,
  updatePrefecture,
  getPrefecture
} from "./prefecture";

import { Types as AddrressPrefectureTypes } from "../ducks/address_prefecture";
import {
  createAddressPrefecture,
  updateAddrressPrefecture,
  getAddrressPrefecture
} from "./address_prefecture";

import { Types as ContactPrefectureTypes } from "../ducks/contact_prefecture";
import {
  createContactPrefecture,
  readContactPrefecture,
  updateContactPrefecture
} from "./contact_prefecture";

import { Types as FamilyTypes } from "../ducks/family";
import {
  createFamily,
  deleteFamily,
  updateFamily,
  getFamilies
} from "./family";

import { Types as LogTypes } from "../ducks/log";
import { getLogs } from "./log";

import { teste } from "./teste";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest("persist/REHYDRATE", teste),

    takeLatest(LicenseTypes.LICENSE_VERIFICATION_TOKEN_REQUEST, verification),
    takeLatest(LicenseTypes.LICENSE_ACCESS_TOKEN_REQUEST, requestToken),

    takeLatest(LogTypes.READ_LOG_REQUEST, getLogs),

    takeLatest(UserTypes.READ_USER_REQUEST, index),
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

    takeLatest(PrefectureTypes.CREATE_PREFECTURE_REQUEST, createPrefecture),
    takeLatest(PrefectureTypes.READ_PREFECTURE_REQUEST, getPrefecture),
    takeLatest(PrefectureTypes.UPDATE_PREFECTURE_REQUEST, updatePrefecture),

    takeLatest(
      AddrressPrefectureTypes.CREATE_ADDRESS_PREFECTURE_REQUEST,
      createAddressPrefecture
    ),
    takeLatest(
      AddrressPrefectureTypes.UPDATE_ADDRESS_PREFECTURE_REQUEST,
      updateAddrressPrefecture
    ),
    takeLatest(
      AddrressPrefectureTypes.READ_ADDRESS_PREFECTURE_REQUEST,
      getAddrressPrefecture
    ),

    takeLatest(
      ContactPrefectureTypes.CREATE_CONTACT_PREFECTURE_REQUEST,
      createContactPrefecture
    ),
    takeLatest(
      ContactPrefectureTypes.UPDATE_CONTACT_PREFECTURE_REQUEST,
      updateContactPrefecture
    ),
    takeLatest(
      ContactPrefectureTypes.READ_CONTACT_PREFECTURE_REQUEST,
      readContactPrefecture
    ),

    takeLatest(FunTypes.LOAD_FUNCIONARIO_REQUEST, getFuncionarios),
    takeLatest(FunTypes.CREATE_FUNCTIONARIO_SUCCESS, createFuncionario),
    takeLatest(FunTypes.DELETE_FUNCIONARIO_SUCCESSS, deleteFuncionario),

    takeLatest(BoxTypes.CREATE_BOX_REQUEST, createBox),
    takeLatest(BoxTypes.UPDATE_BOX_REQUEST, updateBox),
    takeLatest(BoxTypes.DELETE_BOX_REQUEST, deleteBox),
    takeLatest(BoxTypes.SELECTED_BOX_REQUEST, getBox),
    takeLatest(BoxTypes.READ_BOXES_REQUEST, getBoxes),
    takeLatest(BoxTypes.READ_PASTES_BOX_REQUEST, getPastesBox),
    takeLatest(BoxTypes.READ_FAMILY_BOX_REQUEST, getFamilyBox),

    takeLatest(PasteTypes.CREATE_PASTE_REQUEST, createPaste),
    takeLatest(PasteTypes.UPDATE_PASTE_REQUEST, updatePaste),
    takeLatest(PasteTypes.DELETE_PASTE_REQUEST, deletePaste),
    takeLatest(PasteTypes.READ_PASTES_REQUEST, getPastes),

    takeLatest(FamilyTypes.CREATE_FAMILY_REQUEST, createFamily),
    takeLatest(FamilyTypes.UPDATE_FAMILY_REQUEST, updateFamily),
    takeLatest(FamilyTypes.DELETE_FAMILY_REQUEST, deleteFamily),
    takeLatest(FamilyTypes.READ_FAMILY_REQUEST, getFamilies)
  ]);
}
