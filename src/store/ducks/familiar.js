import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_NEW_FAMILIAR: "@familiar/SHOW_MODAL_NEW_FAMILIAR",
  HIDE_MODAL_NEW_FAMILIAR: "@familiar/HIDE_MODAL_NEW_FAMILIAR"
};

const INITIAL_STATE = Immutable({
  visible: false
});

export default function User(state = INITIAL_STATE, action) {
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
  })
};
