import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_NEW_FUNCIONARIO: "@funcionario/SHOW_MODAL_NEW_FUNCIONARIO",
  HIDE_MODAL_NEW_FUNCIONARIO: "@funcionario/HIDE_MODAL_NEW_FUNCIONARIO"
};

const INITIAL_STATE = Immutable({
  visible: false
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_NEW_FUNCIONARIO:
      return {
        ...state,
        visible: true
      };
    case Types.HIDE_MODAL_NEW_FUNCIONARIO:
      return {
        ...state,
        visible: false
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalNewFuncionario: funcionario => ({
    type: Types.SHOW_MODAL_NEW_FUNCIONARIO
  }),
  hideModalNewFuncionario: () => ({
    type: Types.HIDE_MODAL_NEW_FUNCIONARIO
  })
};
