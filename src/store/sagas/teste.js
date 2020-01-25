import { call, put } from "redux-saga/effects";

import { Creators as UserCreators } from "../ducks/user";
import { Creators as ProfileCreators } from "../ducks/profile";

export function teste({ payload }) {
  if (!payload) return;

  const { user } = payload.user;
  const { profile } = payload.profile;

  if (user) {
    put(UserCreators.loadUserSuccess(user));
    put(ProfileCreators.loadProfileSucess(profile));
  }
}
