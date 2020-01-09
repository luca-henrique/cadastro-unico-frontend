import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  background: rgb(2, 99, 44);
  border-radius: 5px;
  margin-top: 5%;
  margin-bottom: 5%;

  div {
    width: 90%;
    margin-top: 5%;

    input {
      background-color: #fff;
      border: none;
      font-size: 18px;
      height: 45px;
      width: 100%;
      margin-top: 2%;
      border-radius: 5px;
      &::placeholder {
        color: #999;
      }
    }
  }

  button {
    font-size: 20px;
    height: 45px;
    width: 90%;
    border: none;
    margin-top: 10%;
    margin-bottom: 10%;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    color: #848484;
  }
`;
