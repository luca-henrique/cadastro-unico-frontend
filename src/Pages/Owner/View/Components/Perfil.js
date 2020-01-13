import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { TextField, Grid, Typography, Button } from "@material-ui/core/";

// import { Container } from './styles';

import PersonalInformation from "./PersonalInformation";
import Address from "./Address";

const Perfil = () => (
  <div>
    <Typography variant="h4" style={{ color: "rgb(2,99,44)" }}>
      Perfil
    </Typography>

    {/* Infomações Pessoais */}

    <Grid
      style={{
        borderTop: "1px solid #BDBDBD",
        marginTop: "20px"
      }}
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={12} style={{ marginTop: "5px" }}>
        <Typography variant="h5">Informações pessoais</Typography>
      </Grid>

      <PersonalInformation />

      {/* Endereço */}

      <Grid item xs={12} style={{ marginTop: "20px" }}>
        <Typography variant="h5">Endereço</Typography>
      </Grid>

      <Address />

      {/* Contato */}

      <Grid item xs={12} style={{ marginTop: "20px" }}>
        <Typography variant="h5">Contato</Typography>
      </Grid>

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ marginTop: "15px" }}
      >
        <Grid item xs={12} sm={4}>
          <div>
            <Typography variant="button">Fixo</Typography>
            <TextField variant="outlined" size="small" fullWidth />
          </div>
        </Grid>
        <Grid item xs={12} sm={2} />
        <Grid item xs={12} sm={4}>
          <div>
            <Typography variant="button">celular</Typography>
            <TextField variant="outlined" size="small" fullWidth />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ marginTop: "15px" }}
      >
        <Grid item xs={12} sm={9} />
        <Grid item xs={12} sm={1} style={{ marginTop: "20px" }}>
          <div>
            <Button style={{ width: "100px" }} size="large">
              Salvar
            </Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Perfil);
