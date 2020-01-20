import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import AuthActions from "../../../store/ducks/auth";
import { Creators as AddressCreators } from "../../../store/ducks/address";

import { Grid, Typography } from "@material-ui/core/";

import TextField from "../TextField/";

function Components(props) {
  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [num, setNum] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");

  function onUpdate(e) {
    e.preventDefault();

    const { setAddress } = props;
    var address = {
      cep,
      estado,
      num,
      rua,
      complemento,
      bairro
    };

    setAddress(address);
    console.log(props);
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
                onChange={e => setCep(e.target.value)}
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
                onChange={e => setNum(e.target.value)}
                value={num}
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

const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AddressCreators, AuthActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Components);
