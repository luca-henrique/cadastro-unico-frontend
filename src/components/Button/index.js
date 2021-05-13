import React from "react";
import propTypes from "prop-types";

import Button from "@material-ui/core/Button";

const DefaultButton = ({ label, onClick, type }) => {
  return (
    <Button variant="contained" fullWidth type={type} onClick={onClick}>
      {label}
    </Button>
  );
};

DefaultButton.propTypes = {
  onClick: propTypes.func,
  type: propTypes.string,
  label: propTypes.string.isRequired,
};

DefaultButton.defaultProps = {
  label: "",
};

export default DefaultButton;
