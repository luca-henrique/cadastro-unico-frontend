import React from "react";
import propTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { Colors } from "olds/Typography/node_modules/~/common/colors";

const StyledTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: Colors.primaryGreen,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: Colors.primaryGreen,
    },
    "& input:invalid + fieldset": {
      borderColor: Colors.primaryGray,
      borderWidth: 2,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: Colors.primaryGray,
      },
      "&:hover fieldset": {
        borderColor: Colors.primaryGreen,
      },
      "&.Mui-focused fieldset": {
        borderColor: Colors.primaryGreen,
      },
    },
  },
})(TextField);

const DefaultInput = ({ onChange, value, type, required }) => {
  return (
    <StyledTextField
      variant="outlined"
      size="small"
      fullWidth
      required={required}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

DefaultInput.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  required: propTypes.bool,
};

export default DefaultInput;
