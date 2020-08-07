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

  READ_BOX_REQUEST: "@box/READ_BOX_REQUEST",
  READ_BOX_SUCCESS: "@box/READ_BOX_SUCCESS",
};

const INITIAL_STATE = Immutable({
  boxes: [],
  loading: true,
  erro: false,

  update_box: { data: {}, visible: false },
  create_box_visible: false,
});

export default function box(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_NEW_BOX:
      return {
        ...state,
        create_box_visible: true,
      };

    case Types.HIDE_MODAL_NEW_BOX:
      return {
        ...state,
        create_box_visible: false,
      };

    case Types.SHOW_MODAL_UPDATE_BOX:
      return {
        ...state,
        update_box: { data: action.payload.data, visible: true },
      };

    case Types.HIDE_MODAL_UPDATE_BOX:
      return {
        ...state,
        update_box: { data: {}, visible: false },
      };

    case Types.READ_BOX_SUCCESS:
      return {
        ...state,
        boxes: action.payload.boxes,
        loading: false,
      };

    case Types.DELETE_BOX_SUCCESS:
      return {
        ...state,
        boxes: [
          ...state.boxes.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    case Types.CREATE_BOX_SUCCESS:
      return {
        ...state,
        boxes: [...state.boxes, action.payload.box],
      };

    case Types.UPDATE_BOX_SUCCESS:
      return {
        ...state,
        boxes: updateAccount(state.boxes, action.payload.box),
      };

    default:
      return state;
  }
}

export const Creators = {
  /* Modal */

  showModalNewBox: () => ({
    type: Types.SHOW_MODAL_NEW_BOX,
  }),

  hideModalNewBox: () => ({
    type: Types.HIDE_MODAL_NEW_BOX,
  }),

  showModalUpdateBox: (data) => ({
    type: Types.SHOW_MODAL_UPDATE_BOX,
    payload: { data },
  }),

  hideModalUpdateBox: () => ({
    type: Types.HIDE_MODAL_UPDATE_BOX,
  }),

  /* CRUD */

  readBoxRequest: () => ({
    type: Types.READ_BOX_REQUEST,
  }),

  readBoxSuccess: (boxes) => ({
    type: Types.READ_BOX_SUCCESS,
    payload: { boxes },
  }),

  deleteBoxRequest: (id) => ({
    type: Types.DELETE_BOX_REQUEST,
    payload: {
      id,
    },
  }),
  deleteBoxSuccess: (id) => ({
    type: Types.DELETE_BOX_SUCCESS,
    payload: {
      id,
    },
  }),

  createBoxRequest: (box) => ({
    type: Types.CREATE_BOX_REQUEST,
    payload: { box },
  }),

  createBoxSuccess: (box) => ({
    type: Types.CREATE_BOX_SUCCESS,
    payload: { box },
  }),

  updateBoxRequest: (box, objUpdated) => ({
    type: Types.UPDATE_BOX_REQUEST,
    payload: {
      box,
      objUpdated,
    },
  }),

  updateBoxSuccess: (box) => ({
    type: Types.UPDATE_BOX_SUCCESS,
    payload: {
      box,
    },
  }),
};

function updateAccount(items, account) {
  const index = items.findIndex((item) => item.id === account.id);
  return [...items.slice(0, index), { ...account }, ...items.slice(index + 1)];
}
