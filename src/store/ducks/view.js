import Immutable from "seamless-immutable";

/**
 * Alterar pagina redenrizada
 */

export const Types = {
  CHANGER_VIEW_USER: "@user/CHANGER_VIEW_USER"
};

const INITIAL_STATE = Immutable({
  type: "default"
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHANGER_VIEW_USER:
      return { ...state, type: action.payload.type };
    default:
      return state;
  }
}

export const Creators = {
  changerView: type => ({
    type: Types.CHANGER_VIEW_USER,
    payload: {
      type
    }
  })
};
