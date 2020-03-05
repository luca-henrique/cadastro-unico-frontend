import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_FUNCIONARIO: "@funcionario/SHOW_MODAL_FUNCIONARIO",
  HIDE_MODAL_FUNCIONARIO: "@funcionario/HIDE_MODAL_FUNCIONARIO",

  SHOW_MODAL_NEW_FUNCIONARIO: "@funcionario/SHOW_MODAL_NEW_FUNCIONARIO",
  HIDE_MODAL_NEW_FUNCIONARIO: "@funcionario/HIDE_MODAL_NEW_FUNCIONARIO",

  CREATE_FUNCTIONARIO_REQUEST: "@funcionario/CREATE_FUNCIONARIO_REQUEST",
  CREATE_FUNCTIONARIO_SUCCESS: "@funcionario/CREATE_FUNCIONARIO_SUCCESS",

  DELETE_FUNCIONARIO_SUCCESSS: "@funcionario/DELETE_FUNCIONARIO_SUCCESS",

  LOAD_FUNCIONARIO_REQUEST: "@funcionario/LOAD_FUNCIONARIO_REQUEST",
  LOAD_FUNCIONARIO_SUCCESS: "@funcionario/LOAD_FUNCIONARIO_SUCCESS"
};

const INITIAL_STATE = Immutable({
  open: false,
  visible: false,
  funcionarios: {},
  funcionario: {}
});

export default function funcionarios(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_FUNCIONARIO:
      return {
        ...state,
        open: true
      };
    case Types.HIDE_MODAL_FUNCIONARIO:
      return {
        ...state,
        open: false
      };
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

    case Types.CREATE_FUNCTIONARIO_REQUEST:
      return {
        ...state,
        funcionario: action.payload.funcionario
      };

    case Types.CREATE_FUNCTIONARIO_SUCCESS:
      return {
        ...state,
        funcionario: action.payload.funcionario
      };

    case Types.DELETE_FUNCIONARIO_SUCCESSS:
      return {
        ...state,
        funcionario: action.payload.funcionario
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
  showModalFuncionario: () => ({
    type: Types.SHOW_MODAL_FUNCIONARIO
  }),
  hideModalFuncionario: () => ({
    type: Types.HIDE_MODAL_FUNCIONARIO
  }),

  showModalNewFuncionario: () => ({
    type: Types.SHOW_MODAL_NEW_FUNCIONARIO
  }),
  hideModalNewFuncionario: () => ({
    type: Types.HIDE_MODAL_NEW_FUNCIONARIO
  }),
  createFuncRequest: funcionario => ({
    type: Types.CREATE_FUNCTIONARIO_REQUEST,
    payload: {
      funcionario
    }
  }),
  createFuncSuccess: funcionario => ({
    type: Types.CREATE_FUNCTIONARIO_SUCCESS,
    payload: {
      funcionario
    }
  }),
  deleteFuncionarioSuccess: funcionario => ({
    type: Types.DELETE_FUNCIONARIO_SUCCESSS,
    payload: {
      funcionario
    }
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
