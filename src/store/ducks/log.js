import Immutable from "seamless-immutable";

export const Types = {
  READ_LOG_REQUEST: "@log/READ_LOG_REQUEST",
  READ_LOG_SUCCESS: "@log/READ_LOG_SUCCESS"
};

const INITIAL_STATE = Immutable({
  log: {},
  fail: false
});

export default function log(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.READ_LOG_SUCCESS:
      return {
        ...state,
        log: action.payload.log
      };

    default:
      return state;
  }
}

export const Creators = {
  readLogRequest: () => ({
    type: Types.READ_LOG_REQUEST
  }),
  readLogSuccess: log => ({
    type: Types.READ_LOG_SUCCESS,
    payload: { log }
  })
};
