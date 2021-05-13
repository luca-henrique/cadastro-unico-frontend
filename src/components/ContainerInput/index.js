import React from "react";
import propTypes from "prop-types";

import Typography from "~/components/Typography";
import Input from "~/components/Input";

import { Container } from "./style";

const ContainerInputGroup = ({ onChange, value, label, type, required }) => {
  return (
    <Container>
      <Typography variant="subtitle1" label={label} variant="subtitle1" />
      <Input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </Container>
  );
};

ContainerInputGroup.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  required: propTypes.bool,
};

ContainerInputGroup.defaultProps = {
  label: "",
};

export default ContainerInputGroup;
