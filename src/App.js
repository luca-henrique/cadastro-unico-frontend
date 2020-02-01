import React, { Fragment } from "react";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import { PersistGate } from "redux-persist/integration/react";

import Routes from "./Routes/index";

import { store, persistor } from "./store";

import "./config/ReactotronConfig";

import GlobalStyle from "./Styles/global";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Fragment>
        <Routes />
        <GlobalStyle />

        <ReduxToastr />
      </Fragment>
    </PersistGate>
  </Provider>
);


export default App;
