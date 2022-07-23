import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as toastrReducer} from 'react-redux-toastr';

import auth from './auth/reducer';
import user from './user/reducer';

export default (history) =>
  combineReducers({
    auth,
    user,

    router: connectRouter(history),
    toastr: toastrReducer,
  });
