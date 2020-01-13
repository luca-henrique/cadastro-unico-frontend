import Immutable from "seamless-immutable";

export const Types = {
  /* NOVO USER */
  SHOW_NEW_VIEW: "@user/SHOW_NEW_VIEW",
  HIDE_NEW_VIEW: "@user/HIDE_NEW_VIEW"
};

const INITIAL_STATE = Immutable({
  show: { visible: false, type: "default" },
  users: {}
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_NEW_VIEW:
      return {
        ...state,
        show: { visible: true, type: action.payload.type }
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
  show: type => ({
    type: Types.SHOW_NEW_VIEW,
    payload: {
      type
    }
  }),

  hide: () => ({
    type: Types.HIDE_NEW_VIEW
  })
};
