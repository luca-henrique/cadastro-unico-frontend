import Immutable from "seamless-immutable";
import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = Immutable({
  show: { visible: false, type: "default" },
  profile: { data: {} },
  address: {},
  contact: {},
  login: {},
  user: {}
});

export const { Types, Creators } = createActions({
  show: ["type"],
  hide: [],
  setProfile: ["profile"],
  loadUserRequest: [],
  loadUserSuccess: ["user"]
});

const showView = (state = INITIAL_STATE, action) => [
  ...state,
  console.log(state)
];

const hideView = (state = INITIAL_STATE, action) => [
  ...state,
  { show: { visible: false } }
];

const profile = (state = INITIAL_STATE, action) => [
  ...state,
  { profile: { data: action.profile } }
];

const loadUser = (state = INITIAL_STATE, action) => [
  ...state,
  { user: action.user }
];

console.log(Types);
console.log(Creators);

export const UsersTypes = Types;

export default createReducer(INITIAL_STATE, {
  [Types.SHOW]: showView,
  [Types.HIDE]: hideView,
  [Types.SET_PROFILE]: profile,
  [Types.LOAD_USER_REQUEST]: loadUser
});
