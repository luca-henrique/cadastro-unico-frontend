import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_NEW_BOX: "@paste/SHOW_MODAL_NEW_BOX",
  HIDE_MODAL_NEW_BOX: "@paste/HIDE_MODAL_NEW_BOX"
};

const INITIAL_STATE = Immutable({
  visible: false
});

export default function User(state = INITIAL_STATE, action) {
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
  })
};
