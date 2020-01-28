import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_NEW_FUNCIONARIO: "@funcionario/SHOW_MODAL_NEW_FUNCIONARIO",
  HIDE_MODAL_NEW_FUNCIONARIO: "@funcionario/HIDE_MODAL_NEW_FUNCIONARIO",

  LOAD_FUNCIONARIO_REQUEST: "@funcionario/LOAD_FUNCIONARIO_REQUEST",
  LOAD_FUNCIONARIO_SUCCESS: "@funcionario/LOAD_FUNCIONARIO_SUCCESS"
};

const INITIAL_STATE = Immutable({
  funcionarios: {},
  visible: false
});

export default function funcionarios(state = INITIAL_STATE, action) {
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

    case Types.LOAD_FUNCIONARIO_SUCCESS:
      return {
        ...state,
        funcionarios: action.payload.funcionarios
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalNewFuncionario: () => ({
    type: Types.SHOW_MODAL_NEW_FUNCIONARIO
  }),
  hideModalNewFuncionario: () => ({
    type: Types.HIDE_MODAL_NEW_FUNCIONARIO
  }),
  loadFuncionarioRequest: () => ({
    type: Types.LOAD_FUNCIONARIO_REQUEST
  }),
  loadFuncionarioSuccess: funcionarios => ({
    type: Types.LOAD_FUNCIONARIO_SUCCESS,
    payload: {
      funcionarios
    }
  })
};
