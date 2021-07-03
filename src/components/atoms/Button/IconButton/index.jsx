import React from "react";
import propTypes from "prop-types";

import Button from "@material-ui/core/Button";

const DefaultButton = ({ label, onClick, type, variant }) => {
  return (
    <Button variant={variant} fullWidth type={type} onClick={onClick}>
      {label}
    </Button>
  );
};

DefaultButton.propTypes = {
  onClick: propTypes.func,
  type: propTypes.string,
  label: propTypes.string.isRequired,
  variant: propTypes.string,
};

DefaultButton.defaultProps = {
  label: "",
  variant: "contained",
};

export default DefaultButton;
