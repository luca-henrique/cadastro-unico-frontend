import { call, put } from "redux-saga/effects";

import { Creators as UserCreators } from "../ducks/user";

export function teste({ payload }) {
  if (!payload) return;

  const { user } = payload.user;

  if (user) {
    put(UserCreators.loadUserSuccess(user));
  }
  console.log(user);
}
