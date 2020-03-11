import React, { useState } from "react";

import { Creators as BoxCreators } from "../../../../store/ducks/box";
import { Creators as PrefeituraCreators } from "../../../../store/ducks/prefecture";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toastr } from "react-redux-toastr";

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

import { nisMask } from "../../../Components/TextField/MaskNIS";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%"
    },
    [theme.breakpoints.up("md")]: {
      width: "600px"
    }
  },
  main: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      display: "inline-block"
    }
  }
}));

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
  const [numPaste, setNumPaste] = useState("");
  const [numBox, setNumBox] = useState("");
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
  const [local, setLocal] = useState(false);

  const visible = props.redux.box.visible;

  const classes = useStyles();

  async function create(e) {
    e.preventDefault();

    var box = {
      numBox,
      numPaste,
      codHome,
      district,
      dateInterview,
      dateVisit,
      reason,
      note,

      situation,
      deficient,
      oldMan,
      benefit,
      local
    };

    const { readBoxesRequest, createBoxRequest } = props;

    await readBoxesRequest();
    await createBoxRequest(box);
    await hide();
  }

  function changerCod(e) {
    setCodHome(nisMask(e.target.value, codHome));
  }

  function hide() {
    setNumBox("");
    setNumPaste("");

    setCodHome("");
    setDisctric("");

    setReason("");
    setNote("");

    setSituation(false);
    setDeficient(false);
    setOldMan(false);
    setBenefit(false);
    setLocal(false);
    const { hideModalNewBox } = props;
    hideModalNewBox();
  }

  return (
    <Modal
      style={{
        alignItems: "center",
        justifyContent: "center",
        overflowX: "visible",
        overflowY: "scroll",
        marginLeft: "auto",
        marginRight: "auto"
      }}
      className={classes.main}
      open={visible}
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
              borderRadius: "5px"
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
                    marginBottom: "10px"
                  }}
                >
                  Cadastrar
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">Numero da caixa:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={numBox}
                    onChange={e => setNumBox(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">Numero da pasta:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={numPaste}
                    onChange={e => setNumPaste(e.target.value)}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={8} />
              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">Codigo domiciliar:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="text"
                    value={codHome}
                    onChange={changerCod}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">Bairro:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="text"
                    value={district}
                    onChange={e => setDisctric(e.target.value)}
                  />
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
              <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
                <FormControl component="fieldset">
                  <FormLabel
                    style={{ color: "rgba(2, 99, 44, 0.7)" }}
                    component="legend"
                  >
                    Informações
                  </FormLabel>
                  <FormGroup aria-label="position" column="true">
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Grid item xs={12} sm={12}>
                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          value={local}
                          onChange={e => setLocal(e.target.checked)}
                          control={<GreenCheckbox />}
                          label="Local"
                          labelPlacement="end"
                        />

                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          value={situation}
                          onChange={e => setSituation(e.target.checked)}
                          control={<GreenCheckbox />}
                          label="situação"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          value={oldMan}
                          onChange={e => setOldMan(e.target.checked)}
                          control={<GreenCheckbox />}
                          label="idoso"
                          labelPlacement="end"
                        />

                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          value={benefit}
                          onChange={e => setBenefit(e.target.checked)}
                          control={<GreenCheckbox />}
                          label="BPC"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          value={deficient}
                          onChange={e => {
                            setDeficient(e.target.checked);
                          }}
                          control={<GreenCheckbox />}
                          label="deficiente"
                          labelPlacement="end"
                        />
                      </Grid>
                    </Grid>
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
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...BoxCreators, ...PrefeituraCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Create);
