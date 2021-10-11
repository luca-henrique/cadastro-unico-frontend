import React from "react";
import propTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { Field } from "formik";

const StyledInputText = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "rgba(2,99,44,0.7)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgba(2,99,44,0.7)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "rgba(2,99,44,0.7)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(2,99,44,0.7)",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: theme.spacing(2),
  },
}));

const ContainerInputGroup = ({ label, name, type }) => {
  const classes = useStyles();
  return (
    <Field
      className={classes.field}
      component={StyledInputText}
      label={label}
      name={name}
      type={type}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
    />
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
