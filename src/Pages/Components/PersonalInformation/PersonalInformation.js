import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import AuthActions from "../../../store/ducks/auth";
import { Creators as UserCreators } from "../../../store/ducks/user";

import { TextField, Grid, Typography, makeStyles } from "@material-ui/core/";

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

  function onUpdate() {
    const { setProfile } = props;
    var profile = {
      cpf,
      cargo,
      nome
    };

    setProfile(profile);
  }

  return (
    <>
      {/* Infomações Pessoais */}
      <form onBlur={onUpdate}>
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
        </Grid>
      </form>
    </>
  );
}

const mapStateToProps = state => ({
  redux: state.users
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AuthActions, ...UserCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Components);
