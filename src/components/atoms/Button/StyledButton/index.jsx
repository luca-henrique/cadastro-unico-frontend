import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles((theme) => ({
  root: {
    height: "45px",
    fontSize: "0.99rem",
    width: "100%",
    color: "white",
    textTransform: "capitalize",
    backgroundColor: "rgba(2,99,44,0.7)",
    "&:hover": {
      backgroundColor: "rgba(2,99,44,0.8)",
    },
  },
}))(Button);

export default function CustomizedButtons(
  { label, onClick, type, variant },
  props
) {
  return (
    <StyledButton
      variant={variant}
      fullWidth
      type={type}
      onClick={onClick}
      {...props}
    >
      {label}
    </StyledButton>
  );
}
