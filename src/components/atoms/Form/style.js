import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: ${({ align }) => (align ? align : "center")};
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};

  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100vh")};
  background-color: ${({ background }) => (background ? background : "white")};

  border-radius: ${({ border }) => (border ? `${border}px` : "none")};
  padding: ${({ padding }) => (padding ? `${padding}px` : "none")};

  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};

  @media (max-width: 991px) {
    width: 100%;
    border-radius: 0px;
  }
  @media (min-width: 991px) {
    width: 500px;
  }
`;
