import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as toastrReducer} from 'react-redux-toastr';

import auth from './auth/reducer';

export default (history) =>
  combineReducers({
    auth,
    router: connectRouter(history),
    toastr: toastrReducer,
  });
