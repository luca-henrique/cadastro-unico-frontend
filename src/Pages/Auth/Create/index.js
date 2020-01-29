import React, { useState } from "react";

import { Creators as FunCreators } from "../../../store/ducks/funcionario";
import { useSelector, useDispatch } from "react-redux";

import { TextField, Grid, Typography } from "@material-ui/core/";
import { toastr } from "react-redux-toastr";

export default function Create() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChange() {
    try {
      var funcionario = {
        email,
        password
      };

      dispatch(FunCreators.createFuncRequest(funcionario));
    } catch (err) {
      toastr.error(err);
    }
  }

  function compare(pass, other) {
    if (pass !== other) {
      throw new UserException("Senhas");
    }
  }

  function UserException(message) {
    this.message = message;
    this.name = "UserException";
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
