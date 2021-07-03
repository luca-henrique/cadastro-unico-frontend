import React from "react";

import Circular from "@material-ui/core/CircularProgress";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div>
        <Circular style={{ color: "rgb(2, 90, 10)" }} />
      </div>
    </div>
  );
};

export default Loader;
