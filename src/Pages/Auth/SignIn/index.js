import React, { useState } from "react";

import { Form, Container } from "../../Components/Style/";

import Logo from "../../../Assets/Images/cadunico.png";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AuthActions from "../../../store/ducks/auth";
import { Creators as UserCreators } from "../../../store/ducks/user";

import { Typography, Link, TextField, Button } from "@material-ui/core/";

import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#F4D03F",
    backgroundImage: "linear-gradient(132deg, #F4D03F 10%, #02632c 100%)",
    width: "100%",
    height: "100%"
  },

  img: {
    width: "450px",
    height: "200",
    marginTop: "40px"
  },
  title: {
    marginBottom: "30px"
  },
  typography: {
    color: "rgba(2,99,44,0.7)"
  },
  button: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "100%"
  },
  signIn: {
    width: "100%",
    marginTop: "15px"
  }
}));

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
      borderColor: "#02632c",
      borderLeftWidth: 6,
      padding: "4px !important" // override inline-style
    }
  }
})(TextField);

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

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  function handleSubmit(e) {
    e.preventDefault();
    const { signInRequest } = props;

    signInRequest(email, password);
  }

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
            onChange={e => setEmail(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AuthActions, ...UserCreators }, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);

/**
 * <Form onSubmit={handleSubmit}>
        <div>
          <label style={{ color: "#fff" }}>E-mail:</label>
          <input
            type="text"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label style={{ color: "#fff" }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Entrar</button>
      </Form>
      <footer
        style={{
          textAlign: "center",
          color: "rgb(2, 99, 44)"
        }}
      >
        <h4>
          © {new Date().getFullYear()} Copyright:
          <a
            style={{
              textDecoration: "none",
              fontSize: "16px",
              paddingLeft: "3px",
              color: "inherit"
            }}
            href="https://ctmconsultoria.com/"
          >
            C.T.M Consultoria
          </a>
        </h4>
      </footer>
 * 
 * 
 */
