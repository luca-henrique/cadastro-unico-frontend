import React from "react";

import { useDispatch, useSelector } from "react-redux";

import history from "~/routes/history";

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
  Checkbox,
  withStyles,
} from "@material-ui/core/";

import { green } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      overflowY: "scroll",
    },
    [theme.breakpoints.up("md")]: {
      width: "500px",
    },
  },
}));

// eslint-disable-next-line no-unused-vars
const GreenCheckbox = withStyles({
  root: {
    color: green[200],
    "&$checked": {
      color: green[300],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Create() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const visible = useSelector((state) => state.generete.modal_generete_pdf);

  function hide() {
  }

  function openTabDiscard() {
    history.push("/discard");
    hide();
  }

  function openTabBoxHangTags() {
    history.push("/box_tag");
    hide();
  }

  return (
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
      <form>
        <Fade in={visible}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              border: "1px solid #D8D8D8",
              borderRadius: "5px",
            }}
            className={classes.modal}
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
                    marginBottom: "10px",
                  }}
                >
                  Relatorio geral
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "35px" }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      openTabBoxHangTags();
                    }}
                    style={{ color: "rgb(2,99,44)", width: "100%" }}
                  >
                    Gerar etiquetas por caixa
                  </Button>
                </div>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "15px" }}>
                  <Button
                    variant="contained"
                    style={{ color: "rgb(2,99,44)", width: "100%" }}
                    onClick={() => openTabDiscard()}
                  >
                    Descarte
                  </Button>
                </div>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "15px" }}>
                  <Button
                    variant="contained"
                    style={{ color: "rgb(2,99,44)", width: "100%" }}

                  >
                    Sintetico
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
