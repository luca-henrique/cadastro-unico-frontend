import React, { useState, useEffect } from "react";

//import { toastr } from "react-redux-toastr";
import { useDispatch, useSelector } from "react-redux";

import { Creators as CreatorsAccount } from "../../../../../../store/ducks/user";

import { TextField, Grid, Typography, Button } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "15px",
  },
  label: {
    color: "#a4a4a4",
  },
}));

function Create() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const account = useSelector((state) => state.user.update_account_data);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState(account.email);

  useEffect(() => {
    if (account.nome === null || account.nome === undefined) {
      console.log(account.nome);
    } else {
      setNome(account.nome);
    }
    setEmail(account.email);
  }, [account.email, account.nome]);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      if (account.email === email) {
        var user = {
          nome,
        };
        dispatch(CreatorsAccount.updateUserActiveRequest(user));
      } else {
        var userTest = {
          nome,
          email,
        };
        dispatch(CreatorsAccount.updateUserActiveRequest(userTest));
      }
      handleClose();
    } catch (error) {}
  };

  const handleClose = () => {
    dispatch(CreatorsAccount.hideUpdateAccount());
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.label}
      >
        <Grid item xs={12} sm={12} className={classes.grid}>
          <div>
            <Typography variant="button">Nome:</Typography>
            <TextField
              required
              variant="outlined"
              size="small"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} className={classes.grid}>
          <div>
            <Typography variant="button">E-mail:</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} style={{ marginTop: "25px" }}>
          <Button
            color="secondary"
            variant="contained"
            style={{
              width: "100%",
            }}
            onClick={handleClose}
          >
            Fechar
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.grid}>
          <Button
            variant="contained"
            style={{ color: "#0174DF", width: "100%" }}
            type="submit"
          >
            Atualizar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Create;

Create.defaultProps = {
  nome: "",
  email: "",
};
