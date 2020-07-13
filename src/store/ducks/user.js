import Immutable from "seamless-immutable";

export const Types = {
  SHOW_USER_VIEW: "@user/SHOW_USER_VIEW",
  HIDE_USER_VIEW: "@user/HIDE_USER_VIEW",

  SHOW_NEW_USER_VIEW: "@user/SHOW_NEW_USER_VIEW",
  HIDE_NEW_USER_VIEW: "@user/HIDE_NEW_USER_VIEW",

  SHOW_UPDATE_USER_VIEW: "@user/SHOW_UPDATE_USER_VIEW",
  HIDE_UPDATE_USER_VIEW: "@user/HIDE_UPDATE_USER_VIEW",

  SHOW_CHANGER_PASSWORD_VIEW: "@user/SHOW_CHANGER_PASSWORD_VIEW",
  HIDE_CHANGER_PASSWORD_VIEW: "@user/HIDE_CHANGER_PASSWORD_VIEW",

  READ_USER_JOINED_REQUEST: "@user/READ_USER_JOINED_REQUEST",
  READ_USER_JOINED_SUCCESS: "@user/READ_USER_JOINED_SUCCESS",

  READ_USER_REQUEST: "@user/READ_USER_REQUEST",
  READ_USER_SUCCESS: "@user/READ_USER_SUCCESS",

  CREATE_USER_REQUEST: "@user/CREATE_USER_REQUEST",
  CREATE_USER_SUCCESS: "@user/CREATE_USER_SUCCESS",

  DELETE_USER_REQUEST: "@user/DELETE_USER_REQUEST",
  DELETE_USER_SUCCESS: "@user/DELETE_USER_SUCCESS",

  REMOVE_USER_SUCCESS: "@user/REMOVE_USER_SUCCESS",

  UPDATE_USER_REQUEST: "@user/UPDATE_USER_REQUEST",
  UPDATE_USER_SUCCESS: "@user/UPDATE_USER_SUCCESS",

  CHANGER_PASSWORD_REQUEST: "@user/CHANGER_PASSWORD_REQUEST",
  CHANGER_PASSWORD_SUCCESS: "@user/CHANGER_PASSWORD_SUCCESS",
};

const INITIAL_STATE = Immutable({
  user_joined: {},
  users: [],
  loading: true,

  user_list_view: false,
  create_user: false,
  update_user: { visible: false, user: [] },
  update_password_view: false,
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_USER_VIEW:
      return {
        ...state,
        user_list_view: true,
      };

    case Types.HIDE_USER_VIEW:
      return {
        ...state,
        user_list_view: false,
      };

    case Types.SHOW_NEW_USER_VIEW:
      return {
        ...state,
        create_user: true,
      };

    case Types.HIDE_NEW_USER_VIEW:
      return {
        ...state,
        create_user: false,
      };

    case Types.SHOW_UPDATE_USER_VIEW:
      return {
        ...state,
        update_user: { visible: true, user: action.payload.user },
      };

    case Types.HIDE_UPDATE_USER_VIEW:
      return {
        ...state,
        update_user: { visible: false, user: {} },
      };

    case Types.SHOW_CHANGER_PASSWORD_VIEW:
      return {
        ...state,
        update_password_view: true,
      };

    case Types.HIDE_CHANGER_PASSWORD_VIEW:
      return {
        ...state,
        update_password_view: false,
      };

    case Types.READ_USER_JOINED_SUCCESS:
      return {
        ...state,
        user_joined: action.payload.user,
      };

    case Types.READ_USER_SUCCESS:
      return {
        ...state,
        users: action.payload.user,
        loading: false,
      };

    case Types.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: [
          ...state.users.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    case Types.CREATE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };

    case Types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: update(state.users, action.payload.user),
      };

    default:
      return state;
  }
}

export const Creators = {
  showUserView: () => ({
    type: Types.SHOW_USER_VIEW,
  }),

  hideUserView: () => ({
    type: Types.HIDE_USER_VIEW,
  }),

  showNewUserView: () => ({
    type: Types.SHOW_NEW_USER_VIEW,
  }),

  hideNewUserView: () => ({
    type: Types.HIDE_NEW_USER_VIEW,
  }),

  showUpdateAccount: (user) => ({
    type: Types.SHOW_UPDATE_USER_VIEW,
    payload: {
      user,
    },
  }),

  hideUpdateAccount: () => ({
    type: Types.HIDE_UPDATE_USER_VIEW,
  }),

  showChangerPasswordView: () => ({
    type: Types.SHOW_CHANGER_PASSWORD_VIEW,
  }),

  hideChangerPasswordView: () => ({
    type: Types.HIDE_CHANGER_PASSWORD_VIEW,
  }),

  readUserJoinedRequest: () => ({
    type: Types.READ_USER_JOINED_REQUEST,
  }),
  readUserJoinedSuccess: (user) => ({
    type: Types.READ_USER_JOINED_SUCCESS,
    payload: {
      user,
    },
  }),

  readUserRequest: () => ({
    type: Types.READ_USER_REQUEST,
  }),

  readUserSuccess: (user) => ({
    type: Types.READ_USER_SUCCESS,
    payload: { user },
  }),

  deleteUserRequest: (id) => ({
    type: Types.DELETE_USER_REQUEST,
    payload: {
      id,
    },
  }),

  deleteUserSuccess: (id) => ({
    type: Types.DELETE_USER_SUCCESS,
    payload: {
      id,
    },
  }),

  updateUserRequest: (user) => ({
    type: Types.UPDATE_USER_REQUEST,
    payload: { user },
  }),

  updateUserSuccess: (user) => ({
    type: Types.UPDATE_USER_SUCCESS,
    payload: { user },
  }),

  createUserRequest: (user) => ({
    type: Types.CREATE_USER_REQUEST,
    payload: { user },
  }),

  createUserSuccess: (user) => ({
    type: Types.CREATE_USER_SUCCESS,
    payload: { user },
  }),

  changerPasswordRequest: (password) => ({
    type: Types.CHANGER_PASSWORD_REQUEST,
    payload: { password },
  }),
};

function update(items, account) {
  const index = items.findIndex((item) => item.id === account.id);
  return [...items.slice(0, index), { ...account }, ...items.slice(index + 1)];
}
