import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Creators as ProfileCreators } from "../../../store/ducks/profile";

import { Grid, Typography, makeStyles } from "@material-ui/core/";

import Field from "../TextField/";

import { cpfMask } from "../TextField/MaskInput";

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
  const classes = useStyles();

  const [cpf, setCpf] = useState("");

  const [cargo, setCargo] = useState("");
  const [nome, setNome] = useState("");

  console.log("Profile");
  console.log(props);

  const { exist } = props.redux;

  console.log(exist);

  function onUpdate() {
    var profile = {
      cpf,
      nome,
      cargo
    };

    if (exist === false) {
      const { createProfileRequest } = props;
      createProfileRequest(profile);
    } else {
      const { updateProfileRequest } = props;
      updateProfileRequest(profile);
    }
  }

  function changeCpf(e) {
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
                onChange={changeCpf}
                error={cpf.length > 18 ? true : false}
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
