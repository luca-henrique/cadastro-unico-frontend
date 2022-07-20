import {takeLatest, all, call, put} from 'redux-saga/effects';

import api from 'src/services/api';

import Types from './types';
import {signInSuccess} from './actions';

import {toastr} from 'react-redux-toastr';

export function* signIn({data}) {
  try {
    const response = yield call(api.post, '/auth', data);
    const {token} = response.data;
    localStorage.setItem('token', JSON.stringify(token));
    yield put(signInSuccess(token));
  } catch (error) {
    toastr.error(error.response.data);
  }
}

export default all([takeLatest(Types.SIGN_IN_REQUEST, signIn)]);
