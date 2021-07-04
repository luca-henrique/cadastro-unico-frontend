import React from "react";
import propTypes from "prop-types";

import Button from "@material-ui/core/Button";

const DefaultButton = ({
  label,
  onClick,
  type,
  variant,
  Icon,
  startIcon,
  endIcon,
}) => {
  return (
    <Button
      variant={variant}
      fullWidth
      type={type}
      onClick={onClick}
      startIcon={startIcon && <Icon />}
      endIcon={endIcon && <Icon />}
      color="primary"
    >
      {label}
    </Button>
  );
};

DefaultButton.propTypes = {
  onClick: propTypes.func,
  type: propTypes.string,
  label: propTypes.string.isRequired,
  variant: propTypes.string,
  startIcon: propTypes.bool,
  endIcon: propTypes.bool,
  Icon: propTypes.elementType,
};

DefaultButton.defaultProps = {
  label: "",
  variant: "contained",
};

export default DefaultButton;
