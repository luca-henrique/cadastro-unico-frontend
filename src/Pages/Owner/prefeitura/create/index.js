import React from "react";


import { useSelector } from "react-redux";

import { Modal, Grid } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

import Information from "./Components/Informacoes";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

const Create = () => {
  const classes = useStyles();

  const visible = useSelector((state) => state.prefecture.prefecture_create);

  return (
    <Modal
      open={visible}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          border: "1px solid #D8D8D8",
          borderRadius: "5px",
          height: "auto",
          width: "600px",
        }}
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          className={classes.root}
        >
          <Information />
        </Grid>
      </div>
    </Modal>
  );
};

export default Create;
