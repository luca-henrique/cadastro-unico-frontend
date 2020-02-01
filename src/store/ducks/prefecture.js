import Immutable from "seamless-immutable";

export const Types = {
  CREATE_PREFECTURE_REQUEST: "@prefecture/CREATE_PREFECTURE_REQUEST",
  CREATE_PREFECTURE_SUCESS: "@prefecture/CREATE_PREFECTURE_SUCESS",

  UPDATE_PREFECTURE_REQUEST: "@prefecture/UPDATE_PREFECTURE_REQUEST",
  UPDATE_PREFECTURE_SUCESS: "@prefecture/UPDATE_PREFECTURE_SUCESS",

  LOAD_PREFECTURE_REQUEST: "@prefecture/LOAD_PREFECTURE_REQUEST",
  LOAD_PREFECTURE_SUCESS: "@prefecture/LOAD_PREFECTURE_SUCESS",

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

    case Types.CREATE_PREFECTURE_SUCESS:
      return {
        ...state,
        prefecture: action.payload.prefecture
      };
    case Types.UPDATE_PREFECTURE_REQUEST:
      return {
        ...state,
        prefecture: action.payload.prefecture
      };

    case Types.UPDATE_PREFECTURE_SUCESS:
      return {
        ...state,
        prefecture: action.payload.prefecture
      };

    case Types.LOAD_PREFECTURE_REQUEST:
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
  createPrefectureSucess: prefecture => ({
    type: Types.CREATE_PREFECTURE_SUCESS,
    payload: { prefecture }
  }),
  updatePrefectureRequest: prefecture => ({
    type: Types.UPDATE_PREFECTURE_REQUEST,
    payload: { prefecture }
  }),
  updatePrefectureSucess: prefecture => ({
    type: Types.UPDATE_PREFECTURE_SUCESS,
    payload: { prefecture }
  }),
  loadPrefectureRequest: () => ({
    type: Types.LOAD_PREFECTURE_REQUEST
  }),
  loadPrefectureSucess: prefecture => ({
    type: Types.UPDATE_PREFECTURE_SUCESS,
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
