import React from "react";

import Logo from "assets/Images/logo-cadastro-unico.png";

import { SignInContainer } from "../../components/template/Layout";
import { Image } from "../../components/atoms";
import { ImageContainer } from "./style";

import Form from "../../components/molecules/FormLogin/";
import Copyright from "../../components/molecules/Copyright";

export default () => {
  return (
    <SignInContainer justify={"space-around"}>
      <ImageContainer>
        <Image src={Logo} width="100%" height="100%" alt="Cadastro único" />
      </ImageContainer>

      <Form />

      <Copyright />
    </SignInContainer>
  );
};
