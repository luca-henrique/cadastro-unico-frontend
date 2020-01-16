import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_NEW_PASTE: "@paste/SHOW_MODAL_NEW_PASTE",
  HIDE_MODAL_NEW_PASTE: "@paste/HIDE_MODAL_NEW_PASTE"
};

const INITIAL_STATE = Immutable({
  visible: false
});

export default function User(state = INITIAL_STATE, action) {
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
  })
};
