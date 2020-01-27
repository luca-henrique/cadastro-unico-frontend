import Immutable from "seamless-immutable";

export const Types = {
  CREATE_ADDRESS_REQUEST: "@address/CREATE_ADDRESS_REQUEST",
  CREATE_ADDRESS_SUCESS: "@address/CREATE_ADDRESS_SUCESS",

  UPDATE_ADDRESS_REQUEST: "@address/UPDATE_ADDRESS_REQUEST",
  UPDATE_ADDRESS_SUCESS: "@address/UPDATE_ADDRESS_SUCESS",

  LOAD_ADDRESS_REQUEST: "@address/LOAD_ADDRESS_REQUEST",
  LOAD_ADDRESS_SUCESS: "@address/LOAD_ADDRESS_SUCESS",

  FAIL_LOAD_ADDRESS: "@address/FAIL_LOAD_ADDRESS"
};

const INITIAL_STATE = Immutable({
  address: {},
  exist: false
});

export default function address(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_ADDRESS_REQUEST:
      return {
        ...state,
        address: action.payload.address
      };

    case Types.CREATE_ADDRESS_SUCESS:
      return {
        ...state,
        address: action.payload.address
      };
    case Types.UPDATE_ADDRESS_REQUEST:
      return {
        ...state,
        address: action.payload.address
      };

    case Types.UPDATE_ADDRESS_SUCESS:
      return {
        ...state,
        address: action.payload.address
      };

    case Types.LOAD_ADDRESS_SUCESS:
      return {
        ...state,
        address: action.payload.address
      };
    case Types.FAIL_LOAD_ADDRESS:
      return {
        ...state,
        exist: action.payload.exist
      };

    default:
      return state;
  }
}

export const Creators = {
  createAddressRequest: address => ({
    type: Types.CREATE_ADDRESS_REQUEST,
    payload: { address }
  }),
  createAddressSucess: address => ({
    type: Types.CREATE_ADDRESS_SUCESS,
    payload: { address }
  }),
  updateAddressRequest: address => ({
    type: Types.UPDATE_ADDRESS_REQUEST,
    payload: { address }
  }),
  updateAddressSucess: address => ({
    type: Types.UPDATE_ADDRESS_SUCESS,
    payload: { address }
  }),
  loadAddressRequest: () => ({
    type: Types.LOAD_ADDRESS_REQUEST
  }),
  loadAddressSucess: address => ({
    type: Types.LOAD_ADDRESS_SUCESS,
    payload: {
      address
    }
  }),
  failLoadAddress: exist => ({
    type: Types.FAIL_LOAD_ADDRESS,
    payload: {
      exist
    }
  })
};
