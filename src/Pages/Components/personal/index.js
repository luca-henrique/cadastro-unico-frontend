import React, { useState, useEffect } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Creators as ProfileCreators } from "../../../store/ducks/profile";

import { Grid, Typography, makeStyles } from "@material-ui/core/";

import Field from "../TextField/";

import { cpfMask } from "../TextField/MaskInput";

import { toastr } from "react-redux-toastr";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "15px",
    color: "#BDBDBD"
  },
  inputs: {
    marginTop: "15px"
  }
}));

function Components(props) {
  console.log("Profile");
  console.log(props);

  const classes = useStyles();

  const { exist } = props.redux;

  const profile = JSON.parse(localStorage.getItem("profile"));

  const [cpf, setCpf] = useState(profile.cpf);
  const [cargo, setCargo] = useState(profile.cargo);
  const [nome, setNome] = useState(profile.nome);

  function onUpdate() {
    try {
      var prof = {
        cpf,
        nome,
        cargo
      };

      getAtribute(prof);

      if (exist === false) {
        const { createProfileRequest } = props;
        createProfileRequest(prof);
      } else {
        const { updateProfileRequest } = props;
        updateProfileRequest(prof);
      }

      console.log(prof);
    } catch (error) {
      toastr.error("Error", "Existe Campos nulos");
    }
  }

  function changeCpf(e) {
    setCpf(cpfMask(e.target.value, cpf));
  }

  function getAtribute(object) {
    if (
      object.cpf === null ||
      object.cpf === "" ||
      object.nome === null ||
      object.nome === "" ||
      object.cargo === null ||
      object.cargo === ""
    ) {
      throw new UserException("Null");
    }
  }

  function UserException(message) {
    this.message = message;
    this.name = "UserException";
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
              <Field
                variant="outlined"
                size="small"
                fullWidth
                required
                value={cpf}
                onChange={changeCpf}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <div>
              <Typography variant="button">Cargo</Typography>
              <Field
                variant="outlined"
                size="small"
                fullWidth
                required
                value={cargo}
                onChange={e => setCargo(e.target.value)}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} className={classes.inputs}>
            <div>
              <Typography variant="button">Nome</Typography>
              <Field
                variant="outlined"
                size="small"
                fullWidth
                required
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

Field.defaultProps = {
  value: ""
};

const mapStateToProps = state => ({
  redux: state.profile
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ProfileCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Components);
