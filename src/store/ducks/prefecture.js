import Immutable from "seamless-immutable";

export const Types = {
  CREATE_PREFECTURE_REQUEST: "@prefecture/CREATE_PREFECTURE_REQUEST",
  CREATE_PREFECTURE_SUCCESS: "@prefecture/CREATE_PREFECTURE_SUCCESS",

  UPDATE_PREFECTURE_REQUEST: "@prefecture/UPDATE_PREFECTURE_REQUEST",
  UPDATE_PREFECTURE_SUCCESS: "@prefecture/UPDATE_PREFECTURE_SUCCESS",

  READ_PREFECTURE_REQUEST: "@prefecture/LOAD_PREFECTURE_REQUEST",
  READ_PREFECTURE_SUCCESS: "@prefecture/LOAD_PREFECTURE_SUCCESS",

  FAIL_LOAD_PREFECTURE: "@prefecture/FAIL_LOAD_PREFECTURE"
};

const INITIAL_STATE = Immutable({
  prefecture: {},
  exist: false
});

export default function prefecture(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_PREFECTURE_REQUEST:
      return {
        ...state,
        prefecture: action.payload.prefecture
      };

    case Types.CREATE_PREFECTURE_SUCCESS:
      return {
        ...state,
        prefecture: action.payload.prefecture
      };
    case Types.UPDATE_PREFECTURE_REQUEST:
      return {
        ...state,
        prefecture: action.payload.prefecture
      };

    case Types.UPDATE_PREFECTURE_SUCCESS:
      return {
        ...state,
        prefecture: action.payload.prefecture
      };

    case Types.READ_PREFECTURE_SUCCESS:
      return {
        ...state,
        prefecture: action.payload.prefecture
      };
    case Types.FAIL_LOAD_PREFECTURE:
      return {
        ...state,
        exist: action.payload.exist
      };

    default:
      return state;
  }
}

export const Creators = {
  createPrefectureRequest: prefecture => ({
    type: Types.CREATE_PREFECTURE_REQUEST,
    payload: { prefecture }
  }),
  createPrefectureSuccess: prefecture => ({
    type: Types.CREATE_PREFECTURE_SUCCESS,
    payload: { prefecture }
  }),
  updatePrefectureRequest: prefecture => ({
    type: Types.UPDATE_PREFECTURE_REQUEST,
    payload: { prefecture }
  }),
  updatePrefectureSuccess: prefecture => ({
    type: Types.UPDATE_PREFECTURE_SUCCESS,
    payload: { prefecture }
  }),
  readPrefectureRequest: () => ({
    type: Types.READ_PREFECTURE_REQUEST
  }),
  readPrefectureSuccess: prefecture => ({
    type: Types.READ_PREFECTURE_SUCCESS,
    payload: {
      prefecture
    }
  }),
  failLoadPrefecture: exist => ({
    type: Types.FAIL_LOAD_PREFECTURE,
    payload: {
      exist
    }
  })
};
