import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reduxLogger from 'redux-logger';
import history from 'src/routes/history';

import rootSaga from './modules/rootSagas';
import rootReducer from './modules/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer(history),
  applyMiddleware(sagaMiddleware, reduxLogger),
);
sagaMiddleware.run(rootSaga);

export default store;
