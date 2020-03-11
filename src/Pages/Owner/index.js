import React, { useEffect } from "react";

import { CssBaseline, makeStyles } from "@material-ui/core/";
import { Container, Button } from "react-floating-action-button";

import { Creators as FuncionarioCreators } from "../../store/ducks/funcionario";
import { Creators as LogCreators } from "../../store/ducks/log";
import { Creators as PrefeituraCreators } from "../../store/ducks/prefecture";

import { Creators as PrefeituraAddrressCreators } from "../../store/ducks/address_prefecture";
import { Creators as PrefeituraContactCreators } from "../../store/ducks/contact_prefecture";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Main from "./Components/Table/";
import TopBar from "./Components/TopBar/";

import {
  Add,
  Person,
  HomeWorkOutlined,
  Description
} from "@material-ui/icons/";

import Funcionario from "./Funcionario/";
import CreatePrefecture from "./Prefeitura/Create/";
import UpdatePrefecture from "./Prefeitura/Update/";

import Log from "./Log/";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      overflowX: "visible",
      overflowY: "scroll"
    },
    [theme.breakpoints.up("md")]: {
      width: "100%"
    }
  },
  content: {
    paddingTop: theme.spacing(20),
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F2F2F2"
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute !important"
    },
    [theme.breakpoints.up("md")]: {
      position: "fixed"
    }
  }
}));

function View(props) {
  const classes = useStyles();

  const {
    showModalFuncionario,
    loadFuncionarioRequest,
    showModalLog,
    readLogRequest,
    showModalUpdatePrefecture,
    readAddressPrefectureRequest,
    readPrefectureContactRequest,
    readPrefectureRequest
  } = props;

  useEffect(() => {
    readPrefectureRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <Container
        className={classes.button}
        styles={{
          position: "fixed",
          bottom: "2px",
          right: "5px"
        }}
      >
        <Button
          href="#"
          tooltip="Funcionario"
          styles={{
            backgroundColor: "rgb(10,103,30)",
            color: "rgb(246,238,89)"
          }}
        >
          <Person
            onClick={() => {
              showModalFuncionario();
              loadFuncionarioRequest();
            }}
          />
        </Button>
        <Button
          tooltip="Prefeitura"
          styles={{
            backgroundColor: "rgb(10,103,30)",
            color: "rgb(246,238,89)"
          }}
        >
          <HomeWorkOutlined
            style={{ color: "rgb(246,238,89)" }}
            onClick={() => {
              showModalUpdatePrefecture();
              readAddressPrefectureRequest();
              readPrefectureContactRequest();
            }}
          />
        </Button>

        <Button
          href="#"
          tooltip="Log"
          styles={{
            backgroundColor: "rgb(10,103,30)",
            color: "rgb(246,238,89)"
          }}
        >
          <Description
            onClick={() => {
              readLogRequest();
              showModalLog();
            }}
          />
        </Button>

        <Button
          tooltip="Menu"
          styles={{
            backgroundColor: "rgb(10,103,30)",
            color: "rgb(246,238,89)"
          }}
        >
          <Add />
        </Button>
      </Container>

      <main className={classes.content}>
        <div style={{ width: "80%" }}>
          <Main />
          <Funcionario />
          <CreatePrefecture />
          <UpdatePrefecture />
          <Log />
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...FuncionarioCreators,
      ...LogCreators,
      ...PrefeituraCreators,
      ...PrefeituraAddrressCreators,
      ...PrefeituraContactCreators
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(View);
