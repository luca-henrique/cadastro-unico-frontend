import Immutable from "seamless-immutable";

export const Types = {
  CREATE_PROFILE_REQUEST: "@profile/CREATE_PROFILE_REQUEST",
  CREATE_PROFILE_SUCESS: "@profile/CREATE_PROFILE_SUCESS",

  UPDATE_PROFILE_REQUEST: "@profile/UPDATE_PROFILE_REQUEST",
  UPDATE_PROFILE_SUCESS: "@profile/UPDATE_PROFILE_SUCESS",

  LOAD_PROFILE_REQUEST: "@profile/LOAD_PROFILE_REQUEST",
  LOAD_PROFILE_SUCESS: "@profile/LOAD_PROFILE_SUCESS",

  FAIL_LOAD_PROFILE: "@profile/FAIL_LOAD_PROFILE"
};

const INITIAL_STATE = Immutable({
  profile: {},
  exist: false
});

export default function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_PROFILE_REQUEST:
      return {
        ...state,
        profile: action.payload.profile
      };

    case Types.CREATE_PROFILE_SUCESS:
      return {
        ...state,
        profile: action.payload.profile
      };
    case Types.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        profile: action.payload.profile
      };

    case Types.UPDATE_PROFILE_SUCESS:
      return {
        ...state,
        profile: action.payload.profile
      };

    case Types.LOAD_PROFILE_SUCESS:
      return {
        ...state,
        profile: action.payload.profile
      };
    case Types.FAIL_LOAD_PROFILE:
      return {
        ...state,
        exist: action.payload.exist
      };

    default:
      return state;
  }
}

export const Creators = {
  createProfileRequest: profile => ({
    type: Types.CREATE_PROFILE_REQUEST,
    payload: { profile }
  }),
  createProfileSucess: profile => ({
    type: Types.CREATE_PROFILE_SUCESS,
    payload: { profile }
  }),
  updateProfileRequest: profile => ({
    type: Types.UPDATE_PROFILE_REQUEST,
    payload: { profile }
  }),
  updateProfileSucess: profile => ({
    type: Types.UPDATE_PROFILE_SUCESS,
    payload: { profile }
  }),
  loadProfileRequest: () => ({
    type: Types.LOAD_PROFILE_REQUEST
  }),
  loadProfileSucess: profile => ({
    type: Types.LOAD_PROFILE_SUCESS,
    payload: {
      profile
    }
  }),
  failLoadProfile: exist => ({
    type: Types.FAIL_LOAD_PROFILE,
    payload: {
      exist
    }
  })
};
