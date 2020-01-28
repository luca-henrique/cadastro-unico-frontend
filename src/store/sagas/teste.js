import { put } from "redux-saga/effects";

import { Creators as UserCreators } from "../ducks/user";
import { Creators as ProfileCreators } from "../ducks/profile";
import { Creators as AddressCreators } from "../ducks/address";
import { Creators as ContactCreators } from "../ducks/contact";

export function teste({ payload }) {
  if (!payload) return;

  const { user } = payload.user;
  const { profile } = payload.profile;
  const { address } = payload.profile;
  const { contact } = payload.contact;

  if (user) {
    put(UserCreators.loadUserSuccess(user));
  }

  if (profile) {
    put(ProfileCreators.loadProfileSucess(profile));
  }

  if (address) {
    put(AddressCreators.loadAddressSucess(address));
  }
  if (contact) {
    put(ContactCreators.loadContactSuccess(contact));
  }
}
