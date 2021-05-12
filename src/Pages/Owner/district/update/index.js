import React, { useState, useEffect } from "react";

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
    padding: "20px",
    border: "1px solid #D8D8D8",
    borderRadius: "5px",
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
  const visible = useSelector(
    (state) => state.district.update_district.visible
  );

  const data = useSelector((state) => state.district.update_district.data);
  const dispatch = useDispatch();

  useEffect(() => {
    setNome(data.nome);
  }, [data]);

  const [nome, setNome] = useState("");

  function saveBox(e) {
    e.preventDefault();
    try {
      var district = {
        id: data.id,
        nome,
      };


      hide();
    } catch (err) { }
  }

  function hide() {
    setNome("");
  }

  const classes = useStyles();

  return (
    <Modal
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={visible}
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
                  variant="h4"
                  style={{
                    color: "rgba(2,99,44,0.7)",
                    textAlign: "center",
                    marginBottom: "10px",
                  }}
                >
                  Atualizar bairro
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
                    Atualizar
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
