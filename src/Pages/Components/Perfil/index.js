import React from "react";

import { Grid, Typography } from "@material-ui/core/";

import PersonalInformation from "../personal/index";
import Login from "../../Auth/ChangerPassword/Login";

import Address from "../Address/index";
import Contact from "../Contact/index";

export default function Perfil() {
  return (
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

        <Grid item xs={12} sm={12}>
          <Address />
        </Grid>

        {/* Contato */}

        <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
          <Typography variant="h5">Contato</Typography>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Contact />
        </Grid>
      </Grid>
    </div>
  );
}
