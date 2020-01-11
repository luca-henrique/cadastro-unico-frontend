import Immutable from "seamless-immutable";

export const Types = {
  /* NOVO USER */
  SHOW_NEW_MODAL_USER: "@user/SHOW_NEW_MODAL_USER",
  HIDE_NEW_MODAL_USER: "@user/HIDE_NEW_MODAL_USER"
};

const INITIAL_STATE = Immutable({
  isVisible: false,
  users: {}
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_NEW_MODAL_USER:
      return {
        ...state,
        isVisible: true
      };
    case Types.HIDE_NEW_MODAL_USER:
      return {
        ...state,
        isVisible: false
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalNewUser: () => ({
    type: Types.SHOW_NEW_MODAL_USER
  }),

  hideModalNewUser: () => ({
    type: Types.HIDE_NEW_MODAL_USER
  })
};
