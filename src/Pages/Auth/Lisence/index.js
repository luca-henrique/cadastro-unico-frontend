import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { Creators as LicenseCreators } from "../../../store/ducks/license";

import { Typography, Button, TextField } from "@material-ui/core/";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Logo from "../../../Assets/Images/empresalogo.png";
import Copyright from "../../Copyright/index";

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
      padding: "4px !important"
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  main: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      width: "90%",
      height: "80%"
    },
    [theme.breakpoints.up("md")]: {
      height: "300px",
      width: "400px"
    }
  }
}));

export default function() {
  const [token, setToken] = useState("");

  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LicenseCreators.requestToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function verification(e) {
    e.preventDefault();

    dispatch(LicenseCreators.checkTokenAccess(token));
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
          alignItems: "center"
        }}
        className={classes.main}
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
          required
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
          Verificar
        </Button>
      </form>
      <Copyright />
    </div>
  );
}
