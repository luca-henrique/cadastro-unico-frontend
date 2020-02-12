import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
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

export default function Components() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const exist = useSelector(state => state.profile.exist);

  const profile = useSelector(state => state.profile.profile);

  const [cpf, setCpf] = useState("");
  const [cargo, setCargo] = useState("");
  const [nome, setNome] = useState("");

  useEffect(() => {
    if (exist) {
      setCpf(profile.cpf);
      setCargo(profile.cargo);
      setNome(profile.nome);
    }
  }, [exist, profile.cargo, profile.cpf, profile.nome]);

  function onUpdate() {
    try {
      var prof = {
        cpf,
        nome,
        cargo
      };

      checkAttributesObj(prof);

      if (exist === true) {
        dispatch(ProfileCreators.updateProfileRequest(prof));
      } else {
        dispatch(ProfileCreators.createProfileRequest(prof));
      }
    } catch (error) {
      toastr.error("Error", "Existe Campos nulos");
    }
  }

  function changerCpf(e) {
    setCpf(cpfMask(e.target.value, cpf));
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
                onChange={changerCpf}
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

function checkAttributesObj(obj) {
  for (var [key, value] of Object.entries(obj)) {
    console.log(key);
    if (typeof value === "undefined" || value === null || value === "") {
      throw new UserException("Null");
    }
  }
}

function UserException(message) {
  this.message = message;
  this.name = "UserException";
}
