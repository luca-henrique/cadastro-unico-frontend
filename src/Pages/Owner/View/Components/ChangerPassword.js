import React, { useState } from "react";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import AuthActions from "../../../../store/ducks/auth";
import { Creators as LoginCreators } from "../../../../store/ducks/login";

import { TextField, Typography, Button } from "@material-ui/core/";

function TransitionsModal(props) {
  const [password, setPassword] = useState("");

  const [password1, setPassword1] = useState("");

  const { visible } = props.redux.login.show;

  function changePassword(e) {
    e.preventDefault();
    const { changerPassword } = props;
    if (
      password !== password1 ||
      password === "null" ||
      password === "" ||
      password1 === "null" ||
      password1 === ""
    ) {
      alert("Senha não está compativel repita.");
    } else {
      changerPassword(password);
      hide();
      console.log(props);
    }
  }

  function hide() {
    const { hideModalEmail } = props;
    hideModalEmail();
    setPassword("");
    setPassword1("");
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        open={visible}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={visible}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              border: "1px solid #D8D8D8",
              borderRadius: "5px"
            }}
          >
            <Typography
              variant="h4"
              style={{ color: "rgba(2,99,44,0.7)", textAlign: "center" }}
            >
              Alterar senha
            </Typography>
            <form onSubmit={changePassword}>
              <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                <Typography variant="button" style={{ color: "#A4A4A4" }}>
                  Nova senha
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                <Typography variant="button" style={{ color: "#A4A4A4" }}>
                  Repita a senha
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  type="password"
                  value={password1}
                  onChange={e => setPassword1(e.target.value)}
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  style={{
                    width: "100%",
                    color: "rgb(2,99,44)",
                    marginTop: "15px",
                    marginBottom: "10px"
                  }}
                  type="submit"
                >
                  Alterar
                </Button>
              </div>
              <div>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    marginBottom: "10px"
                  }}
                  onClick={hide}
                >
                  Fechar
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AuthActions, ...LoginCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TransitionsModal);
