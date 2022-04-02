import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reduxLogger from 'redux-logger';
import history from 'src/route/history';

import {composeWithDevTools} from '@redux-devtools/extension';
import rootSaga from './modules/rootSagas';
import rootReducer from './modules/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer(history),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? composeWithDevTools(applyMiddleware(sagaMiddleware, reduxLogger))
    : applyMiddleware(sagaMiddleware, reduxLogger),
);
sagaMiddleware.run(rootSaga);

export default store;
