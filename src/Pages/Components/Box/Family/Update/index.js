import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Creators as FamilyCreators } from "../../../../../store/ducks/family";
import { Creators as BoxCreators } from "../../../../../store/ducks/box";

import { cpfMask } from "../../../TextField/MaskInput";

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
  TextField,
  Select,
  FormControl
} from "@material-ui/core/";

export default function Create() {
  const dispatch = useDispatch();

  const visible = useSelector(state => state.family.updateFamily.visible);

  const data = useSelector(state => state.family.updateFamily.data);

  const update = () => dispatch(BoxCreators.readFamiliesRequest(data.paste_id));

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [nis, setNis] = useState("");
  const [tipo, setTipo] = useState("");
  const [situacao, setSituacao] = useState("");

  useEffect(() => {
    setNome(data.nome);
    setCpf(data.cpf);
    setNis(data.nis);
    setTipo(data.tipo);
    setSituacao(data.situacao);
  }, [data.nome, data.cpf, data.nis, data.tipo, data.situacao]);

  function changerCpf(e) {
    setCpf(cpfMask(e.target.value, cpf));
  }

  async function create(e) {
    e.preventDefault();

    var family = {
      id: data.id,
      cpf,
      nis,
      nome,
      situacao,
      tipo
    };
    await dispatch(FamilyCreators.updateFamilyRequest(family));
    await update();
    await hide();
  }

  function hide() {
    dispatch(FamilyCreators.hideModalUpdateFamily());
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      open={visible}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
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
              width: "550px"
            }}
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
                    marginBottom: "10px"
                  }}
                >
                  Cadastrar uma nova pessoa
                </Typography>
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
                    onChange={e => setNome(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={8} style={{ marginTop: "10px" }}>
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
              <Grid item xs={12} sm={1} />

              <Grid item xs={12} sm={3} style={{ marginTop: "10px" }}>
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
                      onChange={e => setTipo(e.target.value)}
                    >
                      <option value={"dependente"}>Dependente</option>

                      <option value={"responsavel"}>Responsavel</option>
                    </Select>
                  </FormControl>
                </div>
              </Grid>

              <Grid item xs={12} sm={8} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">NIS:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="text"
                    value={nis}
                    onChange={e => setNis(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={1} />

              <Grid item xs={12} sm={3} style={{ marginTop: "10px" }}>
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
                      onChange={e => setSituacao(e.target.value)}
                    >
                      <option value={tipo} />
                      <option value={"ativo"}>Ativo</option>
                      <option value={"transferido"}>Transferido</option>
                      <option value={"excluido"}>Excluido</option>
                      <option value={"obito"}>Obito</option>
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
                    onClick={hide}
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
