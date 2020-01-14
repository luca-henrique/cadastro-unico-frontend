import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Grid, Typography, Button, TextField } from "@material-ui/core/";

import Address from "../../../../Components/Address/";
import Contact from "../../../../Components/Contact/";

// import { Container } from './styles';

const Prefeitura = () => (
  <>
    <Typography variant="h4" style={{ color: "rgb(2,99,44)" }}>
      Prefeitura
    </Typography>
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
        <Typography variant="h5">Informações</Typography>
      </Grid>

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={4} style={{ marginTop: "15px" }}>
          <div>
            <Typography variant="button">CNPJ</Typography>
            <TextField variant="outlined" size="small" fullWidth />
          </div>
        </Grid>
        <Grid item xs={12} sm={2} />
        <Grid item xs={12} sm={4} style={{ marginTop: "15px" }}>
          <div>
            <Typography variant="button">Razão(Nome)</Typography>
            <TextField variant="outlined" size="small" fullWidth />
          </div>
        </Grid>
      </Grid>

      {/* Endereço */}
      <Grid item xs={12} style={{ marginTop: "10px" }}>
        <Typography variant="h5">Endereço</Typography>
      </Grid>
      <Grid item xs={12}>
        <Address />
      </Grid>

      {/* Contato */}
      <Grid item xs={12} style={{ marginTop: "10px" }}>
        <Typography variant="h5">Contato</Typography>
      </Grid>
      <Grid item xs={12}>
        <Contact />
      </Grid>

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={10} sm={8}></Grid>
        <Grid item xs={10} sm={2} style={{ marginTop: "20px" }}>
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
  </>
);

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Prefeitura);
