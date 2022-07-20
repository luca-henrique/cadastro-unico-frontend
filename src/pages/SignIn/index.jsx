import React from 'react';

import {Images} from 'src/assets';

import {Image} from 'src/components/atoms';
import {ImageContainer, Container} from './style';

import Form from 'src/components/molecules/FormLogin';
import Copyright from 'src/components/molecules/Copyright';

export default () => {
  return (
    <Container justify={'space-around'}>
      <ImageContainer>
        <Image
          src={Images['logo-cadastro-unico']}
          width='100%'
          height='100%'
          alt='Cadastro único'
        />
      </ImageContainer>

      <Form />

      <Copyright />
    </Container>
  );
};
