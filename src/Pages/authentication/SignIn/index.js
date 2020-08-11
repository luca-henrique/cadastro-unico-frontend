import React, { useState, useEffect } from "react";

import AuthActions from "~/store/ducks/auth";
import { Creators as LicenseCreators } from "../../../store/ducks/license";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Typography, TextField, Button } from "@material-ui/core/";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { Form, Container } from "../../Components/Style/";
import Logo from "../../../Assets/Images/cadunico.png";

import Copyright from "../../Components/Copyright";

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "#A4A4A4",
      borderWidth: 1,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#02632c",
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  function handleSubmit(e) {
    e.preventDefault();
    const { signInRequest } = props;
    signInRequest(email, password);
  }

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Container className={classes.container}>
      <div className={classes.img}>
        <img src={Logo} width="100%" height="100%" alt="Cadastro único" />
      </div>
      <Form onSubmit={handleSubmit}>
        <div className={classes.title}>
          <Typography variant="h3" className={classes.typography}>
            Entrar
          </Typography>
        </div>
        <div className={classes.button}>
          <Typography variant="button" className={classes.typography}>
            Email
          </Typography>
          <ValidationTextField
            variant="outlined"
            size="small"
            fullWidth
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.button}>
          <Typography variant="button" className={classes.typography}>
            Senha
          </Typography>
          <ValidationTextField
            variant="outlined"
            size="small"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={classes.signIn}>
          <Button
            variant="contained"
            fullWidth
            className={classes.title}
            type="submit"
          >
            Entrar
          </Button>
        </div>
      </Form>
      <div>
        <Copyright />
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  redux: state,
});

// Ações
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...LicenseCreators, ...AuthActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#F4D03F",
    backgroundImage: "linear-gradient(132deg, #F4D03F 10%, #02632c 100%)",
    width: "100%",
    height: "100%",
  },

  img: {
    width: "450px",
    height: "200",
    marginTop: "40px",

    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
    [theme.breakpoints.up("md")]: {
      width: "500px",
    },
    [theme.breakpoints.up("lg")]: {},
  },
  title: {
    marginBottom: "30px",
  },
  typography: {
    color: "rgba(2,99,44,0.7)",
  },
  button: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "100%",
  },
  signIn: {
    width: "100%",
    marginTop: "15px",
  },
}));
