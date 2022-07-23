import Types from './types';

export function createUserRequest(data) {
  return {type: Types.CREATE_USER_REQUEST, data};
}

export function createUserSuccess() {
  return {type: Types.CREATE_USER_SUCCESS};
}

export function deleteUserRequest(data) {
  return {type: Types.DELETE_USER_REQUEST, data};
}

export function deleteUserSuccess() {
  return {type: Types.DELETE_USER_SUCCESS};
}

export function updateUserRequest(data) {
  return {type: Types.UPDATE_USER_REQUEST, data};
}

export function updateUserSuccess() {
  return {type: Types.UPDATE_USER_SUCCESS};
}

export function readUserRequest() {
  return {type: Types.READ_USER_REQUEST};
}

export function readUserSuccess(data) {
  return {type: Types.READ_USER_SUCCESS, data};
}
