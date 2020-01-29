import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_NEW_PASTE: "@paste/SHOW_MODAL_NEW_PASTE",
  HIDE_MODAL_NEW_PASTE: "@paste/HIDE_MODAL_NEW_PASTE",

  CREATE_PASTE_REQUEST: "@paste/CREATE_PASTE_REQUEST",
  CREATE_PASTE_SUCCESS: "@paste/CREATE_PASTE_SUCCESS",

  UPDATE_PASTE_REQUEST: "@paste/UPDATE_PASTE_REQUEST",
  UPDATE_PASTE_SUCCESS: "@paste/UPDATE_PASTE_SUCCESS",

  DELETE_PASTE_REQUEST: "@paste/DELETE_PASTE_REQUEST",
  DELETE_PASTE_SUCCESS: "@paste/DELETE_PASTE_SUCCESS",

  LOAD_ALL_PASTES: "@paste/LOAD_ALL_PASTES"
};

const INITIAL_STATE = Immutable({
  id: null,
  paste: {},
  pastes: {},
  visible: false
});

export default function pastes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_NEW_PASTE:
      return {
        ...state,
        visible: true
      };

    case Types.HIDE_MODAL_NEW_PASTE:
      return {
        ...state,
        visible: false
      };

    case Types.CREATE_PASTE_REQUEST: {
      return { ...state, paste: action.payload.paste };
    }

    case Types.CREATE_PASTE_SUCCESS: {
      return { ...state, paste: action.payload.paste };
    }

    case Types.UPDATE_PASTE_REQUEST: {
      return { ...state, paste: action.payload.paste };
    }

    case Types.UPDATE_PASTE_SUCCESS: {
      return { ...state, paste: action.payload.paste };
    }

    case Types.DELETE_PASTE_REQUEST: {
      return { ...state, id: action.payload.id };
    }

    case Types.UPDATE_PASTE_SUCCESS: {
      return { ...state, paste: action.payload.paste };
    }

    case Types.LOAD_ALL_PASTES: {
      return { ...state, pastes: action.payload.pastes };
    }

    default:
      return state;
  }
}

export const Creators = {
  showModalNewPaste: () => ({
    type: Types.SHOW_MODAL_NEW_PASTE
  }),
  hideModalNewPaste: () => ({
    type: Types.HIDE_MODAL_NEW_PASTE
  }),
  createPasteRequest: paste => ({
    type: Types.CREATE_PASTE_REQUEST,
    payload: { paste }
  }),
  createPasteSuccess: paste => ({
    type: Types.CREATE_PASTE_SUCCESS,
    payload: { paste }
  }),
  updatePasteRequest: paste => ({
    type: Types.UPDATE_PASTE_REQUEST,
    payload: { paste }
  }),
  updatePasteSuccess: paste => ({
    type: Types.UPDATE_PASTE_SUCCESS,
    payload: { paste }
  }),
  deletePasteRequest: id => ({
    type: Types.DELETE_PASTE_REQUEST,
    payload: { id }
  }),
  deletePasteSuccess: paste => ({
    type: Types.DELETE_PASTE_SUCCESS,
    payload: { paste }
  }),
  loadAllPastes: pastes => ({
    type: Types.LOAD_ALL_PASTES,
    payload: { pastes }
  })
};
