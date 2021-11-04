import {put} from 'redux-saga/effects';
import {push} from 'connected-react-router';
import {toastr} from 'react-redux-toastr';

export function* signIn({email, password}) {
  try {
    console.log(email, password);
    yield put(push('/dashboard'));
  } catch (err) {
    toastr.error('Falha no login');
  }
}

export function* signOut() {
  localStorage.removeItem('@Omni:token');
  yield put(push('/login'));
}
