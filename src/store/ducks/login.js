import Immutable from "seamless-immutable";

export const Types = {
  SHOW_NEW_VIEW: "@login/SHOW_NEW_VIEW",
  HIDE_NEW_VIEW: "@login/HIDE_NEW_VIEW"
};

const INITIAL_STATE = Immutable({
  show: { visible: false }
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_NEW_VIEW:
      return {
        ...state,
        show: { visible: true }
      };
    case Types.HIDE_NEW_VIEW:
      return {
        ...state,
        show: { visible: false }
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalEmail: () => ({
    type: Types.SHOW_NEW_VIEW
  }),

  hideModalEmail: () => ({
    type: Types.HIDE_NEW_VIEW
  })
};
