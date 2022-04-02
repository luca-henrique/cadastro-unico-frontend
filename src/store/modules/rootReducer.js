import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import auth from './auth/reducer';
import user from './user/reducer';
import license from './license/reducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
  });
