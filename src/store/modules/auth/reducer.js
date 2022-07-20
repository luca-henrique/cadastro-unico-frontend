import {produce} from 'immer';
import Types from './types';

const INITIAL_STATE = {
  token: JSON.parse(localStorage.getItem('token')),
  loading: false,
};

function Auth(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.SIGN_IN_REQUEST: {
      return produce(state, (draft) => {
        draft.loading = true;
      });
    }

    case Types.SIGN_IN_SUCCESS: {
      return produce(state, (draft) => {
        console.log(actions);
        draft.loading = false;
        draft.token = actions.data;
      });
    }

    default:
      return state;
  }
}
export default Auth;
