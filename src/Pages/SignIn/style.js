import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 320px;
  height: 150px;

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
