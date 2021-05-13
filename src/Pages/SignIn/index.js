import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import AuthActions from "~/store/ducks/auth";

import ContainerInput from "~/components/ContainerInput";
import Typography from "~/components/Typography";
import Copyright from "~/components/Copyright";
import Button from "~/components/Button";
import LogoImg from "~/assets/Images/logocadastrounico.png";

import { Container, Form } from "./style";

const useStyles = makeStyles((theme) => ({
  img: {
    [theme.breakpoints.up("md")]: {
      width: "700px",
      height: "230px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "250px",
      height: "150px",
      marginBottom: "15px",
    },
  },
}));

export default () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthActions.signInRequest(email, password));
  };

  return (
    <Container>
      <img
        src={LogoImg}
        width="100%"
        height="100%"
        alt="Cadastro único"
        className={classes.img}
      />

      <Form onSubmit={handleSubmit}>
        <Typography variant="h3" label="Entrar" />

        <ContainerInput
          label="Email:"
          value={email}
          onChange={setEmail}
          type="email"
          required={true}
        />

        <ContainerInput
          label="Senha:"
          value={password}
          onChange={setPassword}
          type="password"
          required={true}
        />

        <Button variant="contained" fullWidth type="submit" label="Entrar" />
      </Form>

      <Copyright />
    </Container>
  );
};
