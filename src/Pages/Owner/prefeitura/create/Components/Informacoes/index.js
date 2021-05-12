import React, { useState } from "react";


import { Grid, Typography, Button } from "@material-ui/core/";
import { cnpjMask } from "../../../../../Components/TextField/MaskCnpj";
import TextField from "../../../../../Components/TextField/index";

import { toastr } from "react-redux-toastr";

const Informacoes = (props) => {
  const { createPrefectureRequest, hideModalCreatePrefecture } = props;

  const [cnpj, setCnpj] = useState("");
  const [razao, setRazao] = useState("");
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");

  function saveInformation() {
    try {
      var pref = {
        cnpj,
        nome,
        razao,
        numero,
      };

      checkAttributesObj(pref);

      createPrefectureRequest(pref);
      hideModalCreatePrefecture();
    } catch (err) {
      toastr.error("Preencha todos os campos");
    }
  }

  function changerCnpj(e) {
    setCnpj(cnpjMask(e.target.value, cnpj));
  }

  function checkAttributesObj(obj) {
    // eslint-disable-next-line no-unused-vars
    for (var [key, value] of Object.entries(obj)) {
      if (typeof value === "undefined" || value === null || value === "") {
        throw new UserException("Null");
      }
    }
  }

  function UserException(message) {
    this.message = message;
    this.name = "UserException";
  }

  return (
    <Grid item xs={12}>
      <form onBlur={saveInformation}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12}>
            <Typography
              variant="h4"
              style={{
                marginTop: "15px",
                textAlign: "center",
                color: "rgba(0, 0, 0, 0.54)",
              }}
            >
              Cadastrar Prefeitura
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
            <div>
              <Typography
                variant="subtitle2"
                style={{ color: "rgba(0, 0, 0, 0.54)" }}
              >
                CNPJ:
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={cnpj}
                onChange={changerCnpj}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
            <div>
              <Typography
                variant="subtitle2"
                style={{ color: "rgba(0, 0, 0, 0.54)" }}
              >
                Razão:
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={razao}
                onChange={(e) => setRazao(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
            <div>
              <Typography
                variant="subtitle2"
                style={{ color: "rgba(0, 0, 0, 0.54)" }}
              >
                Nome fantasia:
              </Typography>
              <TextField
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
              <Typography
                variant="subtitle2"
                style={{ color: "rgba(0, 0, 0, 0.54)" }}
              >
                Numero de pastas:
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              color="secondary"
              disableElevation
            >
              cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};



export default (Informacoes);
