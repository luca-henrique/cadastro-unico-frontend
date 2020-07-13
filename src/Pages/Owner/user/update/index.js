import React from "react";

import CreateLogin from "./components/body-page/";

import { useSelector } from "react-redux";

import { Typography, Modal, Backdrop, Fade, Grid } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "70%",
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
      height: "35%",
    },
  },
}));

export default function Update() {
  const classes = useStyles();
  const visible = useSelector((state) => state.user.update_account_visible);

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
      <Fade in={visible}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            border: "2px solid #a4a4a4",
            borderRadius: "5px",
          }}
          className={classes.modal}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12}>
              <Typography
                variant="h5"
                style={{
                  color: "#a4a4a4",
                  textAlign: "center",
                }}
              >
                Atualizar conta
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <CreateLogin />
            </Grid>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}

Update.defaultProps = {
  visible: false,
};
