import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Creators as PasteCreators } from "../../../../../store/ducks/paste";
import { Creators as BoxCreators } from "../../../../../store/ducks/box";

import moment from "moment";

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
  TextField,
  withStyles
} from "@material-ui/core/";

import { green } from "@material-ui/core/colors";

import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const GreenCheckbox = withStyles({
  root: {
    color: green[200],
    "&$checked": {
      color: green[300]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

export default function Create() {
  const data = useSelector(state => state.paste.updatePaste.data);
  const visible = useSelector(state => state.paste.updatePaste.visible);
  const dispatch = useDispatch();

  const [numberPaste, setNumberPaste] = useState("");
  const [codHome, setCodHome] = useState("");
  const [district, setDisctric] = useState("");
  const [dateInterview, setDateInterview] = useState("");
  const [dateVisit, setDateVisit] = useState("");
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");

  const [situation, setSituation] = useState(false);
  const [oldMan, setOldMan] = useState(false);
  const [deficient, setDeficient] = useState(false);
  const [benefit, setBenefit] = useState(false);

  const id = useSelector(state => state.box.box.id);

  const update = () => dispatch(BoxCreators.readPastesRequest(id));

  useEffect(() => {
    setNumberPaste(data.numberPaste);
    setCodHome(data.codHome);
    setDisctric(data.district);
    setDateInterview(data.dateInterview);
    setDateVisit(data.dateVisit);
    setReason(data.reason);
    setNote(data.note);
    setSituation(data.situation);
    setOldMan(data.oldMan);
    setDeficient(data.deficient);
    setBenefit(data.benefit);
  }, [
    data.benefit,
    data.codHome,
    data.dateInterview,
    data.dateVisit,
    data.dateVisiti,
    data.deficient,
    data.district,
    data.note,
    data.numberPaste,
    data.oldMan,
    data.reason,
    data.situation
  ]);

  function hide() {
    dispatch(PasteCreators.hideModalUpdatePaste());
  }

  async function create(e) {
    e.preventDefault();

    var paste = {
      id: data.id,
      box_id: data.box_id,

      numberPaste,
      codHome,

      district,

      dateInterview,
      dateVisit,

      reason,
      note,

      situation,
      deficient,
      oldMan,
      benefit
    };

    await dispatch(PasteCreators.updatePasteRequest(paste));
    await update();
    await hide();
  }

  function formatDate(data) {
    const date = moment(data).format("YYYY-MM-DD");
    return date;
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
              width: "600px"
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
                  Cadastrar Pasta
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">Numero da pasta:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={numberPaste}
                    onChange={e => setNumberPaste(e.target.value)}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={7} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">Codigo domiciliar:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={codHome}
                    onChange={e => setCodHome(e.target.value)}
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
                    <div>
                      <Typography variant="button">Bairro:</Typography>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={district}
                        onChange={e => setDisctric(e.target.value)}
                      />
                    </div>
                  </FormControl>
                </div>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">Data da entrevista:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="date"
                    value={formatDate(dateInterview)}
                    onChange={e => setDateInterview(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">Data da visita:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="date"
                    value={formatDate(dateVisit)}
                    onChange={e => setDateVisit(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">Motivo:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows="2"
                    value={reason}
                    onChange={e => setReason(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">Observação:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows="2"
                    value={note}
                    onChange={e => setNote(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={2} style={{ marginTop: "20px" }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Informações</FormLabel>
                  <FormGroup aria-label="position" column="true">
                    <FormControlLabel
                      style={{ color: "#A4A4A4" }}
                      checked={situation}
                      onChange={e => {
                        setSituation(e.target.checked);
                      }}
                      control={<GreenCheckbox />}
                      label="situação"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      style={{ color: "#A4A4A4" }}
                      checked={oldMan}
                      onChange={e => {
                        setOldMan(e.target.checked);
                      }}
                      control={<GreenCheckbox />}
                      label="idoso"
                      labelPlacement="start"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={1} />

              <Grid item xs={12} sm={9} style={{ marginTop: "36px" }}>
                <FormControl component="fieldset">
                  <FormGroup aria-label="position" column="true">
                    <FormControlLabel
                      style={{ color: "#A4A4A4" }}
                      checked={benefit}
                      onChange={e => {
                        setBenefit(e.target.checked);
                      }}
                      control={<GreenCheckbox />}
                      label="BPC(Benefício assistencial ao idoso)"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      style={{ color: "#A4A4A4" }}
                      checked={deficient}
                      onChange={e => {
                        setDeficient(e.target.checked);
                      }}
                      control={<GreenCheckbox />}
                      label="deficiente"
                      labelPlacement="start"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "15px" }}>
                  <Button
                    variant="contained"
                    style={{ color: "rgb(2,99,44)", width: "100%" }}
                    type="submit"
                  >
                    Atualizar
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
