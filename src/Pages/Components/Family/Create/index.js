import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Creators as FamilyCreators } from "../../../../store/ducks/family";

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
  TextField,
  Select,
  FormControl
} from "@material-ui/core/";

export default function Create() {
  function hide() {
    //hideModalNewFamiliar();
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
      open={false}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <form>
        <Fade in={false}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              border: "1px solid #D8D8D8",
              borderRadius: "5px",
              width: "550px"
            }}
          >
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
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
                  Cadastrar uma nova pessoa
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">Nome:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="text"
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={8} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">CPF:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="text"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={1} />

              <Grid item xs={12} sm={3} style={{ marginTop: "10px" }}>
                <div>
                  <FormControl
                    variant="outlined"
                    style={{ width: "100%" }}
                    size="small"
                    fullWidth
                  >
                    <Typography variant="button">Tipo:</Typography>
                    <Select native size="small" fullWidth>
                      <option value="" />
                      <option value={10}>Dependente</option>
                      <option value={20}>Responsavel</option>
                    </Select>
                  </FormControl>
                </div>
              </Grid>

              <Grid item xs={12} sm={8} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">NIS:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="text"
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={1} />

              <Grid item xs={12} sm={3} style={{ marginTop: "10px" }}>
                <div>
                  <FormControl
                    variant="outlined"
                    style={{ width: "100%" }}
                    size="small"
                    fullWidth
                  >
                    <Typography variant="button">Situação:</Typography>
                    <Select native size="small" fullWidth>
                      <option value="" />
                      <option value={10}>Ativo</option>
                      <option value={20}>Transferido</option>
                      <option value={20}>Excluido</option>
                      <option value={20}>Obito</option>
                    </Select>
                  </FormControl>
                </div>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "15px" }}>
                  <Button
                    variant="contained"
                    style={{ color: "rgb(2,99,44)", width: "100%" }}
                  >
                    Salvar
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "15px" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ width: "100%" }}
                    onClick={hide}
                  >
                    Fechar
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </form>
    </Modal>
  );
}
