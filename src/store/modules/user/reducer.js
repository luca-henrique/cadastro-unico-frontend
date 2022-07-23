import {produce} from 'immer';
import Types from './types';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

function Auth(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.READ_USER_REQUEST: {
      return produce(state, (draft) => {
        draft.loading = true;
      });
    }

    case Types.READ_USER_SUCCESS: {
      return produce(state, (draft) => {
        draft.loading = false;
        draft.data = actions.data;
      });
    }

    default:
      return state;
  }
}
export default Auth;
