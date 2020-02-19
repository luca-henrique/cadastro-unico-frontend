import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Creators as PasteCreators } from "../../../../store/ducks/paste";

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
  TextField,
  withStyles,
  Select,
  IconButton
} from "@material-ui/core/";

import { Add } from "@material-ui/icons/";

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

const Create = props => {
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

  const { visible } = props.redux;

  function hide() {
    const { hideModalNewPaste } = props;
    hideModalNewPaste();
  }

  function create(e) {
    e.preventDefault();
    //falta o id da caixa
    var paste = {
      //idBox: id,
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

    //dispatch(PasteCreators.createPasteRequest(paste));
  }

  function createDistrict() {}

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
                    type="number"
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
                    type="text"
                    value={codHome}
                    onChange={e => setCodHome(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={11} style={{ marginTop: "10px" }}>
                <div>
                  <FormControl
                    variant="outlined"
                    style={{ width: "100%" }}
                    size="small"
                    fullWidth
                  >
                    <Typography variant="button">Bairro:</Typography>
                    <Select
                      native
                      size="small"
                      fullWidth
                      value={district}
                      onChange={e => setDisctric(e.target.value)}
                      inputProps={{
                        name: "age",
                        id: "outlined-age-native-simple"
                      }}
                    >
                      <option value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                </div>
              </Grid>

              <Grid item xs={12} sm={1} style={{ marginTop: "30px" }}>
                <IconButton
                  style={{ color: "rgba(2,99,44,0.7)" }}
                  onClick={createDistrict}
                >
                  <Add fontSize="small" />
                </IconButton>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">Data da entrevista:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="date"
                    value={dateInterview}
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
                    value={dateVisit}
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
                    type="text"
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
                    type="text"
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
                      value={situation}
                      onChange={e => setSituation(e.target.checked)}
                      control={<GreenCheckbox />}
                      label="situação"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      style={{ color: "#A4A4A4" }}
                      value={oldMan}
                      onChange={e => setOldMan(e.target.checked)}
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
                      value={benefit}
                      onChange={e => setBenefit(e.target.checked)}
                      control={<GreenCheckbox />}
                      label="BPC(Benefício assistencial ao idoso)"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      style={{ color: "#A4A4A4" }}
                      value={deficient}
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
};

const mapStateToProps = state => ({
  redux: state.paste
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PasteCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Create);
