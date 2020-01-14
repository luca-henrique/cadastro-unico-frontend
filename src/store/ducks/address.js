import Immutable from "seamless-immutable";

export const Types = {
  /* NOVO login */

  SET_ADDRESS: "@addres/SET_ADDRESS"
};

const INITIAL_STATE = Immutable({
  address: {}
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_ADDRESS:
      return {
        ...state,
        address: action.payload.address
      };

    default:
      return state;
  }
}

export const Creators = {
  setAddress: address => ({
    type: Types.SET_ADDRESS,
    payload: {
      address
    }
  })
};
