import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  TextField,
  Grid,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core/";

// import { Container } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "15px"
  },
  inputs: {
    marginTop: "15px"
  }
}));

function Components(props) {
  const classes = useStyles();

  const [cpf, setCpf] = useState("");
  const [cargo, setCargo] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Infomações Pessoais */}

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.root}
      >
        <Grid item xs={12} sm={5}>
          <div>
            <Typography variant="button">CPF</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <Typography variant="button">Cargo</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={cargo}
              onChange={e => setCargo(e.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={10} className={classes.inputs}>
          <div>
            <Typography variant="button">Nome</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.inputs}>
          <div>
            <Typography variant="button">Email</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={3} style={{ marginTop: "35px" }}>
          <div>
            <Button> Alterar senha</Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Components);
