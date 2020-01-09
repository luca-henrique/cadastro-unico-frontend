import React, { useState } from "react";

import { Container, Form } from "../../Components/index";

import Logo from "../../../Assets/Images/cadunico.png";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AuthActions from "../../../store/ducks/auth";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const { signInRequest } = props;
    signInRequest(email, password);
  }

  return (
    <Container style={{ background: "rgb(246, 238, 89)" }}>
      <div style={{ width: "350px", height: "200", marginTop: "20px" }}>
        <img width="100%" height="100%" alt="Cadastro único" src={Logo} />
      </div>
      <Form onSubmit={handleSubmit}>
        <div>
          <label style={{ color: "#fff" }}>E-mail:</label>
          <input
            type="text"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label style={{ color: "#fff" }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Entrar</button>
      </Form>
      <footer
        style={{
          textAlign: "center",
          color: "rgb(2, 99, 44)"
        }}
      >
        <h4>
          © {new Date().getFullYear()} Copyright:
          <a
            style={{
              textDecoration: "none",
              fontSize: "16px",
              paddingLeft: "3px",
              color: "inherit"
            }}
            href="https://ctmconsultoria.com/"
          >
            C.T.M Consultoria
          </a>
        </h4>
      </footer>
    </Container>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);
