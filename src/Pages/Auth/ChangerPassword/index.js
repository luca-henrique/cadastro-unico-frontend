import React, { useState } from "react";

import { Creators as UserCreators } from "../../../store/ducks/user";
import { useDispatch, useSelector } from "react-redux";

import { toastr } from "react-redux-toastr";

import { Modal, Backdrop, Fade, Typography, Button } from "@material-ui/core/";

import TextField from "../../Components/TextField/";

export default function ChangerPassword() {
  const visible = useSelector(state => state.user.visible);

  const dispatch = useDispatch();

  const [password, setPassword] = useState("");

  const [password1, setPassword1] = useState("");

  function changePassword(e) {
    e.preventDefault();

    if (
      password !== password1 ||
      password === "null" ||
      password === "" ||
      password1 === "null" ||
      password1 === ""
    ) {
      toastr.error("Password invalido ou nulo");
    } else {
      dispatch(UserCreators.changerPasswordRequest(password));
      hide();
    }
  }

  function hide() {
    dispatch(UserCreators.hideModalChangerPassword());
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

TextField.defaultProps = {
  value: ""
};
