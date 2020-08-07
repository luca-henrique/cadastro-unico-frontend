import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as FamilyCreators } from "~/store/ducks/family";
import { Creators as BoxCreators } from "~/store/ducks/box";

import { useSelector } from "react-redux";

import { cpfMask } from "../../../Components/TextField/MaskInput";

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
  TextField,
  Select,
  FormControl,
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      overflowY: "scroll",
    },
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
  },
}));

function Update(props) {
  const classes = useStyles();

  const { hideModalUpdateFamily, updateFamilyRequest } = props;

  const visible = useSelector((state) => state.family.update_family.visible);
  const data = useSelector((state) => state.family.update_family.data);

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [nis, setNis] = useState("");
  const [tipo, setTipo] = useState("");
  const [situacao, setSituacao] = useState("");

  useEffect(() => {
    if (typeof data.cpf === "string") {
      setCpf(data.cpf);
    }
    setNome(data.nome);
    setNis(data.nis);
    setTipo(data.tipo === null ? "" : data.tipo);
    setSituacao(data.situacao === null ? "" : data.situacao);
  }, [data.cpf, data.nis, data.nome, data.situacao, data.tipo]);

  function changerCpf(e) {
    setCpf(cpfMask(e.target.value, cpf));
  }

  function create(e) {
    e.preventDefault();

    var family = {
      id: data.id,
      cpf,
      nis,
      nome,
      situacao,
      tipo,
    };

    if (data.tipo === "RESPONSAVEL" || family.tipo === "DEPENDENTE") {
    }

    hide();

    updateFamilyRequest(family);
  }

  function hide() {
    setCpf("");
    hideModalUpdateFamily();
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={visible}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <form onSubmit={create}>
        <Fade in={visible}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              border: "1px solid #D8D8D8",
              borderRadius: "5px",
            }}
            className={classes.modal}
          >
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
                    color: "rgba(2,99,44,0.7)",
                    textAlign: "center",
                    marginBottom: "10px",
                  }}
                >
                  Atualizar Familiar
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">CPF:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="text"
                    value={cpf}
                    onChange={changerCpf}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">NIS:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="text"
                    value={nis}
                    onChange={(e) => setNis(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">Nome:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <FormControl
                    variant="outlined"
                    style={{ width: "100%" }}
                    size="small"
                    fullWidth
                  >
                    <Typography variant="button">Tipo:</Typography>
                    <Select
                      native
                      size="small"
                      fullWidth
                      value={tipo}
                      onChange={(e) => setTipo(e.target.value)}
                    >
                      <option value={"DEPENDENTE"}>Dependente</option>
                      <option value={"RESPONSAVEL"}>Responsavel</option>
                    </Select>
                  </FormControl>
                </div>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <FormControl
                    variant="outlined"
                    style={{ width: "100%" }}
                    size="small"
                    fullWidth
                  >
                    <Typography variant="button">Situação:</Typography>
                    <Select
                      native
                      size="small"
                      fullWidth
                      value={situacao}
                      onChange={(e) => setSituacao(e.target.value)}
                    >
                      <option value={"Ativo"}>Ativo</option>
                      <option value={"Transferido"}>Transferido</option>
                      <option value={"Excluido"}>Excluido</option>
                      <option value={"Obito"}>Obito</option>
                    </Select>
                  </FormControl>
                </div>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "15px" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ color: "rgb(2,99,44)", width: "100%" }}
                  >
                    Salvar
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "15px" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ width: "100%" }}
                    onClick={hideModalUpdateFamily}
                  >
                    Fechar
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </form>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  redux: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...FamilyCreators, ...BoxCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Update);

Update.defaultProps = {
  cpf: "",
};
