import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as PrefectureCreators } from "../../../../store/ducks/prefecture";

import { cnpjMask } from "../../../Components/TextField/MaskCnpj";

import TextField from "../../../Components/TextField/index";

import { Modal, Grid, Typography, Button } from "@material-ui/core/";

import Address from "./Components/Addrress/";
import Contact from "./Components/Contact/";

function View(props) {
  const { open, prefecture } = props.redux.prefecture;

  const [cnpj, setCnpj] = useState(prefecture.cnpj);
  const [nome, setNome] = useState(prefecture.nome);
  const [razao, setRazao] = useState(prefecture.razao);
  const [numero, setNumero] = useState(prefecture.numero);

  const { hideModalUpdatePrefecture } = props;

  useEffect(() => {
    setCnpj(prefecture.cnpj);
    setNome(prefecture.nome);
    setRazao(prefecture.razao);
    setNumero(prefecture.numero);
  }, [prefecture.cnpj, prefecture.nome, prefecture.numero, prefecture.razao]);

  function changerCnpj(e) {
    setCnpj(cnpjMask(e.target.value, cnpj));
  }

  return (
    <>
      <Modal
        open={open}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            border: "1px solid #D8D8D8",
            borderRadius: "5px",
            height: "auto",
            width: "700px"
          }}
        >
          <Typography
            variant="h4"
            style={{
              color: "rgb(2,99,44)"
            }}
          >
            Prefeitura
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12}>
              <form>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item xs={12} sm={6} style={{ marginTop: "15px" }}>
                    <div>
                      <Typography
                        variant="subtitle2"
                        style={{ color: "#BDBDBD" }}
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
                  <Grid item xs={12} sm={2} />
                  <Grid item xs={12} sm={4} style={{ marginTop: "15px" }}>
                    <div>
                      <Typography
                        variant="subtitle2"
                        style={{ color: "#BDBDBD" }}
                      >
                        Numero de pastas
                      </Typography>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        value={numero}
                        onChange={e => setNumero(e.target.value)}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
                    <div>
                      <Typography
                        variant="subtitle2"
                        style={{ color: "#BDBDBD" }}
                      >
                        Nome fantasia:
                      </Typography>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
                    <div>
                      <Typography
                        variant="subtitle2"
                        style={{ color: "#BDBDBD" }}
                      >
                        Razão:
                      </Typography>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        value={razao}
                        onChange={e => setRazao(e.target.value)}
                      />
                    </div>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            {/* Endereço */}
            <Grid item xs={12} style={{ marginTop: "20px" }}>
              <Typography
                variant="h5"
                style={{
                  color: "rgb(2,99,44)"
                }}
              >
                Endereço
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Address />
            </Grid>

            {/* Contato */}
            <Grid item xs={12} style={{ marginTop: "20px" }}>
              <Typography
                variant="h5"
                style={{
                  color: "rgb(2,99,44)"
                }}
              >
                Contato
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Contact />
            </Grid>
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
                  onClick={hideModalUpdatePrefecture}
                  variant="contained"
                  style={{ width: "100%", color: "#FF0000", marginTop: "20px" }}
                >
                  Fechar
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </>
  );
}
const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PrefectureCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);
