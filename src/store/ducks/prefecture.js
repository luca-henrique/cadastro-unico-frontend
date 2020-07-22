import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_CREATE_PREFECTURE: "@prefecture/SHOW_MODAL_CREATE_PREFECTURE",
  HIDE_MODAL_CREATE_PREFECTURE: "@prefecure/HIDE_MODAL_CREATE_PREFECTURE",

  SHOW_MODAL_UPDATE_PREFECTURE: "@prefecture/SHOW_MODAL_UPDATE_PREFECTURE",
  HIDE_MODAL_UPDATE_PREFECTURE: "@prefecure/HIDE_MODAL_UPDATE_PREFECTURE",

  CREATE_PREFECTURE_REQUEST: "@prefecture/CREATE_PREFECTURE_REQUEST",
  CREATE_PREFECTURE_SUCCESS: "@prefecture/CREATE_PREFECTURE_SUCCESS",

  UPDATE_PREFECTURE_REQUEST: "@prefecture/UPDATE_PREFECTURE_REQUEST",
  UPDATE_PREFECTURE_SUCCESS: "@prefecture/UPDATE_PREFECTURE_SUCCESS",

  READ_PREFECTURE_REQUEST: "@prefecture/READ_PREFECTURE_REQUEST",
  READ_PREFECTURE_SUCCESS: "@prefecture/READ_PREFECTURE_SUCCESS",
};

const INITIAL_STATE = Immutable({
  prefecture: {},
  prefecture_create: false,
  prefecture_update: { visible: false, data: {} },
});

export default function prefecture(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_CREATE_PREFECTURE:
      return {
        ...state,
        prefecture_create: true,
      };

    case Types.HIDE_MODAL_CREATE_PREFECTURE:
      return {
        ...state,
        prefecture_create: false,
      };

    case Types.SHOW_MODAL_UPDATE_PREFECTURE:
      return {
        ...state,
        prefecture_update: { visible: true, data: action.payload.prefecture },
      };

    case Types.HIDE_MODAL_UPDATE_PREFECTURE:
      return {
        ...state,
        prefecture_update: { visible: false, data: {} },
      };

    case Types.CREATE_PREFECTURE_SUCCESS:
      return {
        ...state,
        prefecture: action.payload.prefecture,
      };

    case Types.UPDATE_PREFECTURE_SUCCESS:
      return {
        ...state,
        prefecture: action.payload.prefecture,
      };

    case Types.READ_PREFECTURE_SUCCESS:
      return {
        ...state,
        prefecture: action.payload.prefecture,
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalCreatePrefecture: () => ({
    type: Types.SHOW_MODAL_CREATE_PREFECTURE,
  }),
  hideModalCreatePrefecture: () => ({
    type: Types.HIDE_MODAL_CREATE_PREFECTURE,
  }),

  showModalUpdatePrefecture: (prefecture) => ({
    type: Types.SHOW_MODAL_UPDATE_PREFECTURE,
    payload: {
      prefecture,
    },
  }),
  hideModalUpdatePrefecture: () => ({
    type: Types.HIDE_MODAL_UPDATE_PREFECTURE,
  }),

  createPrefectureRequest: (prefecture) => ({
    type: Types.CREATE_PREFECTURE_REQUEST,
    payload: {
      prefecture,
    },
  }),

  createPrefectureSuccess: (prefecture) => ({
    type: Types.CREATE_PREFECTURE_SUCCESS,
    payload: {
      prefecture,
    },
  }),

  updatePrefectureSuccess: (prefecture) => ({
    type: Types.UPDATE_PREFECTURE_SUCCESS,
    payload: {
      prefecture,
    },
  }),

  updatePrefectureRequest: (prefecture) => ({
    type: Types.UPDATE_PREFECTURE_REQUEST,
    payload: {
      prefecture,
    },
  }),

  readPrefectureSuccess: (prefecture) => ({
    type: Types.READ_PREFECTURE_SUCCESS,
    payload: {
      prefecture,
    },
  }),
};
