import React from 'react';

import Logo from 'src/asset/images/logo-cadastro-unico.png';

import {SignInContainer} from 'src/components/template/Layout';
import {Image} from 'src/components/atoms';
import {ImageContainer} from './style';

import Form from 'src/components/molecules/FormLogin';
import Copyright from 'src/components/molecules/Copyright';

export default () => {
  return (
    <SignInContainer justify={'space-around'}>
      <ImageContainer>
        <Image src={Logo} width='100%' height='100%' alt='Cadastro único' />
      </ImageContainer>

      <Form />

      <Copyright />
    </SignInContainer>
  );
};
