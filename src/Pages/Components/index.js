import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background: #fff;
  input {
    color: #777;
    border: 1px solid #ddd;
    font-size: 15px;
    height: 45px;
    width: 88%;
    margin-top: 20px;
    padding-left: 2%;
    &::placeholder {
      color: #999;
    }
  }
  button {
    font-size: 16px;
    height: 45px;
    width: 90%;
    border: none;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
`;
