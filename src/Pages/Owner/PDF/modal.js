import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Creators as GeneratorCreators } from "../../../store/ducks/generator";

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
  Checkbox,
  withStyles,
} from "@material-ui/core/";

import { green } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      overflowY: "scroll",
    },
    [theme.breakpoints.up("md")]: {
      width: "500px",
    },
  },
}));

// eslint-disable-next-line no-unused-vars
const GreenCheckbox = withStyles({
  root: {
    color: green[200],
    "&$checked": {
      color: green[300],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Create() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const visible = useSelector((state) => state.generator.open);

  /*
  const districts = useSelector(state => state.district.districts);

  const [dtVisitIn, setDtVisitIn] = useState("");
  const [dtVisitTo, setDtVisitTo] = useState("");

  const [dtInterviewIn, setDtInterviewIn] = useState("");
  const [dtInterviewTo, setDtInterviewTo] = useState("");

  const [all, setAll] = useState(false);
  const [oldMan, setOldMan] = useState(false);
  const [deficient, setDeficient] = useState(false);
  const [benefit, setBenefit] = useState(false);

  const [allFamilies, setAllFamilies] = useState(false);
  const [active, setActive] = useState(false);
  const [deactivated, setDeactivated] = useState(false);

  const [district, setDisctrict] = useState("");
  */

  function etiquetas() {
    dispatch(GeneratorCreators.generatorPdfEtiquetasRequest());
    dispatch(GeneratorCreators.hideModalGeneratorPdf());
    openTabEtiquetas();
  }

  function descartes() {
    dispatch(GeneratorCreators.generatorPdfDescartesRequest());
    dispatch(GeneratorCreators.hideModalGeneratorPdf());
    openTabDescartes();
  }

  function sintetico() {
    dispatch(GeneratorCreators.generatorPdfTodosRequest());
    dispatch(GeneratorCreators.hideModalGeneratorPdf());
    openTabSintetico();
  }

  function hide() {
    dispatch(GeneratorCreators.hideModalGeneratorPdf());
  }

  function openTabEtiquetas() {
    window.open("/etiquetas");
  }

  function openTabDescartes() {
    window.open("/descartes");
  }

  function openTabSintetico() {
    window.open("/sintetico");
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
      <form>
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
                  Relatorio geral
                </Typography>
              </Grid>
              {/* 
              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <FormControl
                    variant="outlined"
                    style={{ width: "100%" }}
                    size="small"
                    fullWidth
                    value={district}
                    onChange={e => setDisctrict(e.target.value)}
                  >
                    <Typography variant="button">Bairro:</Typography>
                    <Select native size="small" fullWidth>
                      <option value="" />
                      {districts.map(teste => (
                        <option key={teste.id} value={teste.nome}>
                          {teste.nome}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
                <div>
                  <Typography variant="button">Data da visita:</Typography>
                </div>
              </Grid>

              <Grid item xs={12} sm={5} style={{ marginTop: "2px" }}>
                <div>
                  <Typography variant="button">De:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={dtVisitIn}
                    onChange={e => setDtVisitIn(e.target.value)}
                    fullWidth
                    type="date"
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={2} style={{ marginTop: "2px" }} />

              <Grid item xs={12} sm={5} style={{ marginTop: "2px" }}>
                <div>
                  <Typography variant="button">Até:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={dtVisitTo}
                    onChange={e => setDtVisitTo(e.target.value)}
                    type="date"
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
                <div>
                  <Typography variant="button">Data da entrevista:</Typography>
                </div>
              </Grid>

              <Grid item xs={12} sm={5} style={{ marginTop: "2px" }}>
                <div>
                  <Typography variant="button">De:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={dtInterviewIn}
                    onChange={e => setDtInterviewIn(e.target.value)}
                    fullWidth
                    type="date"
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={2} style={{ marginTop: "2px" }} />

              <Grid item xs={12} sm={5} style={{ marginTop: "2px" }}>
                <div>
                  <Typography variant="button">Até:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={dtInterviewTo}
                    onChange={e => setDtInterviewTo(e.target.value)}
                    type="date"
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={5} style={{ marginTop: "10px" }}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item xs={12} sm={6}>
                    <FormGroup
                      aria-label="position"
                      column="true"
                      style={{ marginTop: "10px" }}
                    >
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
                        label="bpc"
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
                      <FormControlLabel
                        style={{ color: "#A4A4A4" }}
                        value={all}
                        onChange={e => {
                          setAll(e.target.checked);
                        }}
                        control={<GreenCheckbox />}
                        label="todos"
                        labelPlacement="end"
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={2} style={{ marginTop: "2px" }} />

              <Grid item xs={12} sm={5} style={{ marginTop: "10px" }}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item xs={12} sm={6}>
                    <FormGroup
                      aria-label="position"
                      column="true"
                      style={{
                        marginTop: "10px",
                        borderWidth: "1px solid #999"
                      }}
                    >
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <Grid item xs={12} sm={12}>
                          <FormControlLabel
                            style={{ color: "#A4A4A4" }}
                            value={active}
                            onChange={e => setActive(e.target.checked)}
                            control={<GreenCheckbox />}
                            label="ativos"
                            labelPlacement="end"
                          />

                          <FormControlLabel
                            style={{ color: "#A4A4A4" }}
                            value={deactivated}
                            onChange={e => setDeactivated(e.target.checked)}
                            control={<GreenCheckbox />}
                            label="inativos"
                            labelPlacement="end"
                          />

                          <FormControlLabel
                            style={{ color: "#A4A4A4" }}
                            value={allFamilies}
                            onChange={e => setAllFamilies(e.target.checked)}
                            control={<GreenCheckbox />}
                            label="todos"
                            labelPlacement="end"
                          />
                        </Grid>
                      </Grid>
                    </FormGroup>
                  </Grid>
                </Grid>
              </Grid>
              */}

              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "15px" }}>
                  <Button
                    variant="contained"
                    onClick={() =>
                      dispatch(GeneratorCreators.generateHangTagsRequest())
                    }
                    style={{ color: "rgb(2,99,44)", width: "100%" }}
                  >
                    Etiquetas
                  </Button>
                </div>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "15px" }}>
                  <Button
                    variant="contained"
                    style={{ color: "rgb(2,99,44)", width: "100%" }}
                  >
                    Descarte
                  </Button>
                </div>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "15px" }}>
                  <Button
                    variant="contained"
                    style={{ color: "rgb(2,99,44)", width: "100%" }}
                    onClick={() => {
                      dispatch(GeneratorCreators.generateSinteticoRequest());
                    }}
                  >
                    Sintetico
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
