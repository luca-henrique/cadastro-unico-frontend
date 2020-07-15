import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_LOG: "@log/SHOW_MODAL_LOG",
  HIDE_MODAL_LOG: "@log/HIDE_MODAL_LOG",

  READ_LOG_REQUEST: "@log/READ_LOG_REQUEST",
  READ_LOG_SUCCESS: "@log/READ_LOG_SUCCESS",
};

const INITIAL_STATE = Immutable({
  log: {},
  open: false,
  loading: true,
});

export default function log(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_LOG:
      return {
        ...state,
        open: true,
      };
    case Types.HIDE_MODAL_LOG:
      return {
        ...state,
        open: false,
      };
    case Types.READ_LOG_SUCCESS:
      return {
        ...state,
        log: action.payload.log,
        loading: false,
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalLog: () => ({
    type: Types.SHOW_MODAL_LOG,
  }),
  hideModalLog: () => ({
    type: Types.HIDE_MODAL_LOG,
  }),
  readLogRequest: () => ({
    type: Types.READ_LOG_REQUEST,
  }),
  readLogSuccess: (log) => ({
    type: Types.READ_LOG_SUCCESS,
    payload: { log },
  }),
};
