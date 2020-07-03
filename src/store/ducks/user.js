import Immutable from "seamless-immutable";

export const Types = {
  SHOW_NEW_USER_VIEW: "@user/SHOW_NEW_USER_VIEW",
  HIDE_NEW_USER_VIEW: "@user/HIDE_NEW_USER_VIEW",

  SHOW_UPDATE_USER_VIEW: "@user/SHOW_UPDATE_USER_VIEW",
  HIDE_UPDATE_USER_VIEW: "@user/HIDE_UPDATE_USER_VIEW",

  READ_USER_REQUEST: "@user/READ_USER_REQUEST",
  READ_USER_SUCCESS: "@user/READ_USER_SUCCESS",

  READ_USER_ACTIVE_REQUEST: "@user/READ_USER_ACTIVE_REQUEST",
  READ_USER_ACTIVE_SUCCESS: "@user/READ_USER_ACTIVE_SUCCESS",

  UPDATE_USER_ACTIVE_REQUEST: "@user/RUPDATE_USER_ACTIVE_REQUEST",
  UPDATE_USER_ACTIVE_SUCCESS: "@user/UPDATE_USER_ACTIVE_SUCCESS",

  UPDATE_USER_REQUEST: "@user/UPDATE_USER_REQUEST",
  UPDATE_USER_SUCESS: "@user/UPDATE_USER_SUCESS",

  SHOW_CHANGER_PASSWORD_VIEW: "@user/SHOW_CHANGER_PASSWORD_VIEW",
  HIDE_CHANGER_PASSWORD_VIEW: "@user/HIDE_CHANGER_PASSWORD_VIEW",

  CHANGER_PASSWORD_REQUEST: "@user/CHANGER_PASSWORD_REQUEST",
  CHANGER_PASSWORD_SUCESS: "@user/CHANGER_PASSWORD_SUCESS",
};

const INITIAL_STATE = Immutable({
  password: null,
  visible: false,
  user: {},
  changer: {},

  /* Estado inicial do modal para atualizar informações do usuario */
  update_account_visible: false,
  update_account_data: [],
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_NEW_USER_VIEW:
      return { ...state, show: { visible: true, type: action.payload.type } };
    case Types.HIDE_NEW_USER_VIEW:
      return { ...state, show: { visible: false } };

    case Types.SHOW_UPDATE_USER_VIEW:
      return {
        ...state,
        update_account_visible: true,
      };
    case Types.HIDE_UPDATE_USER_VIEW:
      return { ...state, update_account_visible: false };

    case Types.SHOW_CHANGER_PASSWORD_VIEW:
      return { ...state, visible: true };
    case Types.HIDE_CHANGER_PASSWORD_VIEW:
      return { ...state, visible: false };

    case Types.READ_USER_SUCCESS:
      return { ...state, user: action.payload.user };

    case Types.READ_USER_ACTIVE_SUCCESS:
      return { ...state, update_account_data: action.payload.data };

    case Types.UPDATE_USER_REQUEST: {
      return {
        ...state,
        user: action.payload.user,
      };
    }

    case Types.CHANGER_PASSWORD_REQUEST: {
      return {
        ...state,
        password: action.payload.password,
      };
    }

    default:
      return state;
  }
}

export const Creators = {
  show: (type) => ({
    type: Types.SHOW_NEW_USER_VIEW,
    payload: {
      type,
    },
  }),

  hide: () => ({
    type: Types.HIDE_NEW_USER_VIEW,
  }),

  showModalChangerPassword: () => ({
    type: Types.SHOW_CHANGER_PASSWORD_VIEW,
  }),

  hideModalChangerPassword: () => ({
    type: Types.HIDE_CHANGER_PASSWORD_VIEW,
  }),

  showUpdateAccount: () => ({
    type: Types.SHOW_UPDATE_USER_VIEW,
  }),

  hideUpdateAccount: () => ({
    type: Types.HIDE_UPDATE_USER_VIEW,
  }),

  readUserRequest: () => ({
    type: Types.READ_USER_REQUEST,
  }),

  readUserSuccess: (user) => ({
    type: Types.READ_USER_SUCCESS,
    payload: { user },
  }),

  readUserActiveRequest: () => ({
    type: Types.READ_USER_ACTIVE_REQUEST,
  }),

  readUserActiveSuccess: (data) => ({
    type: Types.READ_USER_ACTIVE_SUCCESS,
    payload: {
      data,
    },
  }),

  updateUserActiveRequest: (account) => ({
    type: Types.UPDATE_USER_ACTIVE_REQUEST,
    payload: {
      account,
    },
  }),

  updateUserRequest: (user) => ({
    type: Types.UPDATE_USER_REQUEST,
    payload: { user },
  }),
  updateUserSucess: (user) => ({
    type: Types.UPDATE_USER_SUCESS,
    payload: { user },
  }),
  changerPasswordRequest: (password) => ({
    type: Types.CHANGER_PASSWORD_REQUEST,
    payload: { password },
  }),
};
