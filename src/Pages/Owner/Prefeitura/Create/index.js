import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Creators as PrefeituraCreators } from "../../../../store/ducks/prefecture";

import clsx from "clsx";

import {
  Modal,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  StepConnector,
} from "@material-ui/core/";

import Check from "@material-ui/icons/Check";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import Information from "./Components/Informacoes/index";
import Endereco from "./Components/Addrress/index";
import Contato from "./Components/Contact/";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      overflowX: "visible",
      overflowY: "scroll",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      overflowX: "visible",
      overflowY: "scroll",
    },
  },
  button: {
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.54)",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "rgb(2,99,44)",
    },
  },
  completed: {
    "& $line": {
      borderColor: "rgb(2,99,44)",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    color: "rgb(2,99,44)",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "rgb(2,99,44)",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

function getSteps() {
  return ["Informações", "Endereço", "Contato"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Information />;
    case 1:
      return <Endereco />;
    case 2:
      return <Contato />;
    default:
      return "Unknown step";
  }
}

const Create = (props) => {
  const { exist } = props.redux.prefecture;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const { failLoadPrefecture, readPrefectureRequest } = props;

  function hideModal() {
    failLoadPrefecture(true);
    readPrefectureRequest();
    handleReset();
  }

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Modal
        open={exist ? false : true}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            border: "1px solid #D8D8D8",
            borderRadius: "5px",
            height: "auto",
            width: "800px",
          }}
        >
          <div className={classes.root}>
            <Stepper activeStep={activeStep} connector={<QontoConnector />}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};

                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel
                      {...labelProps}
                      StepIconComponent={QontoStepIcon}
                      style={{ fontSize: "16px" }}
                    >
                      <Typography variant="h6">{label}</Typography>
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    Todas as etapas foram concluidas
                  </Typography>
                  <Button onClick={handleReset} className={classes.button}>
                    Fechar
                  </Button>
                </div>
              ) : (
                <div>
                  <div className={classes.instructions}>
                    {getStepContent(activeStep)}
                  </div>
                  <div style={{ marginLeft: "15px" }}>
                    <Button
                      variant="contained"
                      style={{ color: "rgb(2,99,44)" }}
                      onClick={() =>
                        activeStep === steps.length - 1
                          ? hideModal()
                          : handleNext()
                      }
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finaliza" : "Proximo"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  redux: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...PrefeituraCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Create);
