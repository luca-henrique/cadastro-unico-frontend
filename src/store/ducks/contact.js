import Immutable from "seamless-immutable";

export const Types = {
  /* NOVO login */

  SET_CONTACT: "@contact/SET_CONTACT"
};

const INITIAL_STATE = Immutable({
  contact: {}
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_CONTACT:
      return {
        ...state,
        contact: action.payload.contact
      };

    default:
      return state;
  }
}

export const Creators = {
  changeContact: contact => ({
    type: Types.SET_CONTACT,
    payload: {
      contact
    }
  })
};
