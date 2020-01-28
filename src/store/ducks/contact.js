import Immutable from "seamless-immutable";

export const Types = {
  CREATE_CONTACT_REQUEST: "@contact/CREATE_CONTACT_REQUEST",
  CREATE_CONTACT_SUCCESS: "@contact/CREATE_CONTACT_SUCCESS",

  UPDATE_CONTACT_REQUEST: "@contact/UPDATE_CONTACT_REQUEST",
  UPDATE_CONTACT_SUCCESS: "@contact/UPDATE_CONTACT_SUCCESS",

  LOAD_CONTACT_REQUEST: "@contact/LOAD_CONTACT_REQUEST",
  LOAD_CONTACT_SUCCESS: "@contact/LOAD_CONTACT_SUCCESS",

  FAIL_LOAD_CONTACT: "@contact/FAIL_LOAD_CONTACT"
};

const INITIAL_STATE = Immutable({
  contact: {},
  exist: false
});

export default function contact(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_CONTACT_REQUEST:
      return {
        ...state,
        contact: action.payload.contact
      };

    case Types.CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload.contact
      };
    case Types.UPDATE_CONTACT_REQUEST:
      return {
        ...state,
        contact: action.payload.contact
      };

    case Types.UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload.contact
      };

    case Types.LOAD_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload.contact
      };
    case Types.FAIL_LOAD_CONTACT:
      return {
        ...state,
        exist: action.payload.exist
      };

    default:
      return state;
  }
}

export const Creators = {
  createContactRequest: contact => ({
    type: Types.CREATE_CONTACT_REQUEST,
    payload: { contact }
  }),
  createContactSuccess: contact => ({
    type: Types.CREATE_CONTACT_SUCCESS,
    payload: { contact }
  }),
  updateContactRequest: contact => ({
    type: Types.UPDATE_CONTACT_REQUEST,
    payload: { contact }
  }),
  updateContactSuccess: contact => ({
    type: Types.UPDATE_CONTACT_SUCCESS,
    payload: { contact }
  }),
  loadContactRequest: () => ({
    type: Types.LOAD_CONTACT_REQUEST
  }),
  loadContactSuccess: contact => ({
    type: Types.LOAD_CONTACT_SUCCESS,
    payload: {
      contact
    }
  }),
  failLoadContact: exist => ({
    type: Types.FAIL_LOAD_CONTACT,
    payload: {
      exist
    }
  })
};
