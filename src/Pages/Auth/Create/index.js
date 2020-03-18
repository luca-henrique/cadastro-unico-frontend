import React, { useState } from "react";

import { Creators as FunCreators } from "../../../store/ducks/funcionario";
import { useDispatch } from "react-redux";

import {
  TextField,
  Grid,
  Typography,
  FormControlLabel,
  withStyles,
  Checkbox
} from "@material-ui/core/";
import { toastr } from "react-redux-toastr";
import { green } from "@material-ui/core/colors";

export default function Create() {
  const dispatch = useDispatch();

  const [nome, setNome] = useState("");
  const [admin, setAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChange() {
    try {
      var funcionario = {
        nome,
        email,
        password,
        admin
      };

      dispatch(FunCreators.createFuncRequest(funcionario));
    } catch (err) {
      toastr.error(err);
    }
  }

  return (
    <>
      <form style={{ marginTop: "15px" }} onBlur={onChange}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12}>
            <Grid item xs={12} sm={12}>
              <Typography variant="button">Adiministrador:</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControlLabel
                style={{ color: "#A4A4A4" }}
                value={admin}
                onChange={e => setAdmin(e.target.checked)}
                control={<GreenCheckbox />}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div>
              <Typography variant="button">Nome:</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
            <div>
              <Typography variant="button">E-mail:</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
            <div>
              <Typography variant="button">Senha:</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

const GreenCheckbox = withStyles({
  root: {
    color: green[200],
    "&$checked": {
      color: green[300]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);
