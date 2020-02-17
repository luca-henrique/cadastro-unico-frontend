import React from "react";

import { Typography, Link } from "@material-ui/core/";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://ctmconsultoria.com/index.html">
        CTM consultoria
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        width: "100%",
        height: "100%"
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <label>Informe o token</label>
        <input></input>
        <button>Enviar</button>
        {Copyright()}
      </form>
    </div>
  );
}
