import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_NEW_PASTE: "@paste/SHOW_MODAL_NEW_PASTE",
  HIDE_MODAL_NEW_PASTE: "@paste/HIDE_MODAL_NEW_PASTE",

  SHOW_MODAL_UPDATE_PASTE: "@paste/SHOW_MODAL_UPDATE_PASTE",
  HIDE_MODAL_UPDATE_PASTE: "@paste/HIDE_MODAL_UPDATE_PASTE",

  CREATE_PASTE_REQUEST: "@paste/CREATE_PASTE_REQUEST",
  CREATE_PASTE_SUCCESS: "@paste/CREATE_PASTE_SUCCESS",

  READ_PASTES_REQUEST: "@pastes/READ_PASTES_REQUEST",
  READ_PASTES_SUCCESS: "@pastes/READ_PASTES_SUCCESS",

  UPDATE_PASTE_REQUEST: "@paste/UPDATE_PASTE_REQUEST",
  UPDATE_PASTE_SUCCESS: "@paste/UPDATE_PASTE_SUCCESS",

  DELETE_PASTE_REQUEST: "@paste/DELETE_PASTE_REQUEST",
  DELETE_PASTE_SUCCESS: "@paste/DELETE_PASTE_SUCCESS"
};

const INITIAL_STATE = Immutable({
  id: null,
  paste: {},
  pastes: {},
  updatePaste: { data: {}, visible: false },
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

    case Types.SHOW_MODAL_UPDATE_PASTE:
      return {
        ...state,
        updatePaste: { data: action.payload.data, visible: true }
      };

    case Types.HIDE_MODAL_UPDATE_PASTE: {
      return {
        ...state,
        updatePaste: { data: {}, visible: false }
      };
    }

    case Types.CREATE_PASTE_REQUEST: {
      return { ...state, paste: action.payload.paste };
    }

    case Types.CREATE_PASTE_SUCCESS: {
      return { ...state, paste: action.payload.paste };
    }

    case Types.READ_PASTES_SUCCESS: {
      return { ...state, pastes: action.payload.pastes };
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

    case Types.DELETE_PASTE_SUCCESS: {
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

  showModalUpdatePaste: data => ({
    type: Types.SHOW_MODAL_UPDATE_PASTE,
    payload: { data }
  }),
  hideModalUpdatePaste: () => ({
    type: Types.HIDE_MODAL_UPDATE_PASTE
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
  ReadPastesRequest: () => ({
    type: Types.READ_PASTES_REQUEST
  }),
  ReadPastesSuccess: pastes => ({
    type: Types.READ_PASTES_SUCCESS,
    payload: { pastes }
  })
};
