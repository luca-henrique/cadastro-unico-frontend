import React, { useState } from "react";

import { Typography, Link, Button, TextField } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import Logo from "../../../Assets/Images/empresalogo.png";

import { Creators as LicenseCreators } from "../../../store/ducks/license";

import { useSelector, useDispatch } from "react-redux";

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

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "#A4A4A4",
      borderWidth: 1
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#088A85",
      padding: "4px !important" // override inline-style
    }
  }
})(TextField);

export default function() {
  const [token, setToken] = useState("");

  const dispatch = useDispatch();

  function verification(e) {
    e.preventDefault();
    dispatch(LicenseCreators.verificationToken(token));
  }

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
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
          alignItems: "center",
          height: "300px",
          width: "400px"
        }}
        onSubmit={verification}
      >
        <div style={{ width: "250px", height: "200px", marginBottom: "30px" }}>
          <img src={Logo} width="100%" height="100%" alt="Cadastro único" />
        </div>
        <Typography
          variant="h4"
          color="textSecondary"
          align="center"
          style={{ paddingBottom: "20px" }}
        >
          Chave de acesso
        </Typography>
        <ValidationTextField
          variant="outlined"
          size="small"
          fullWidth
          type="text"
          style={{ margin: "5px" }}
          value={token}
          onChange={e => setToken(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          style={{
            width: "60%",
            marginTop: "10px",
            marginBottom: "15px",
            backgroundColor: "#04B4AE",
            color: "#BDBDBD"
          }}
        >
          Enviar
        </Button>
      </form>
      {Copyright()}
    </div>
  );
}
