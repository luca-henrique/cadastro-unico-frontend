import styled from "styled-components";
import { Colors } from '~/common/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  
  justify-content: space-around;
  
  background-image: linear-gradient(132deg, ${Colors.primaryYellow} 10%, ${Colors.primaryGreen} 100%);
 
`;

export const Form = styled.form`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: ${Colors.primaryWhite};

  @media (max-width: 991px) {
    width: 100%;
    border-radius: 0px;
  }
  @media (min-width: 991px) {
    width: 500px;
  }
`;
