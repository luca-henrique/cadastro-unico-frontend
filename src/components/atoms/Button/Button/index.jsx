import React from "react";
import propTypes from "prop-types";

import { StyledButton } from "./style";

const Index = ({ label, onClick, type, variant }, props) => {
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
};

Index.propTypes = {
  onClick: propTypes.func,
  type: propTypes.string,
  label: propTypes.string.isRequired,
  variant: propTypes.string,
};

Index.defaultProps = {
  label: "",
  variant: "contained",
};

export default Index;
