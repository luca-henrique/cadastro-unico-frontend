import React, { useState, useEffect } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as PrefeituraCreators } from "../../../../../../store/ducks/prefecture";

import { Grid, Typography } from "@material-ui/core/";
import { cnpjMask } from "../../../../../Components/TextField/MaskCnpj";
import TextField from "../../../../../Components/TextField/index";

import { toastr } from "react-redux-toastr";

const Informacoes = props => {
  const { createPrefectureRequest } = props;

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
        numero
      };

      checkAttributesObj(pref);

      createPrefectureRequest(pref);
    } catch (err) {
      toastr.error("Preencha todos os campos");
    }
  }

  function changerCnpj(e) {
    setCnpj(cnpjMask(e.target.value, cnpj));
  }

  function checkAttributesObj(obj) {
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
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "34px",
        width: "auto"
      }}
    >
      <Grid item xs={12}>
        <form onBlur={saveInformation}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={4} style={{ marginTop: "15px" }}>
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
            <Grid item xs={12} sm={1} />

            <Grid item xs={12} sm={7} style={{ marginTop: "15px" }}>
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
                  onChange={e => setRazao(e.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={8} style={{ marginTop: "15px" }}>
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
                  onChange={e => setNome(e.target.value)}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={1} />

            <Grid item xs={12} sm={3} style={{ marginTop: "15px" }}>
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
                  onChange={e => setNumero(e.target.value)}
                />
              </div>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PrefeituraCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Informacoes);
