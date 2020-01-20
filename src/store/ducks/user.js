import Immutable from "seamless-immutable";
import { createActions, createReducer } from "reduxsauce";

/*
export const Types = {
  NOVO USER 
  SHOW_NEW_VIEW: "@user/SHOW_NEW_VIEW",
  HIDE_NEW_VIEW: "@user/HIDE_NEW_VIEW",

  LOAD_USER_REQUEST: "@user/LOAD_USER_REQUEST",
  LOAD_USER_SUCCESS: "@user/LOAD_USER_SUCCESS",

  SET_PROFILE: "@user/SET_PROFILE"
};
*/

/*
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
  }),

  loadUserRequest: () => ({
    type: Types.LOAD_USER_REQUEST
  }),

  loadUserSuccess: user => ({
    type: Types.LOAD_USER_SUCCESS,
    payload: { user }
  })
};



*/

export const { Types, Creators } = createActions({
  show: ["type"],
  hide: [],
  setProfile: ["profile"],
  loadUserRequest: [],
  loadUserSuccess: ["user"]
});

console.log(Types);

console.log(Creators);

const show = (state = INITIAL_STATE, action) => [...state];

const INITIAL_STATE = Immutable({
  show: { visible: false, type: "default" },
  profile: { data: {} },
  address: {},
  contact: {},
  login: {},
  user: {}
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_NEW_VIEW:
      return {};
    case Types.HIDE_NEW_VIEW:
      return {
        ...state,
        show: { visible: false }
      };

    case Types.LOAD_USER_SUCCESS:
      return { ...state, user: action.payload.user };

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
