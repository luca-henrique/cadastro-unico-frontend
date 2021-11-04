import React from 'react';

/* 
  - adicionar absolut imports 
  - adicionar propTypes 
  - adicionar react-hook-form
  - ajustar variavel static COLORS  ( importar as cores da forma correta, evitar repetição )
*/

import {ImageContainer} from 'components/organisms/SignIn/style';
import {Image} from 'components/atoms';
import {SignInContainer} from 'components/template/Layout';
import LogoCadUnico from 'assets/image/logo-cadastro-unico.png';
import FormLogin from 'components/molecules/FormLogin';

const Index = () => {
  return (
    <SignInContainer>
      <ImageContainer style={{marginTop: '4%'}}>
        <Image
          src={LogoCadUnico}
          width='100%'
          height='100%'
          alt='Cadastro único'
        />
      </ImageContainer>

      <FormLogin />
    </SignInContainer>
  );
};

export default Index;
