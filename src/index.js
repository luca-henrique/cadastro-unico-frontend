import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import Routes from 'src/routes';

import store from 'src/store';

import './config/ReactotronConfig';

import GlobalStyle from './style/global';
import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
