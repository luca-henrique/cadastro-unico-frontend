import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "../ducks/auth";
import { signIn, signOut } from "./auth";

import { Types as LicenseTypes } from "../ducks/license";
import { checkToken, requestToken } from "./license";

import { Types as UserTypes } from "../ducks/user";
import {
  index,
  update,
  changerPassword,
  getUserActive,
  changerUserActive,
} from "./user";

import { Types as FunTypes } from "../ducks/funcionario";
import {
  getFuncionarios,
  createFuncionario,
  deleteFuncionario,
} from "./funcionario";

import { Types as BoxTypes } from "../ducks/box";
import {
  createBox,
  updateBox,
  deleteBox,
  getBoxes,
  getFamilyBox,
  getBoxSize,
} from "./box";

import { Types as PrefectureTypes } from "../ducks/prefecture";
import {
  createPrefecture,
  updatePrefecture,
  getPrefecture,
} from "./prefecture";

import { Types as AddrressPrefectureTypes } from "../ducks/address_prefecture";
import {
  createAddressPrefecture,
  updateAddrressPrefecture,
  getAddrressPrefecture,
} from "./address_prefecture";

import { Types as ContactPrefectureTypes } from "../ducks/contact_prefecture";
import {
  createContactPrefecture,
  readContactPrefecture,
  updateContactPrefecture,
} from "./contact_prefecture";

import { Types as FamilyTypes } from "../ducks/family";
import {
  createFamily,
  deleteFamily,
  updateFamily,
  getFamilies,
} from "./family";

import { Types as LogTypes } from "../ducks/log";
import { getLogs } from "./log";

import { Types as GeneratorTypes } from "../ducks/generator";
import {
  generatePdfRelationShipBoxFamilies,
  generatePdfHangTags,
  generatePdfSintetico,
  generatePdfUniqueBoxFamilies,
  generatePdfDiscard,
  generatesearchAllFamiliesUniqueBox,
} from "./generator";

import { teste } from "./teste";

import { Types as DistrictTypes } from "../ducks/district";
import {
  createDistrict,
  getDistricts,
  updateDistrict,
  deleteDistrict,
} from "./district";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest("persist/REHYDRATE", teste),

    takeLatest(LicenseTypes.TOKEN_ACCESS_REQUEST, requestToken),
    takeLatest(LicenseTypes.CHECK_ACCESS_TOKEN, checkToken),

    takeLatest(LogTypes.READ_LOG_REQUEST, getLogs),

    takeLatest(UserTypes.READ_USER_REQUEST, index),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, update),
    takeLatest(UserTypes.READ_USER_ACTIVE_REQUEST, getUserActive),
    takeLatest(UserTypes.CHANGER_PASSWORD_REQUEST, changerPassword),
    takeLatest(UserTypes.UPDATE_USER_ACTIVE_REQUEST, changerUserActive),

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
    takeLatest(BoxTypes.READ_BOXES_REQUEST, getBoxes),
    takeLatest(BoxTypes.READ_FAMILY_BOX_REQUEST, getFamilyBox),

    takeLatest(BoxTypes.SIZE_BOX_REQUEST, getBoxSize),

    takeLatest(FamilyTypes.CREATE_FAMILY_REQUEST, createFamily),
    takeLatest(FamilyTypes.UPDATE_FAMILY_REQUEST, updateFamily),
    takeLatest(FamilyTypes.DELETE_FAMILY_REQUEST, deleteFamily),
    takeLatest(FamilyTypes.READ_FAMILY_REQUEST, getFamilies),

    takeLatest(DistrictTypes.CREATE_DISTRICT_REQUEST, createDistrict),
    takeLatest(DistrictTypes.UPDATE_DISTRICT_REQUEST, updateDistrict),
    takeLatest(DistrictTypes.DELETE_DISTRICT_REQUEST, deleteDistrict),
    takeLatest(DistrictTypes.READ_DISTRICT_REQUEST, getDistricts),

    takeLatest(
      GeneratorTypes.GENERATE_PDF_RELATIONSHIP_BOX_FAMILIES_REQUEST,
      generatePdfRelationShipBoxFamilies
    ),

    takeLatest(
      GeneratorTypes.GENERATE_PDF_HANG_TAGS_REQUEST,
      generatePdfHangTags
    ),

    takeLatest(
      GeneratorTypes.GENERATE_PDF_SINTETICO_REQUEST,
      generatePdfSintetico
    ),
    takeLatest(
      GeneratorTypes.GENERETE_FAMILIES_BOX_REQUEST,
      generatePdfUniqueBoxFamilies
    ),
    takeLatest(GeneratorTypes.GENERATE_PDF_DISCARD_REQUEST, generatePdfDiscard),

    takeLatest(
      GeneratorTypes.GENERATE_PDF_TAG_UNIQUE_BOX_REQUEST,
      generatesearchAllFamiliesUniqueBox
    ),
  ]);
}
