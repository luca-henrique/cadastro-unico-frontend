import React from "react";
import ReactDOM from "react-dom";

import Log from "./Pages/Owner/log";

const Main = () => {
  const ComponentA = () =>
    ReactDOM.createPortal(<Log />, document.getElementById("log-portal"));

  return <ComponentA />;
};

export default Main;
