import React, { useState, useEffect } from "react";

import { Creators as GeneretePdfCreators } from "~/store/ducks/generete";
import { Creators as DistrictCreators } from "~/store/ducks/district";

import { useSelector, useDispatch } from "react-redux";

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
  Select,
} from "@material-ui/core/";

import { green } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
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

const Create = () => {
  const [numPaste, setNumPaste] = useState("");
  const [numBox, setNumBox] = useState("");

  const [district, setDisctrict] = useState("");

  const [interviewInitDate, setInterviewInitDate] = useState("");
  const [interviewFinalDate, setInterviewFinalDate] = useState("");

  const [visitInitDate, setVisitInitDate] = useState("");
  const [visitFinalDate, setVisitFinalDate] = useState("");

  const [situation, setSituation] = useState(false);
  const [oldMan, setOldMan] = useState(false);
  const [deficient, setDeficient] = useState(false);
  const [benefit, setBenefit] = useState(false);
  const [local, setLocal] = useState(false);

  const [responsibleStatus, setResponsibleStatus] = useState(false);
  const [all, setAll] = useState(false);

  const { districts } = useSelector((state) => state.district);

  const visible = useSelector((state) => state.generete.box_filter_visible);

  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    if (visible) {
      dispatch(DistrictCreators.readDistrictRequest());
    }
  }, [dispatch, visible]);

  function create(e) {
    e.preventDefault();

    var box = {
      num_box: numBox,
      num_paste: numPaste,

      district,

      date_interview: {
        init_date: interviewInitDate,
        final_date: interviewFinalDate,
      },

      date_visit: {
        init_date: visitInitDate,
        final_date: visitFinalDate,
      },

      situation,
      deficient,
      old_man: oldMan,
      benefit,
      local,

      responsible: {
        responsibleStatus,
        all,
      },
    };

    dispatch(GeneretePdfCreators.filterBoxRequest(box));

    hide();
  }

  function hide() {
    setNumBox("");
    setNumPaste("");

    setDisctrict("");

    setSituation(false);
    setDeficient(false);
    setOldMan(false);
    setBenefit(false);
    setLocal(false);

    setResponsibleStatus(false);

    setInterviewInitDate("");
    setInterviewFinalDate("");

    setVisitFinalDate("");
    setVisitInitDate("");

    setAll(false);
    dispatch(GeneretePdfCreators.hideModalGenereteBoxPdf());
  }

  return (
    <Modal
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        overflowX: "visible",
        overflowY: "scroll",
      }}
      className={classes.main}
      open={visible}
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
                  Filtro
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5} style={{ marginTop: "10px" }}>
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

              <Grid item xs={12} sm={2} />

              <Grid item xs={12} sm={5} style={{ marginTop: "10px" }}>
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

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <FormControl
                    variant="outlined"
                    style={{ width: "100%" }}
                    size="small"
                    fullWidth
                    value={district}
                    onChange={(e) => setDisctrict(e.target.value)}
                  >
                    <Typography variant="button">Bairro:</Typography>
                    <Select native size="small" fullWidth>
                      <option value="" />
                      {districts.map((teste) => (
                        <option key={teste.id} value={teste.nome}>
                          {teste.nome}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <Typography variant="button">Data da entrevista:</Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ width: "50%", paddingRight: "10px" }}>
                    <Typography variant="button">DE:</Typography>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      type="date"
                      value={interviewInitDate}
                      onChange={(e) => setInterviewInitDate(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "50%", paddingLeft: "10px" }}>
                    <Typography variant="button">ATÉ:</Typography>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      type="date"
                      value={interviewFinalDate}
                      onChange={(e) => setInterviewFinalDate(e.target.value)}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <Typography variant="button">Data da visita:</Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ width: "50%", paddingRight: "10px" }}>
                    <Typography variant="button">DE:</Typography>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      type="date"
                      value={visitInitDate}
                      onChange={(e) => setVisitInitDate(e.target.value)}
                    />
                  </div>
                  <div style={{ width: "50%", paddingLeft: "10px" }}>
                    <Typography variant="button">ATÉ:</Typography>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      type="date"
                      value={visitFinalDate}
                      onChange={(e) => setVisitFinalDate(e.target.value)}
                    />
                  </div>
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
                          value={all}
                          onChange={(e) => {
                            setAll(e.target.checked);
                          }}
                          control={<GreenCheckbox />}
                          label="todos"
                          labelPlacement="end"
                          disabled={responsibleStatus}
                        />

                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          value={responsibleStatus}
                          disabled={all}
                          onChange={(e) => {
                            setResponsibleStatus(e.target.checked);
                          }}
                          control={<GreenCheckbox />}
                          label="responsavel"
                          labelPlacement="end"
                        />

                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          value={local}
                          onChange={(e) => setLocal(e.target.checked)}
                          control={<GreenCheckbox />}
                          label="local"
                          labelPlacement="end"
                        />

                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          value={situation}
                          onChange={(e) => setSituation(e.target.checked)}
                          control={<GreenCheckbox />}
                          label="situação"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          value={oldMan}
                          onChange={(e) => setOldMan(e.target.checked)}
                          control={<GreenCheckbox />}
                          label="idoso"
                          labelPlacement="end"
                        />

                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          value={benefit}
                          onChange={(e) => setBenefit(e.target.checked)}
                          control={<GreenCheckbox />}
                          label="BPC"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          style={{ color: "#A4A4A4" }}
                          value={deficient}
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
                    Gerar
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

export default Create;
