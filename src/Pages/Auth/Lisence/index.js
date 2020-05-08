import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { Creators as LicenseCreators } from "../../../store/ducks/license";

import { Typography, Button, TextField } from "@material-ui/core/";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Logo from "../../../Assets/Images/empresalogo.png";
import Copyright from "../../Copyright/index";

import { Container } from "./styled";

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "#A4A4A4",
      borderWidth: 1,
    },
    "& input:invalid + fieldset": {
      borderColor: "#A4A4A4",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#A4A4A4",
      padding: "4px !important",
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  img: {
    [theme.breakpoints.down("sm")]: {
      width: "250px",
      height: "200px",
      marginTop: "5%",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "5%",
      width: "350px",
      height: "300px",
    },
  },

  subTitle: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "5%",
    },
  },

  form: {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "20%",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "20px",
      zheight: "300px",
      width: "400px",
    },
  },
}));

export default function () {
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
    <Container>
      <div className={classes.img}>
        <img src={Logo} width="100%" height="100%" alt="Cadastro único" />
      </div>
      <div style={{ width: "100%" }} className={classes.subTitle}>
        <Typography variant="h5" color="textSecondary" align="center">
          Chave de acesso
        </Typography>
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={classes.form}
        onSubmit={verification}
      >
        <ValidationTextField
          variant="outlined"
          required
          size="small"
          fullWidth
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          style={{ width: "100%" }}
        />
        <Button
          variant="contained"
          type="submit"
          style={{
            width: "100%",
            marginTop: "15px",
            backgroundColor: "#04B4AE",
            color: "#ffffff",
          }}
        >
          Verificar
        </Button>
      </form>
      <div
        style={{
          position: "absolute",
          bottom: "8px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Copyright />
      </div>
    </Container>
  );
}
