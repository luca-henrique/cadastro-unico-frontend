import React, { useState } from "react";

import { Creators as CreatorsAccount } from "../../../../../../store/ducks/account";

import { useDispatch, useSelector } from "react-redux";

import { toastr } from "react-redux-toastr";

import {
  Modal,
  Backdrop,
  Fade,
  Typography,
  Button,
  TextField,
} from "@material-ui/core/";

export default function ChangerPassword() {
  const visible = useSelector(
    (state) => state.account.password_account.visible
  );
  const id = useSelector((state) => state.account.password_account.id);

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
      var senha = {
        id,
        password,
      };
      //dispatch(CreatorsAccount.changerPasswordRequest(senha));
      hide();
    }
  }

  function hide() {
    dispatch(CreatorsAccount.hideChangePasswordAccount());
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={visible}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={visible}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              border: "1px solid #D8D8D8",
              borderRadius: "5px",
            }}
          >
            <Typography
              variant="h4"
              style={{ color: "#a4a4a4", textAlign: "center" }}
            >
              Alterar senha
            </Typography>
            <form onSubmit={changePassword}>
              <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                <Typography variant="button" style={{ color: "#A4A4A4" }}>
                  Nova senha:
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                <Typography variant="button" style={{ color: "#A4A4A4" }}>
                  Confirme a senha:
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  type="password"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                />
              </div>

              <div>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  onClick={hide}
                >
                  Fechar
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  style={{
                    width: "100%",
                    color: "#0174DF",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  type="submit"
                >
                  Alterar
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

ChangerPassword.defaultProps = {
  visible: false,
  password: "",
  password1: "",
};
