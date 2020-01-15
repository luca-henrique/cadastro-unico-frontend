import React from "react";

//import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Grid, Typography, Button } from "@material-ui/core/";

// import { Container } from './styles';

import PersonalInformation from "../../../../Components/personal-information/index";
import Login from "../../../../Auth/ChangerPassword/Login";
import Address from "../../../../Components/Address/index";
import Contact from "../../../../Components/Contact/index";

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
      <Grid item xs={12} sm={12} style={{ marginTop: "5px" }}>
        <Typography variant="h5">Informações pessoais</Typography>
      </Grid>

      <Grid item xs={12} sm={12}>
        <PersonalInformation />
      </Grid>

      {/* Login */}

      <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
        <Typography variant="h5">Login</Typography>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Login />
      </Grid>

      {/* Endereço */}

      <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
        <Typography variant="h5">Endereço</Typography>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
        <Address />
      </Grid>

      {/* Contato */}

      <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
        <Typography variant="h5">Contato</Typography>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
        <Contact />
      </Grid>

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
          <div style={{ width: "100%" }}>
            <Button
              variant="contained"
              style={{ width: "100%", color: "rgb(2,99,44)" }}
            >
              Salvar alterações
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
