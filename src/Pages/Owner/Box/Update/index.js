import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as BoxCreators } from "../../../../store/ducks/box";

import moment from "moment";
import { nisMask } from "../../../Components/TextField/MaskNIS";

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
  TextField,
  withStyles,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: "700px",
      width: "600px",
    },
  },
  main: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      display: "inline-block",
    },
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[200],
    "&$checked": {
      color: green[300],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Update(props) {
  const { data, visible } = props.redux.box.updateBox;

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

  const classes = useStyles();

  useEffect(() => {
    if (typeof data !== "undefined") {
      setNumPaste(data.num_paste);
      setNumBox(data.num_box);
      setCodHome(data.cod_home);
      setDisctric(data.district);
      setDateInterview(data.date_interview);
      setDateVisit(data.date_visit);
      setReason(data.reason === null ? "" : data.reason);
      setNote(data.note === null ? "" : data.note);
      setSituation(data.situation);
      setOldMan(data.old_man);
      setDeficient(data.deficient);
      setBenefit(data.benefit);
      setLocal(data.local);
    }
  }, [data]);

  function hide() {
    const { hideModalUpdateBox } = props;
    hideModalUpdateBox();
  }

  function create(e) {
    e.preventDefault();

    var box = {
      id: data.id,

      num_paste: numPaste,
      num_box: numBox,
      cod_home: codHome,

      district,

      date_interview: dateInterview,
      date_visit: dateVisit,

      reason,
      note,

      situation,
      deficient,
      old_man: oldMan,
      benefit,
      local,
    };

    const { updateBoxRequest } = props;
    updateBoxRequest(box);
    hide();
  }

  function formatDate(data) {
    const date = moment(data).format("YYYY-MM-DD");
    return date;
  }

  function changerCod(e) {
    setCodHome(nisMask(e.target.value, codHome));
  }

  return (
    <Modal
      style={{
        alignItems: "center",
        justifyContent: "center",
        overflowX: "visible",
        overflowY: "scroll",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      className={classes.main}
      open={typeof visible === "undefined" ? false : visible}
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
              overflowX: "visible",
              overflowY: "scroll",
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
                  Atualizar
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
                    onChange={(e) => setNumBox(e.target.value)}
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
                    onChange={(e) => setNumPaste(e.target.value)}
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
                    onChange={(e) => setDisctric(e.target.value)}
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
                    value={formatDate(dateInterview)}
                    onChange={(e) => setDateInterview(e.target.value)}
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
                    onChange={(e) => setDateVisit(e.target.value)}
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
                    onChange={(e) => setReason(e.target.value)}
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
                    onChange={(e) => setNote(e.target.value)}
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
                          checked={local}
                          onChange={(e) => setLocal(e.target.checked)}
                          control={<GreenCheckbox />}
                          label="local"
                          labelPlacement="end"
                        />

                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          checked={situation}
                          onChange={(e) => setSituation(e.target.checked)}
                          control={<GreenCheckbox />}
                          label="situação"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          checked={oldMan}
                          onChange={(e) => setOldMan(e.target.checked)}
                          control={<GreenCheckbox />}
                          label="idoso"
                          labelPlacement="end"
                        />

                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          checked={benefit}
                          onChange={(e) => setBenefit(e.target.checked)}
                          control={<GreenCheckbox />}
                          label="BPC"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          checked={deficient}
                          onChange={(e) => {
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
}

const mapStateToProps = (state) => ({
  redux: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...BoxCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Update);
