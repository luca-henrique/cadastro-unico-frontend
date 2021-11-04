import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import { PersistGate } from "redux-persist/integration/react";

import Routes from "../src/routes/index";

import { store, persistor } from "./store";

import "./config/ReactotronConfig";

import GlobalStyle from "./style/global";
import "./index.css";

const Providers = (props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{props.children}</PersistGate>
    </Provider>
  );
};

ReactDOM.render(
  <Providers store={store}>
    <Fragment>
      <Routes />
      <GlobalStyle />
      <ReduxToastr />
    </Fragment>
  </Providers>,
  document.getElementById("root")
);
