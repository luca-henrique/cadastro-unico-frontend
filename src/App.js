import React, { Fragment } from "react";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import Routes from "./Routes/index";

import store from "./store";

import "./config/ReactotronConfig";

import GlobalStyle from "./Styles/global";

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <GlobalStyle />

      <ReduxToastr />
    </Fragment>
  </Provider>
);

export default App;
