import { put } from "redux-saga/effects";

import { Creators as UserCreators } from "../ducks/user";
import { Creators as BoxCreators } from "../ducks/box";

export function teste({ payload }) {
  if (!payload) return;

  //console.log("Teste");
  //console.log(payload);

  const { user } = payload.user;

  if (user) {
    put(UserCreators.readUserSuccess(user));
  }
}
