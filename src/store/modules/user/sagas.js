import {takeLatest, all, call, put} from 'redux-saga/effects';

import api from 'src/services/api';

import Types from './types';
import {readUserSuccess} from './actions';

export function* readUser() {
  try {
    const response = yield call(api.get, '/user');
    const res = response.data;
    yield put(readUserSuccess(res));
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest(Types.READ_USER_REQUEST, readUser)]);
