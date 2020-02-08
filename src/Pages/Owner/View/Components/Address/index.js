import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Creators as AddressCreators } from "../../../../../store/ducks/address_prefecture";

import { Grid, Typography } from "@material-ui/core/";

import TextField from "../../../../Components/TextField/index";

import { toastr } from "react-redux-toastr";

export default function Components() {
  const address = useSelector(state => state.prefectureAddrress.address);
  const exist = useSelector(state => state.prefectureAddrress.exist);
  const dispatch = useDispatch();

  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState();

  useEffect(() => {
    if (exist) {
      setCep(address.cep);
      setEstado(address.estado);
      setNumero(address.numero);
      setRua(address.rua);
      setBairro(address.bairro);
      setComplemento(address.complemento);
    }
  }, [
    exist,
    address.cep,
    address.estado,
    address.numero,
    address.rua,
    address.bairro,
    address.complemento
  ]);

  console.log("Endereço");
  console.log(exist);
  console.log(address);

  function onUpdate(e) {
    try {
      var addr = {
        prefecture_id: 1,
        cep,
        estado,
        bairro,
        complemento,
        rua,
        numero
      };

      checkAttributesObj(addr);
      if (exist === true) {
        console.log("AQUI");
        dispatch(AddressCreators.updateAddressPrefectureRequest(addr));
      } else {
        console.log("criando");
        dispatch(AddressCreators.createAddressPrefectureRequest(addr));
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
