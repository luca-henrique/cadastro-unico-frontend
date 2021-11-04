import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import {PersistGate} from 'redux-persist/integration/react';

import Routes from '../src/routes/index';

import {store, persistor} from './store';

import './config/ReactotronConfig';

import GlobalStyle from './style/global';
import './index.css';

// eslint-disable-next-line react/prop-types
const Providers = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

Providers.PropTypes = {
  children: PropTypes.elementType,
};

ReactDOM.render(
  <Providers store={store}>
    <Fragment>
      <Routes />
      <GlobalStyle />
      <ReduxToastr />
    </Fragment>
  </Providers>,
  document.getElementById('root'),
);
