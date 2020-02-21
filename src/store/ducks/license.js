import Immutable from "seamless-immutable";

export const Types = {
  LICENSE_VERIFICATION_TOKEN_REQUEST:
    "@license/LICENSE_VERIFICATION_TOKEN_REQUEST",

  LICENSE_VERIFICATION_TOKEN_SUCCESS:
    "@license/LICENSE_VERIFICATION_TOKEN_SUCCESS",

  LICENSE_ACCESS_TOKEN_REQUEST: "@license/LICENSE_ACCESS_TOKEN_REQUEST"
};

const INITIAL_STATE = Immutable({
  token: { key: "" },
  key: { license: false, token: "" }
});

export default function license(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LICENSE_VERIFICATION_TOKEN_REQUEST:
      return { ...state, token: { key: action.payload.token } };
    case Types.LICENSE_ACCESS_TOKEN_REQUEST:
      return { ...state, token: { key: action.payload.token } };
    case Types.LICENSE_VERIFICATION_TOKEN_SUCCESS:
      return { ...state, key: action.payload.key };
    default:
      return state;
  }
}

export const Creators = {
  verificationToken: token => ({
    type: Types.LICENSE_VERIFICATION_TOKEN_REQUEST,
    payload: {
      token
    }
  }),
  recoveryAccessToken: token => ({
    type: Types.LICENSE_ACCESS_TOKEN_REQUEST,
    payload: {
      token
    }
  }),
  tokenAccess: key => ({
    type: Types.LICENSE_VERIFICATION_TOKEN_SUCCESS,
    payload: {
      key
    }
  })
};
