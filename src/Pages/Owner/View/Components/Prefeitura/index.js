import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators as PrefectureCreators } from "../../../../../store/ducks/prefecture";

import { Grid, Typography } from "@material-ui/core/";

import TextField from "../../../../Components/TextField/index";
import Address from "./Addrress/index";
import Contact from "./Contact/index";

export default function Prefeitura() {
  const prefeitura = useSelector(state => state.prefecture.prefecture);
  const exist = useSelector(state => state.prefecture.exist);
  const dispatch = useDispatch();

  const [cnpj, setCnpj] = useState("");
  const [nome, setNome] = useState("");

  useEffect(() => {
    if (exist) {
      setCnpj(prefeitura.cnpj);
      setNome(prefeitura.nome);
    }
  }, [exist, prefeitura.cnpj, prefeitura.nome]);

  function prefecture() {
    try {
      var pref = {
        id: 1,
        cnpj,
        nome
      };

      checkAttributesObj(pref);
      if (exist === true) {
        console.log("Atulizar Prefeitura");
        console.log(pref);
        dispatch(PrefectureCreators.updatePrefectureRequest(pref));
      } else {
        console.log("Criar Prefeitura");
        console.log(pref);
        dispatch(PrefectureCreators.createPrefectureRequest(pref));
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
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

        <Grid item xs={12}>
          <form onBlur={prefecture}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12} sm={3} style={{ marginTop: "15px" }}>
                <div>
                  <Typography variant="button">CNPJ</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={cnpj}
                    onChange={e => setCnpj(e.target.value)}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={2} />
              <Grid item xs={12} sm={4} style={{ marginTop: "15px" }}>
                <div>
                  <Typography variant="button">Razão(Nome)</Typography>
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
        </Grid>

        {/* Endereço */}
        <Grid item xs={12} style={{ marginTop: "10px" }}>
          <Typography variant="h5">Endereço</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Address />
        </Grid>

        {/* Contato */}
        <Grid item xs={12} style={{ marginTop: "10px" }}>
          <Typography variant="h5">Contato</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Contact />
        </Grid>
      </Grid>
    </>
  );
}

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
