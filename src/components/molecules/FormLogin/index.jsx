import React, { useState } from "react";
import AuthActions from "../../../store/ducks/auth";
import { useDispatch } from "react-redux";

import {
  Form,
  Input,
  Title,
  SubTitle,
  StyledButton,
} from "../../atoms";

import { RecoveryContainer, ButtonContainer, ContainerInputs } from "./style";

const Index = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthActions.signInRequest(email, password));
  };

  return (
    <Form
      onSubmit={handleSubmit}
      width={500}
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
  );
};

export default Index;
