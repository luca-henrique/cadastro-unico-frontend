import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import Routes from 'src/routes';
import GlobalStyle from './style/global';
import ReduxToastr from 'react-redux-toastr';

import store from 'src/store';

import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
      <ReduxToastr />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
