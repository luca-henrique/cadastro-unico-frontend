import React, { lazy } from "react";

import { CssBaseline, makeStyles } from "@material-ui/core/";

import TopBar from "./top-bar";
import FloatingButton from "./floating-button";

/*
  
  Modal
 
*/

const ListBox = lazy(() => import("../box/list"));

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      overflowX: "visible",
      overflowY: "scroll",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      overflowX: "visible",
      overflowY: "scroll",
    },
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",

    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(7),
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(20),
      width: "100%",
    },
  },

  center: {
    width: "95%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
  },
}));

function View() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />

      <main className={classes.content}>
        <div className={classes.center}>
          <ListBox />

          <FloatingButton />
        </div>
      </main>
    </div>
  );
}

export default View;
