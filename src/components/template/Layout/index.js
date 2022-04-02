import styled from 'styled-components';
import {Colors} from 'src/common/colors';

export const SignInContainer = styled.div`
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
