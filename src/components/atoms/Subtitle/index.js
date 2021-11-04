import React from "react";

import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { COLORS } from "../../../common/colors";

const useStyles = makeStyles((theme) => ({
  typography: {
    color: COLORS.primaryGreen,
  },
}));

export default ({ label, variant }) => {
  const classes = useStyles();

  return (
    <Typography variant={variant} className={classes.typography}>
      {label}
    </Typography>
  );
};
