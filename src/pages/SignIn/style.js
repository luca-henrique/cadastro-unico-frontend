import styled from 'styled-components';

import {Colors} from 'src/common/colors';

export const ImageContainer = styled.div`
  width: 500px;
  height: 180px;

  @media (max-width: 992px) {
    width: 520px;
    height: 200px;
  }

  @media (max-width: 491px) {
    width: 250px;
    height: 130px;
    margin-top: 10px;
  }
`;

export const RecoveryContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const ContainerInputs = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: ${({align}) => (align ? align : 'center')};
  flex-direction: ${({direction}) => (direction ? direction : 'column')};

  justify-content: ${({justify}) => (justify ? justify : 'flex-start')};

  background-image: linear-gradient(
    132deg,
    ${Colors.primaryYellow} 10%,
    ${Colors.primaryGreen} 100%
  );
`;
