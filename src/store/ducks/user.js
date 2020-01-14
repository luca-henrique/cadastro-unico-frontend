import Immutable from "seamless-immutable";

export const Types = {
  /* NOVO USER */
  SHOW_NEW_VIEW: "@user/SHOW_NEW_VIEW",
  HIDE_NEW_VIEW: "@user/HIDE_NEW_VIEW",

  SET_PROFILE: "@user/SET_PROFILE"
};

const INITIAL_STATE = Immutable({
  show: { visible: false, type: "default" },
  profile: { data: {} },
  address: {},
  contact: {},
  login: {}
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

    case Types.SET_PROFILE: {
      return {
        ...state,
        profile: { data: action.payload.profile }
      };
    }

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
  }),
  setProfile: profile => ({
    type: Types.SET_PROFILE,
    payload: {
      profile
    }
  })
};
