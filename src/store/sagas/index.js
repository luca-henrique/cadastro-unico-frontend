import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "../ducks/auth";
import { signIn, signOut } from "./auth";

import { Types as LogTypes } from "../ducks/log";
import { getLogs } from "./log";

import { Types as LicenseTypes } from "../ducks/license";
import { checkToken, requestToken } from "./license";

import { Types as UserTypes } from "../ducks/user";
import {
  readUserJoined,
  readUser,
  deleteUser,
  createUser,
  updateUser,
  changerPasswordUserJoined,
} from "./user";

import { Types as DistrictTypes } from "../ducks/district";
import {
  createDistrict,
  readDistrict,
  deleteDistrict,
  updateDistrict,
} from "./district";

import { Types as PrefectureTypes } from "../ducks/prefecture";
import {
  createPrefecture,
  updatePrefecture,
  getPrefecture,
} from "./prefecture";

import { Types as BoxTypes } from "../ducks/box";
import { readBox, createBox, deleteBox, updateBox } from "./box";

import { Types as FamilyTypes } from "../ducks/family";
import {
  createFamily,
  readGroupFamilies,
  deleteFamily,
  updateFamily,
} from "./family";

import { Types as GenereteTypes } from "../ducks/generete";
import {
  generatePdfFilters,
  generateHangTagId,
  generatePdfUniqueBoxFamilies,
  generatePdfDiscard,
  generatePdfSynthetic,
} from "./generete";

export default function* rootSaga() {
  return yield all([
    takeLatest("persist/REHYDRATE", requestToken),
    takeLatest("persist/REHYDRATE", getPrefecture),

    takeLatest(LicenseTypes.CHECK_ACCESS_TOKEN, checkToken),

    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(LogTypes.READ_LOG_REQUEST, getLogs),

    takeLatest(UserTypes.READ_USER_JOINED_REQUEST, readUserJoined),
    takeLatest(UserTypes.READ_USER_REQUEST, readUser),
    takeLatest(UserTypes.DELETE_USER_REQUEST, deleteUser),
    takeLatest(UserTypes.CREATE_USER_REQUEST, createUser),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, updateUser),
    takeLatest(UserTypes.CHANGER_PASSWORD_REQUEST, changerPasswordUserJoined),

    takeLatest(DistrictTypes.CREATE_DISTRICT_REQUEST, createDistrict),
    takeLatest(DistrictTypes.READ_DISTRICT_REQUEST, readDistrict),
    takeLatest(DistrictTypes.DELETE_DISTRICT_REQUEST, deleteDistrict),
    takeLatest(DistrictTypes.UPDATE_DISTRICT_REQUEST, updateDistrict),

    takeLatest(PrefectureTypes.CREATE_PREFECTURE_REQUEST, createPrefecture),
    takeLatest(PrefectureTypes.UPDATE_PREFECTURE_REQUEST, updatePrefecture),

    takeLatest(BoxTypes.READ_BOX_REQUEST, readBox),
    takeLatest(BoxTypes.DELETE_BOX_REQUEST, deleteBox),
    takeLatest(BoxTypes.UPDATE_BOX_REQUEST, updateBox),
    takeLatest(BoxTypes.CREATE_BOX_REQUEST, createBox),

    takeLatest(FamilyTypes.READ_GROUP_FAMILIAR_REQUEST, readGroupFamilies),
    takeLatest(FamilyTypes.CREATE_FAMILY_REQUEST, createFamily),
    takeLatest(FamilyTypes.DELETE_FAMILY_REQUEST, deleteFamily),
    takeLatest(FamilyTypes.UPDATE_FAMILY_REQUEST, updateFamily),

    takeLatest(GenereteTypes.FILTER_BOX_REQUEST, generatePdfFilters),
    takeLatest(
      GenereteTypes.GENERATE_PDF_TAG_UNIQUE_BOX_REQUEST,
      generateHangTagId
    ),

    takeLatest(
      GenereteTypes.GENERETE_FAMILIES_BOX_REQUEST,
      generatePdfUniqueBoxFamilies
    ),
    takeLatest(GenereteTypes.GENERATE_PDF_DISCARD_REQUEST, generatePdfDiscard),

    takeLatest(
      GenereteTypes.GENERETE_PDF_SYNTHETIC_REQUEST,
      generatePdfSynthetic
    ),
  ]);
}
