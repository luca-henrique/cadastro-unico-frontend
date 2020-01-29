import React from "react";

import { Creators as FuncionarioCreators } from "../../../../../../store/ducks/funcionario";
import { useSelector, useDispatch } from "react-redux";

import CreateLogin from "../../../../../Auth/Create/";

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid
} from "@material-ui/core/";

export default function Create() {
  const dispatch = useDispatch();

  const funcionario = useSelector(state => state.funcionario.funcionario);

  const visible = useSelector(state => state.funcionario.visible);

  function hide() {
    dispatch(FuncionarioCreators.hideModalNewFuncionario());
    dispatch(FuncionarioCreators.createFuncRequest({}));
  }

  function save() {
    dispatch(FuncionarioCreators.createFuncSuccess(funcionario));
    hide();
  }

  return (
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
            borderRadius: "5px",
            width: "600px"
          }}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12}>
              <Typography
                variant="h4"
                style={{
                  color: "rgba(2,99,44,0.7)",
                  textAlign: "center",
                  marginBottom: "10px"
                }}
              >
                Cadastrar Funcionario
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <CreateLogin />

              <div style={{ width: "100%", marginTop: "20px" }}>
                <Button
                  variant="contained"
                  style={{ color: "rgb(2,99,44)", width: "100%" }}
                  onClick={save}
                >
                  Salvar
                </Button>
              </div>
              <div>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{
                    width: "100%",
                    marginTop: "15px",
                    marginBottom: "5px"
                  }}
                  onClick={hide}
                >
                  Fechar
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}
