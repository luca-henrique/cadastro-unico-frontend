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

  READ_FAMILY_REQUEST: "@family/READ_FAMILY_REQUEST",
  READ_FAMILY_SUCCESS: "@family/READ_FAMILY_SUCCESS",

  READ_GROUP_FAMILIAR_REQUEST: "@family/READ_GROUP_FAMILIAR_REQUEST",
  READ_GROUP_FAMILIAR_SUCCESS: "@family/READ_GROUP_FAMILIAR_SUCCESS",

  UPDATE_FAMILY_REQUEST: "@familiar/UPDATE_FAMILY_REQUEST",
  UPDATE_FAMILY_SUCCESS: "@familiar/UPDATE_FAMILY_SUCCESS",

  DELETE_FAMILY_REQUEST: "@familiar/DELETE_FAMILY_REQUEST",
  DELETE_FAMILY_SUCCESS: "@familiar/DELETE_FAMILY_SUCCESS",
};

const INITIAL_STATE = Immutable({
  show_family: { id: 0, visible: false },
  read_familiar: [],
  group_familiar: [],
  loading: true,

  create_family: { visible: false, id_box: {} },

  update_family: { visible: false, data: {} },
});

export default function family(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_FAMILY:
      return {
        ...state,
        show_family: { id: action.payload.id, visible: true },
      };
    case Types.HIDE_MODAL_FAMILY:
      return {
        ...state,
        show_family: { id: 0, visible: false },
        group_familiar: [],
      };

    case Types.SHOW_MODAL_NEW_FAMILIAR:
      return {
        ...state,
        create_family: { visible: true, id: state.show_family.id },
      };

    case Types.HIDE_MODAL_NEW_FAMILIAR:
      return {
        ...state,
        create_family: { visible: false },
      };

    case Types.SHOW_MODAL_UPDATE_FAMILY:
      return {
        ...state,
        update_family: { data: action.payload.data, visible: true },
      };

    case Types.HIDE_MODAL_UPDATE_FAMILY:
      return {
        ...state,
        update_family: { data: {}, visible: false },
      };

    case Types.READ_GROUP_FAMILIAR_SUCCESS:
      return {
        ...state,
        group_familiar: action.payload.familiar,
        loading: false,
      };

    case Types.CREATE_FAMILY_SUCCESS:
      return {
        ...state,
        group_familiar: [...state.group_familiar, action.payload.family],
      };

    case Types.DELETE_FAMILY_SUCCESS:
      return {
        ...state,
        group_familiar: [
          ...state.group_familiar.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    case Types.UPDATE_FAMILY_SUCCESS:
      return {
        ...state,
        group_familiar: update(state.group_familiar, action.payload.family),
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalFamily: (id) => ({
    type: Types.SHOW_MODAL_FAMILY,
    payload: {
      id,
    },
  }),

  hideModalFamily: () => ({
    type: Types.HIDE_MODAL_FAMILY,
  }),

  showModalNewFamiliar: () => ({
    type: Types.SHOW_MODAL_NEW_FAMILIAR,
  }),

  hideModalNewFamiliar: () => ({
    type: Types.HIDE_MODAL_NEW_FAMILIAR,
  }),

  showModalUpdateFamily: (data) => ({
    type: Types.SHOW_MODAL_UPDATE_FAMILY,
    payload: { data },
  }),
  hideModalUpdateFamily: () => ({
    type: Types.HIDE_MODAL_UPDATE_FAMILY,
  }),

  readGroupFamiliarRequest: (id) => ({
    type: Types.READ_GROUP_FAMILIAR_REQUEST,
    payload: {
      id,
    },
  }),

  readGroupFamiliarSuccess: (familiar) => ({
    type: Types.READ_GROUP_FAMILIAR_SUCCESS,
    payload: {
      familiar,
    },
  }),

  createFamilyRequest: (family) => ({
    type: Types.CREATE_FAMILY_REQUEST,
    payload: {
      family,
    },
  }),

  createFamilySuccess: (family) => ({
    type: Types.CREATE_FAMILY_SUCCESS,
    payload: {
      family,
    },
  }),

  readFamilyRequest: (id) => ({
    type: Types.READ_FAMILY_REQUEST,
    payload: {
      id,
    },
  }),

  deleteFamilyRequest: (id) => ({
    type: Types.DELETE_FAMILY_REQUEST,
    payload: {
      id,
    },
  }),

  deleteFamilySuccess: (id) => ({
    type: Types.DELETE_FAMILY_SUCCESS,
    payload: {
      id,
    },
  }),

  readFamilySuccess: (familiar) => ({
    type: Types.READ_FAMILY_SUCCESS,
    payload: {
      familiar,
    },
  }),

  updateFamilyRequest: (family) => ({
    type: Types.UPDATE_FAMILY_REQUEST,
    payload: {
      family,
    },
  }),

  updateFamilySuccess: (family) => ({
    type: Types.UPDATE_FAMILY_SUCCESS,
    payload: {
      family,
    },
  }),
};

function update(items, obj) {
  const index = items.findIndex((item) => item.id === obj.id);
  return [...items.slice(0, index), { ...obj }, ...items.slice(index + 1)];
}
