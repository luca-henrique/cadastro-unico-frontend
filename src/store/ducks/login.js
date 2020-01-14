import Immutable from "seamless-immutable";

export const Types = {
  /* NOVO login */
  SHOW_NEW_VIEW: "@login/SHOW_NEW_VIEW",
  HIDE_NEW_VIEW: "@login/HIDE_NEW_VIEW",

  SET_EMAIL: "@login/SET_EMAIL",
  SET_PASSWORD: "@login/SET_PASSWORD"
};

const INITIAL_STATE = Immutable({
  show: { visible: false },
  email: "",
  password: ""
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

    case Types.SET_EMAIL: {
      return {
        ...state,
        email: action.payload.email
      };
    }
    case Types.SET_PASSWORD: {
      return {
        ...state,
        password: action.payload.password
      };
    }

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
  }),
  changerEmail: email => ({
    type: Types.SET_EMAIL,
    payload: {
      email: email
    }
  }),
  changerPassword: password => ({
    type: Types.SET_PASSWORD,
    payload: {
      password
    }
  })
};
