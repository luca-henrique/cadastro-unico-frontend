import React, { useState } from "react";

import { useDispatch } from "react-redux";
import AuthActions from "~/store/ducks/auth";

import { SignInContainer } from "~/components/template/Layout";
import {
  Button,
  Form,
  Input,
  Title,
  SubTitle,
  StyledButton,
} from "~/components/atoms/";

import Logo from "~/assets/Images/logo-cadastro-unico.png";

import Copyright from "~/containers/Copyright";

import {
  ImageContainer,
  RecoveryContainer,
  ButtonContainer,
  ContainerInputs,
} from "./style";

export default () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthActions.signInRequest(email, password));
  };

  return (
    <SignInContainer justify={"space-around"}>
      <ImageContainer>
        <img src={Logo} width="100%" height="100%" alt="Cadastro único" />
      </ImageContainer>

      <Form
        onSubmit={handleSubmit}
        width="500"
        height="400"
        border={10}
        padding={20}
        justify={"space-around"}
      >
        <Title variant="h3" label="Entrar" />

        <ContainerInputs>
          <Input
            label="Email"
            value={email}
            onChange={setEmail}
            type="email"
            placeholder="Insira seu email"
            required
          />

          <ButtonContainer>
            <Input
              label="Senha"
              value={password}
              onChange={setPassword}
              type="password"
              placeholder="Insira sua senha"
              required={true}
            />
          </ButtonContainer>

          <RecoveryContainer>
            <SubTitle variant="subtitle2" label="Recuperar conta" />
          </RecoveryContainer>
        </ContainerInputs>

        <StyledButton
          variant="contained"
          fullWidth
          type="submit"
          label="Entrar"
        />
      </Form>

      <Copyright />
    </SignInContainer>
  );
};
