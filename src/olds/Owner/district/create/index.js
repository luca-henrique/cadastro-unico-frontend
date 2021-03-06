import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  Typography,
  Button,
  Modal,
  Fade,
  Grid,
  TextField,
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    backgroundColor: "#fff",
    border: "1px solid #D8D8D8",
    borderRadius: "5px",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      width: "100%",
      height: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
}));

export default function Create() {
  const visible = useSelector((state) => state.district.create_district);
  const dispatch = useDispatch();

  const [nome, setNome] = useState("");

  const classes = useStyles();

  function saveBox(e) {
    e.preventDefault();
    try {
      var district = {
        nome,
      };

      hide();
    } catch (err) { }
  }

  function hide() {
    setNome("");

  }

  return (
    <Modal
      open={visible}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={classes.modal}>
        <form onSubmit={saveBox}>
          <Fade in={visible}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="h5"
                  style={{
                    color: "rgba(2,99,44,0.7)",
                    textAlign: "center",
                    marginBottom: "10px",
                  }}
                >
                  Novo Bairro
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div>
                  <Typography variant="button">Bairro:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "15px" }}>
                  <Button
                    variant="contained"
                    style={{ color: "rgb(2,99,44)", width: "100%" }}
                    type="submit"
                  >
                    Cadastrar
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
          </Fade>
        </form>
      </div>
    </Modal>
  );
}
