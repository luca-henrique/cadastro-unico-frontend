import React from "react";
import { Container, Form } from "../../Components/index";
import Logo from "./logo.png";

const SignUp = () => (
  <Container>
    <div style={{ width: "230px", height: "200px", marginTop: "20px" }}>
      <img width="100%" height="100%" src={Logo} alt="teste" />
    </div>
    <Form>
      <h3>Cadastro Unico</h3>
      <input type="email" placeholder="Endereço de e-mail" />
      <input type="password" placeholder="Senha" />
      <button>Entrar</button>
    </Form>
    <footer>
      <h5>CTM Consultoria</h5>
    </footer>
  </Container>
);

export default SignUp;
