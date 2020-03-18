import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_FAMILY: "@family/SHOW_MODAL_FAMILY",
  HIDE_MODAL_FAMILY: "@family/HIDE_MODAL_FAMILY",

  SHOW_MODAL_NEW_FAMILIAR: "@familiar/SHOW_MODAL_NEW_FAMILIAR",
  HIDE_MODAL_NEW_FAMILIAR: "@familiar/HIDE_MODAL_NEW_FAMILIAR",

  SHOW_MODAL_UPDATE_FAMILY: "@family/SHOW_MODAL_UPDATE_FAMILY",
  HIDE_MODAL_UPDATE_FAMILY: "@family/HIDE_MODAL_UPDATE_FAMILY",

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
  id: null,
  open: false,
  visible: false,
  family: {},
  groupsFamilies: {},
  updateFamily: { data: {}, visible: false }
});

export default function family(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_FAMILY:
      return {
        ...state,
        open: true
      };
    case Types.HIDE_MODAL_FAMILY:
      return {
        ...state,
        open: false
      };
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

    case Types.SHOW_MODAL_UPDATE_FAMILY:
      return {
        ...state,
        updateFamily: { data: action.payload.data, visible: true }
      };

    case Types.HIDE_MODAL_UPDATE_FAMILY:
      return {
        ...state,
        updateFamily: { data: {}, visible: false }
      };

    case Types.CREATE_FAMILY_SUCCESS:
      return {
        ...state,
        family: action.payload.family
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
  showModalFamily: () => ({
    type: Types.SHOW_MODAL_FAMILY
  }),

  hideModalFamily: () => ({
    type: Types.HIDE_MODAL_FAMILY
  }),
  showModalNewFamiliar: () => ({
    type: Types.SHOW_MODAL_NEW_FAMILIAR
  }),

  hideModalNewFamiliar: () => ({
    type: Types.HIDE_MODAL_NEW_FAMILIAR
  }),

  showModalUpdateFamily: data => ({
    type: Types.SHOW_MODAL_UPDATE_FAMILY,
    payload: { data }
  }),
  hideModalUpdateFamily: () => ({
    type: Types.HIDE_MODAL_UPDATE_FAMILY
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

  readFamilyRequest: () => ({
    type: Types.READ_FAMILY_REQUEST
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
