import React from "react";
import {
  withStyles,
  TextField,
} from "@material-ui/core";



const CssTextField = withStyles({
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


  const Input = ({
    value,onChange
  }) => {
    return (
      <CssTextField
        id="outlined-full-width"
        margin="dense"
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    );
  };


  export default Input;