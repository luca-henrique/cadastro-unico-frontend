import Immutable from "seamless-immutable";

export const Types = {
  OPEN_MODAL_REPORT: "@report/OPEN_MODAL_REPORT_REQUEST",
  HIDE_MODAL_REPORT: "@report/HIDE_MODAL_REPORT_REQUEST",

  UPDATE_ADDRESS_REQUEST: "@address/UPDATE_ADDRESS_REQUEST",
  UPDATE_ADDRESS_SUCESS: "@address/UPDATE_ADDRESS_SUCESS",

  
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
 
};
