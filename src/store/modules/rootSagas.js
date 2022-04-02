import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import license from './license/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all({});
}
