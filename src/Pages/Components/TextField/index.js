import { withStyles, TextField } from "@material-ui/core/";

const Field = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "#A4A4A4",
      borderWidth: 1
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#02632c",
      padding: "4px !important" // override inline-style
    }
  }
})(TextField);

export default Field;
