import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_NEW_FAMILIAR: "@familiar/SHOW_MODAL_NEW_FAMILIAR",
  HIDE_MODAL_NEW_FAMILIAR: "@familiar/HIDE_MODAL_NEW_FAMILIAR",

  CREATE_FAMILY_REQUEST: "@familiar/CREATE_FAMILY_REQUEST",
  CREATE_FAMILY_SUCCESS: "@familiar/CREATE_FAMILY_SUCCESS",

  READ_FAMILY_REQUEST: "@familiar/READ_FAMILY_REQUEST",
  READ_FAMILY_SUCCESS: "@familiar/READ_FAMILY_SUCCESS",

  UPDATE_FAMILY_REQUEST: "@familiar/UPDATE_FAMILY_REQUEST",
  UPDATE_FAMILY_SUCCESS: "@familiar/UPDATE_FAMILY_SUCCESS",

  DELETE_FAMILY_REQUEST: "@familiar/DELETE_FAMILY_REQUEST",
  DELETE_FAMILY_SUCCESS: "@familiar/DELETE_FAMILY_SUCCESS"
};

const INITIAL_STATE = Immutable({
  family: {},
  groupsFamilies: {},
  id: null,
  visible: false
});

export default function family(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_NEW_FAMILIAR:
      return {
        ...state,
        visible: true
      };
    case Types.HIDE_MODAL_NEW_FAMILIAR:
      return {
        ...state,
        visible: false
      };

    case Types.CREATE_FAMILY_REQUEST:
      return {
        ...state,
        family: action.payload.family
      };

    case Types.CREATE_FAMILY_SUCCESS:
      return {
        ...state,
        family: action.payload.family
      };

    case Types.READ_FAMILY_REQUEST:
      return {
        ...state,
        groupsFamilies: action.payload.groupsFamilies
      };

    case Types.READ_FAMILY_SUCCESS:
      return {
        ...state,
        groupsFamilies: action.payload.groupsFamilies
      };

    case Types.UPDATE_FAMILY_REQUEST:
      return {
        ...state,
        family: action.payload.family
      };

    case Types.UPDATE_FAMILY_SUCCESS:
      return {
        ...state,
        family: action.payload.family
      };

    case Types.DELETE_FAMILY_REQUEST:
      return {
        ...state,
        id: action.payload.id
      };

    case Types.DELETE_FAMILY_SUCCESS:
      return {
        ...state,
        id: action.payload.id
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalNewFamiliar: () => ({
    type: Types.SHOW_MODAL_NEW_FAMILIAR
  }),

  hideModalNewFamiliar: () => ({
    type: Types.HIDE_MODAL_NEW_FAMILIAR
  }),

  createFamilyRequest: family => ({
    type: Types.CREATE_FAMILY_REQUEST,
    payload: {
      family
    }
  }),

  createFamilySuccess: family => ({
    type: Types.CREATE_FAMILY_SUCCESS,
    payload: {
      family
    }
  }),

  readFamilyRequest: groupsFamilies => ({
    type: Types.READ_FAMILY_REQUEST,
    payload: {
      groupsFamilies
    }
  }),

  readFamilySuccess: groupsFamilies => ({
    type: Types.READ_FAMILY_SUCCESS,
    payload: {
      groupsFamilies
    }
  }),

  updateFamilyRequest: family => ({
    type: Types.UPDATE_FAMILY_REQUEST,
    payload: {
      family
    }
  }),

  updateFamilySuccess: family => ({
    type: Types.UPDATE_FAMILY_SUCCESS,
    payload: {
      family
    }
  }),

  deleteFamilyRequest: id => ({
    type: Types.DELETE_FAMILY_REQUEST,
    payload: {
      id
    }
  }),

  deleteFamilySuccess: id => ({
    type: Types.DELETE_FAMILY_SUCCESS,
    payload: {
      id
    }
  })
};
