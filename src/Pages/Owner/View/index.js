import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AuthActions from "../../../store/ducks/auth";

import { ContainerOwner } from "../../Components/index";

function View(props) {
  const { signOut } = props;
  console.log(props);

  return (
    <ContainerOwner>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          height: "100%"
        }}
      >
        <div>
          <h2>Cadastro único</h2>
        </div>
        <button>Perfil</button>
        <button>Prefeitura</button>
        <button>Funcionario</button>
        <button onClick={signOut}>Sair</button>
      </div>
    </ContainerOwner>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(View);
