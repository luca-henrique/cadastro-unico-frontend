import Immutable from "seamless-immutable";

export const Types = {
  SHOW_NEW_VIEW: "@user/SHOW_NEW_VIEW",
  HIDE_NEW_VIEW: "@user/HIDE_NEW_VIEW",

  LOAD_USER_REQUEST: "@user/LOAD_USER_REQUEST",
  LOAD_USER_SUCCESS: "@user/LOAD_USER_SUCCESS",

  UPDATE_USER_REQUEST: "@user/UPDATE_USER_REQUEST",
  UPDATE_USER_SUCESS: "@user/UPDATE_USER_SUCESS",

  CHANGER_PASSWORD_REQUEST: "@user/CHANGER_PASSWORD_REQUEST",
  CHANGER_PASSWORD_SUCESS: "@user/CHANGER_PASSWORD_SUCESS"
};

const INITIAL_STATE = Immutable({
  password: null,
  user: {}
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_NEW_VIEW:
      return { ...state, show: { visible: true, type: action.payload.type } };
    case Types.HIDE_NEW_VIEW:
      return {
        ...state,
        show: { visible: false }
      };

    case Types.LOAD_USER_SUCCESS:
      return { ...state, user: action.payload.user };

    case Types.UPDATE_USER_REQUEST: {
      return {
        ...state,
        email: action.payload.user
      };
    }

    case Types.CHANGER_PASSWORD_REQUEST: {
      return {
        ...state,
        password: action.payload.password
      };
    }

    default:
      return state;
  }
}

export const Creators = {
  show: type => ({
    type: Types.SHOW_NEW_VIEW,
    payload: {
      type
    }
  }),

  hide: () => ({
    type: Types.HIDE_NEW_VIEW
  }),

  loadUserRequest: () => ({
    type: Types.LOAD_USER_REQUEST
  }),

  loadUserSuccess: user => ({
    type: Types.LOAD_USER_SUCCESS,
    payload: { user }
  }),

  updateUserRequest: user => ({
    type: Types.UPDATE_USER_REQUEST,
    payload: { user }
  }),
  updateUserSucess: user => ({
    type: Types.UPDATE_USER_SUCESS,
    payload: { user }
  }),
  changerPasswordRequest: password => ({
    type: Types.CHANGER_PASSWORD_REQUEST,
    payload: { password }
  })
};
