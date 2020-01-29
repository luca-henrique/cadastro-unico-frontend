import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_NEW_BOX: "@box/SHOW_MODAL_NEW_BOX",
  HIDE_MODAL_NEW_BOX: "@box/HIDE_MODAL_NEW_BOX",

  CREATE_BOX_REQUEST: "@box/CREATE_BOX_REQUEST",
  CREATE_BOX_SUCCESS: "@box/CREATE_BOX_SUCCESS",

  UPDATE_BOX_REQUEST: "@box/UPDATE_BOX_REQUEST",
  UPDATE_BOX_SUCCESS: "@box/UPDATE_BOX_SUCCESS",

  DELETE_BOX_REQUEST: "@box/DELETE_BOX_REQUEST",
  DELETE_BOX_SUCCESS: "@box/DELETE_BOX_SUCCESS",

  LOAD_ALL_BOXES: "@box/LOAD_ALL_BOXES"
};

const INITIAL_STATE = Immutable({
  id: null,
  box: {},
  boxes: {},
  visible: false
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

    case Types.CREATE_BOX_REQUEST: {
      return { ...state, box: action.payload.box };
    }

    case Types.CREATE_BOX_SUCCESS: {
      return { ...state, box: action.payload.box };
    }

    case Types.UPDATE_BOX_REQUEST: {
      return { ...state, box: action.payload.box };
    }

    case Types.UPDATE_BOX_SUCCESS: {
      return { ...state, box: action.payload.box };
    }

    case Types.DELETE_BOX_REQUEST: {
      return { ...state, id: action.payload.id };
    }

    case Types.UPDATE_BOX_SUCCESS: {
      return { ...state, box: action.payload.box };
    }

    case Types.LOAD_ALL_BOXES: {
      return { ...state, boxes: action.payload.boxes };
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
  loadAllBoxes: boxes => ({
    type: Types.LOAD_ALL_BOXES,
    payload: { boxes }
  })
};
