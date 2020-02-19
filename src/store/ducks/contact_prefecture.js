import Immutable from "seamless-immutable";

export const Types = {
  CREATE_CONTACT_PREFECTURE_REQUEST:
    "@contact_prefecture/CREATE_CONTACT_PREFECTURE_REQUEST",
  CREATE_CONTACT_PREFECTURE_SUCCESS:
    "@contact_prefecture/CREATE_CONTACT_PREFECTURE_SUCCESS",

  UPDATE_CONTACT_PREFECTURE_REQUEST:
    "@contact_prefecture/UPDATE_CONTACT_PREFECTURE_REQUEST",
  UPDATE_CONTACT_PREFECTURE_SUCCESS:
    "@contact_prefecture/UPDATE_CONTACT_PREFECTURE_SUCCESS",

  READ_CONTACT_PREFECTURE_REQUEST:
    "@contact_prefecture/READ_CONTACT_PREFECTURE_REQUEST",
  READ_CONTACT_PREFECTURE_SUCCESS:
    "@contact_prefecture/READ_CONTACT_PREFECTURE_SUCCESS",

  FAIL_LOAD_CONTACT_PREFECTURE:
    "@contact_prefecture/FAIL_LOAD_CONTACT_PREFECTURE"
};

const INITIAL_STATE = Immutable({
  contact: {},
  exist: false
});

export default function contactPrefecture(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_CONTACT_PREFECTURE_REQUEST:
      return {
        ...state,
        contact: action.payload.contact
      };

    case Types.CREATE_CONTACT_PREFECTURE_SUCCESS:
      return {
        ...state,
        contact: action.payload.contact
      };
    case Types.UPDATE_CONTACT_PREFECTURE_REQUEST:
      return {
        ...state,
        contact: action.payload.contact
      };

    case Types.UPDATE_CONTACT_PREFECTURE_SUCCESS:
      return {
        ...state,
        contact: action.payload.contact
      };

    case Types.READ_CONTACT_PREFECTURE_SUCCESS:
      return {
        ...state,
        contact: action.payload.contact
      };
    case Types.FAIL_LOAD_CONTACT_PREFECTURE:
      return {
        ...state,
        exist: action.payload.exist
      };

    default:
      return state;
  }
}

export const Creators = {
  createPrefectureContactRequest: contact => ({
    type: Types.CREATE_CONTACT_PREFECTURE_REQUEST,
    payload: { contact }
  }),
  createPrefectureContactSuccess: contact => ({
    type: Types.CREATE_CONTACT_PREFECTURE_SUCCESS,
    payload: { contact }
  }),
  updatePrefectureContactRequest: contact => ({
    type: Types.UPDATE_CONTACT_PREFECTURE_REQUEST,
    payload: { contact }
  }),
  updatePrefectureContactSuccess: contact => ({
    type: Types.UPDATE_CONTACT_PREFECTURE_SUCCESS,
    payload: { contact }
  }),
  readPrefectureContactRequest: () => ({
    type: Types.READ_CONTACT_PREFECTURE_REQUEST
  }),
  readPrefectureContactSuccess: contact => ({
    type: Types.READ_CONTACT_PREFECTURE_SUCCESS,
    payload: {
      contact
    }
  }),
  failLoadPrefectureContact: exist => ({
    type: Types.FAIL_LOAD_CONTACT_PREFECTURE,
    payload: {
      exist
    }
  })
};
