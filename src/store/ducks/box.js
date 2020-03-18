import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_NEW_BOX: "@box/SHOW_MODAL_NEW_BOX",
  HIDE_MODAL_NEW_BOX: "@box/HIDE_MODAL_NEW_BOX",

  SHOW_MODAL_UPDATE_BOX: "@box/SHOW_MODAL_UPDATE_BOX",
  HIDE_MODAL_UPDATE_BOX: "@box/HIDE_MODAL_UPDATE_BOX",

  CREATE_BOX_REQUEST: "@box/CREATE_BOX_REQUEST",
  CREATE_BOX_SUCCESS: "@box/CREATE_BOX_SUCCESS",

  UPDATE_BOX_REQUEST: "@box/UPDATE_BOX_REQUEST",
  UPDATE_BOX_SUCCESS: "@box/UPDATE_BOX_SUCCESS",

  DELETE_BOX_REQUEST: "@box/DELETE_BOX_REQUEST",
  DELETE_BOX_SUCCESS: "@box/DELETE_BOX_SUCCESS",

  READ_BOXES_REQUEST: "@box/READ_BOXES_REQUEST",
  READ_BOXES_SUCCESS: "@box/READ_BOXES_SUCCESS",

  READ_FAMILY_BOX_REQUEST: "@box/READ_FAMILY_BOX_REQUEST",
  READ_FAMILY_BOX_SUCCESS: "@box/READ_FAMILY_BOX_SUCCESS",

  SELECTED_BOX_REQUEST: "@box/SELECTED_BOX_REQUEST",
  SELECTED_BOX_SUCCESS: "@box/SELECTED_BOX_SUCCESS",

  SIZE_BOX_REQUEST: "@box/SIZE_BOX_REQUEST",
  SIZE_BOX_SUCCESS: "@box/SIZE_BOX_SUCCESS"
};

const INITIAL_STATE = Immutable({
  id: null,
  visible: false,

  box: {},

  createBox: {},
  updateBox: {},
  idDeleteBox: null,

  boxSize: { id: null, total: null },

  boxes: {}
});

export default function box(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_NEW_BOX:
      return {
        ...state,
        visible: true
      };

    case Types.HIDE_MODAL_NEW_BOX:
      return {
        ...state,
        visible: false
      };

    case Types.SHOW_MODAL_UPDATE_BOX:
      return {
        ...state,
        updateBox: { data: action.payload.data, visible: true }
      };

    case Types.HIDE_MODAL_UPDATE_BOX:
      return {
        ...state,
        updateBox: { data: {}, visible: false }
      };

    case Types.CREATE_BOX_REQUEST: {
      return { ...state, box: action.payload.box };
    }

    case Types.CREATE_BOX_SUCCESS: {
      return { ...state, box: action.payload.box };
    }

    case Types.UPDATE_BOX_REQUEST: {
      return { ...state, update: action.payload.box };
    }

    case Types.UPDATE_BOX_SUCCESS: {
      return { ...state, update: action.payload.box };
    }

    case Types.DELETE_BOX_REQUEST: {
      return { ...state, id: action.payload.id };
    }

    case Types.READ_BOXES_SUCCESS: {
      return { ...state, boxes: action.payload.boxes };
    }

    case Types.READ_FAMILY_BOX_REQUEST: {
      return { ...state, id: action.payload.id };
    }

    case Types.READ_FAMILY_BOX_SUCCESS: {
      return { ...state, families: action.payload.families };
    }

    case Types.SIZE_BOX_REQUEST: {
      return { ...state, boxSize: { id: action.payload.id } };
    }

    case Types.SIZE_BOX_SUCCESS: {
      return { ...state, boxSize: { total: action.payload.size } };
    }

    default:
      return state;
  }
}

export const Creators = {
  showModalNewBox: () => ({
    type: Types.SHOW_MODAL_NEW_BOX
  }),
  hideModalNewBox: () => ({
    type: Types.HIDE_MODAL_NEW_BOX
  }),
  showModalUpdateBox: data => ({
    type: Types.SHOW_MODAL_UPDATE_BOX,
    payload: { data }
  }),
  hideModalUpdateBox: () => ({
    type: Types.HIDE_MODAL_UPDATE_BOX
  }),
  createBoxRequest: box => ({
    type: Types.CREATE_BOX_REQUEST,
    payload: { box }
  }),
  createBoxSuccess: box => ({
    type: Types.CREATE_BOX_SUCCESS,
    payload: { box }
  }),
  updateBoxRequest: box => ({
    type: Types.UPDATE_BOX_REQUEST,
    payload: { box }
  }),
  updateBoxSuccess: box => ({
    type: Types.UPDATE_BOX_SUCCESS,
    payload: { box }
  }),
  deleteBoxRequest: id => ({
    type: Types.DELETE_BOX_REQUEST,
    payload: { id }
  }),
  deleteBoxSuccess: box => ({
    type: Types.DELETE_BOX_SUCCESS,
    payload: { box }
  }),
  readBoxesRequest: () => ({
    type: Types.READ_BOXES_REQUEST
  }),
  readBoxesSuccess: boxes => ({
    type: Types.READ_BOXES_SUCCESS,
    payload: { boxes }
  }),

  readPastesRequest: id => ({
    type: Types.READ_PASTES_BOX_REQUEST,
    payload: { id }
  }),
  readPastesSuccess: pastes => ({
    type: Types.READ_PASTES_BOX_SUCCESS,
    payload: { pastes }
  }),

  readFamiliesRequest: id => ({
    type: Types.READ_FAMILY_BOX_REQUEST,
    payload: { id }
  }),

  readFamiliesSuccess: families => ({
    type: Types.READ_FAMILY_BOX_SUCCESS,
    payload: { families }
  }),

  boxSelectedRequest: id => ({
    type: Types.SELECTED_BOX_REQUEST,
    payload: { id }
  }),

  boxSelectedSuccess: box => ({
    type: Types.SELECTED_BOX_SUCCESS,
    payload: { box }
  }),

  boxSizeRequest: id => ({
    type: Types.SIZE_BOX_REQUEST,
    payload: { id }
  }),
  boxSizeSuccess: size => ({
    type: Types.SIZE_BOX_SUCCESS,
    payload: { size }
  })
};
