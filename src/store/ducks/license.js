import Immutable from "seamless-immutable";

export const Types = {
  TOKEN_ACCESS_REQUEST: "@license/TOKEN_ACCESS_REQUEST",

  CHECK_ACCESS_TOKEN: "@license/CHECK_ACCESS_TOKEN",

  TOKEN_REDIRECT_ACCESS: "@license/TOKEN_REDIRECT_ACCESS"
};

const INITIAL_STATE = Immutable({
  keyAccess: {},
  accessToken: false
});

export default function license(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHECK_ACCESS_TOKEN:
      return { ...state, keyAccess: action.payload.token };

    case Types.TOKEN_REDIRECT_ACCESS:
      return { ...state, accessToken: action.payload.license };

    default:
      return state;
  }
}

export const Creators = {
  requestToken: () => ({
    type: Types.TOKEN_ACCESS_REQUEST
  }),

  checkTokenAccess: token => ({
    type: Types.CHECK_ACCESS_TOKEN,
    payload: {
      token
    }
  }),

  tokenRedirect: license => ({
    type: Types.TOKEN_REDIRECT_ACCESS,
    payload: {
      license
    }
  })
};
