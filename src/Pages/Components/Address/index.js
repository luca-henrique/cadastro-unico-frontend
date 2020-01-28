import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Creators as AddressCreators } from "../../../store/ducks/address";

import { Grid, Typography } from "@material-ui/core/";

import TextField from "../TextField/";

import { toastr } from "react-redux-toastr";

export default function Components(props) {
  const address = useSelector(state => state.address.address);
  const exist = useSelector(state => state.address.exist);
  const dispatch = useDispatch();

  const [cep, setCep] = useState(address.cep);
  const [estado, setEstado] = useState(address.estado);
  const [numero, setNumero] = useState(address.numero);
  const [rua, setRua] = useState(address.rua);
  const [complemento, setComplemento] = useState(address.complemento);
  const [bairro, setBairro] = useState(address.bairro);

  function onUpdate(e) {
    e.preventDefault();
    try {
      var addr = {
        cep,
        estado,
        bairro,
        complemento,
        rua,
        numero
      };

      checkAttributesObj(addr);
      if (exist === true) {
        dispatch(AddressCreators.updateAddressRequest(addr));
      } else {
        dispatch(AddressCreators.createAddressRequest(addr));
      }
    } catch (err) {
      toastr.error("Preencha todos os campos do endereço");
    }
  }

  function getCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        setRua(data.logradouro);
        setBairro(data.bairro);
        setEstado(data.uf);
        setComplemento(data.complemento);
      })
      .catch(err => {});
  }

  function format(d) {
    d = soNumeros(d);
    d = d.replace(/^(\d{5})(\d)/, "$1-$2");
    if (d.length === 9) {
      getCep(d);
    }
    return d;
  }
  function soNumeros(d) {
    return d.replace(/\D/g, "");
  }

  return (
    <>
      <form onBlur={onUpdate}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={{ marginTop: "10px" }}
        >
          <Grid item xs={12} sm={3}>
            <div>
              <Typography variant="button" style={{ color: "#BDBDBD" }}>
                CEP
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                onChange={e => {
                  setCep(format(e.target.value));
                }}
                value={cep}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={2} />

          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="button" style={{ color: "#BDBDBD" }}>
                Estado
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                onChange={e => setEstado(e.target.value)}
                value={estado}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={2} />
          <Grid item xs={12} sm={1}>
            <div>
              <Typography variant="button" style={{ color: "#BDBDBD" }}>
                Nº
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                onChange={e => setNumero(e.target.value)}
                value={numero}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
            <div>
              <Typography variant="button" style={{ color: "#BDBDBD" }}>
                Bairro
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                onChange={e => setBairro(e.target.value)}
                value={bairro}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
            <div>
              <Typography variant="button" style={{ color: "#BDBDBD" }}>
                Rua
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                onChange={e => setRua(e.target.value)}
                value={rua}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
            <div>
              <Typography variant="button" style={{ color: "#BDBDBD" }}>
                Complemento
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                onChange={e => setComplemento(e.target.value)}
                value={complemento}
              />
            </div>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

TextField.defaultProps = {
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
