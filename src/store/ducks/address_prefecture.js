import Immutable from "seamless-immutable";

export const Types = {
  CREATE_ADDRESS_PREFECTURE_REQUEST:
    "@address_prefecture/CREATE_ADDRESS_PREFECTURE_REQUEST",
  CREATE_ADDRESS_PREFECTURE_SUCCESS:
    "@address_prefecture/CREATE_ADDRESS_PREFECTURE_SUCCESS",

  READ_ADDRESS_PREFECTURE_REQUEST:
    "@address_prefecture/READ_ADDRESS_PREFECTURE_REQUEST",
  READ_ADDRESS_PREFECTURE_SUCCESS:
    "@address_prefecture/READ_ADDRESS_PREFECTURE_SUCCESS",

  UPDATE_ADDRESS_PREFECTURE_REQUEST:
    "@address_prefecture/UPDATE_ADDRESS_PREFECTURE_REQUEST",
  UPDATE_ADDRESS_PREFECTURE_SUCCESS:
    "@address_prefecture/UPDATE_ADDRESS_PREFECTURE_SUCCESS",

  FAIL_LOAD_ADDRESS_PREFECTURE:
    "@address_prefecture/FAIL_LOAD_ADDRESS_PREFECTURE"
};

const INITIAL_STATE = Immutable({
  address: {},
  exist: false
});

export default function addressPrefecture(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_ADDRESS_PREFECTURE_REQUEST:
      return {
        ...state,
        address: action.payload.address
      };

    case Types.CREATE_ADDRESS_PREFECTURE_SUCCESS:
      return {
        ...state,
        address: action.payload.address
      };
    case Types.UPDATE_ADDRESS_PREFECTURE_REQUEST:
      return {
        ...state,
        address: action.payload.address
      };

    case Types.UPDATE_ADDRESS_PREFECTURE_SUCCESS:
      return {
        ...state,
        address: action.payload.address
      };

    case Types.READ_ADDRESS_PREFECTURE_SUCCESS:
      return {
        ...state,
        address: action.payload.address
      };
    case Types.FAIL_LOAD_ADDRESS_PREFECTURE:
      return {
        ...state,
        exist: action.payload.exist
      };

    default:
      return state;
  }
}

export const Creators = {
  createAddressPrefectureRequest: address => ({
    type: Types.CREATE_ADDRESS_PREFECTURE_REQUEST,
    payload: { address }
  }),
  createAddressPrefectureSucess: address => ({
    type: Types.CREATE_ADDRESS_PREFECTURE_SUCCESS,
    payload: { address }
  }),
  updateAddressPrefectureRequest: address => ({
    type: Types.UPDATE_ADDRESS_PREFECTURE_REQUEST,
    payload: { address }
  }),
  updateAddressPrefectureSuccess: address => ({
    type: Types.UPDATE_ADDRESS_PREFECTURE_SUCCESS,
    payload: { address }
  }),
  readAddressPrefectureRequest: () => ({
    type: Types.READ_ADDRESS_PREFECTURE_REQUEST
  }),
  readAddressPrefectureSuccess: address => ({
    type: Types.READ_ADDRESS_PREFECTURE_SUCCESS,
    payload: {
      address
    }
  }),
  failLoadAddressPrefecture: exist => ({
    type: Types.FAIL_LOAD_ADDRESS_PREFECTURE,
    payload: {
      exist
    }
  })
};
