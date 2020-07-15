import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Creators as CreatorsAccount } from "~/store/ducks/user";

import {
  TextField,
  Grid,
  Typography,
  Button,
  withStyles,
  Checkbox,
  FormControl,
  Select,
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

import { green } from "@material-ui/core/colors";

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

  const user = useSelector((state) => state.user.update_user.user);

  const joined = useSelector((state) => state.user.user_joined.role); //Usuario logado função

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(false);

  useEffect(() => {
    setNome(user.nome || "");
    setEmail(user.email || "");
    setRole(user.role || false);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    var acc = {
      id: user.id,
      nome,
      email,
      role,
    };

    dispatch(CreatorsAccount.updateUserRequest(acc));

    handleClose();
  };

  const handleClose = () => {
    dispatch(CreatorsAccount.hideUpdateUser());
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
        {joined === true ? (
          <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
            <FormControl
              variant="outlined"
              style={{ width: "100%" }}
              size="small"
              fullWidth
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <Typography variant="button">Função:</Typography>
              <Select native size="small" fullWidth value={role}>
                <option value={true}>Administrador</option>
                <option value={false}>Usuário</option>
              </Select>
            </FormControl>
          </Grid>
        ) : (
          <></>
        )}

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
