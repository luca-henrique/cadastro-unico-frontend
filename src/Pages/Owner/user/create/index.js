import React, { useState } from "react";

import { Creators as UserCreators } from "~/store/ducks/user";
import { useSelector, useDispatch } from "react-redux";

import {
  Typography,
  Button,
  Modal,
  Grid,
  TextField,
  FormControl,
  Select,
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      width: "100%",
      height: "80%",
      overflowY: "scroll",
    },
    [theme.breakpoints.up("md")]: {
      width: "20%",
    },
  },
}));

export default function Create() {
  const dispatch = useDispatch();

  const visible = useSelector((state) => state.user.create_user);

  const classes = useStyles();

  const [nome, setNome] = useState("");
  const [role, setRole] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    var user = {
      nome,
      email,
      password,
      role,
    };

    dispatch(UserCreators.createUserRequest(user));

    hide();
  }

  const hide = () => {
    setNome("");
    setEmail("");
    setPassword("");
    setRole(false);

    dispatch(UserCreators.hideNewUserView());
  };

  return (
    <Modal
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={visible}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "15px",
          border: "1px solid #D8D8D8",
          borderRadius: "5px",
        }}
        className={classes.modal}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12} sm={12}>
            <Typography
              variant="h5"
              style={{
                color: "rgba(2,99,44,0.7)",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Cadastrar Usuário
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
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

            <Grid item xs={12} sm={12}>
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

            <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
              <div>
                <Typography variant="button">E-mail:</Typography>
                <TextField
                  required
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12}>
              <div>
                <Typography variant="button">Password:</Typography>
                <TextField
                  type="password"
                  required
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              style={{ marginTop: "15px", width: "100%" }}
            >
              <Button
                variant="contained"
                style={{ color: "rgb(2,99,44)", width: "100%" }}
                type="submit"
              >
                Criar
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              style={{ marginTop: "15px", width: "100%" }}
            >
              <Button
                color="secondary"
                variant="contained"
                onClick={hide}
                style={{ width: "100%" }}
              >
                Fechar
              </Button>
            </Grid>
          </form>
        </Grid>
      </div>
    </Modal>
  );
}
