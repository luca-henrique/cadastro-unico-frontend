import React, { useEffect } from "react";

import { CssBaseline, makeStyles } from "@material-ui/core/";
import { Container, Button } from "react-floating-action-button";

import { Creators as FuncionarioCreators } from "../../store/ducks/funcionario";
import { Creators as LogCreators } from "../../store/ducks/log";
import { Creators as PrefeituraCreators } from "../../store/ducks/prefecture";
import { Creators as DistrictsCreators } from "../../store/ducks/district";
import { Creators as GeneratortsCreators } from "../../store/ducks/generator";

import { Creators as PrefeituraAddrressCreators } from "../../store/ducks/address_prefecture";
import { Creators as PrefeituraContactCreators } from "../../store/ducks/contact_prefecture";

import { Creators as UserCreators } from "../../store/ducks/user";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Main from "./Components/Table/";
import TopBar from "./Components/TopBar/";

import ChangerPasswordModal from "../Auth/ChangerPassword/index";

import {
  Add,
  Person,
  HomeWorkOutlined,
  Description,
  EditLocation,
  PictureAsPdf,
  LockOutlined,
} from "@material-ui/icons/";

import Funcionario from "./Funcionario/";
import CreatePrefecture from "./Prefeitura/Create/";
import UpdatePrefecture from "./Prefeitura/Update/";

import GeneratorPdf from "./PDF/modal";

import Log from "./Log/";

import District from "./District/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",

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
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",

    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(7),
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(20),
      width: "100%",
    },
  },

  center: {
    width: "80%",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
  },
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
    readPrefectureRequest,
    showModalDistrict,
    readDistrictRequest,
    showModalGeneratorPdf,
    showModalChangerPassword,
  } = props;

  const isAdmin = props.redux.user.user.admin;

  useEffect(() => {
    readPrefectureRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />

      <main className={classes.content}>
        <div className={classes.center}>
          <Main />

          <District />
          <Funcionario />
          <CreatePrefecture />
          <UpdatePrefecture />
          <Log />
          <GeneratorPdf />

          <ChangerPasswordModal />

          <Container
            styles={{
              position: "fixed",
              bottom: "2px",
              right: "5px",
            }}
          >
            {isAdmin === true ? (
              <>
                <Button
                  tooltip="Funcionario"
                  styles={{
                    backgroundColor: "rgb(10,103,30)",
                    color: "rgb(246,238,89)",
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
                    color: "rgb(246,238,89)",
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
                  tooltip="Log"
                  styles={{
                    backgroundColor: "rgb(10,103,30)",
                    color: "rgb(246,238,89)",
                  }}
                >
                  <Description
                    onClick={() => {
                      readLogRequest();
                      showModalLog();
                    }}
                  />
                </Button>
              </>
            ) : (
              <></>
            )}

            <Button
              tooltip="Bairro"
              styles={{
                backgroundColor: "rgb(10,103,30)",
                color: "rgb(246,238,89)",
              }}
            >
              <EditLocation
                onClick={() => {
                  showModalDistrict();
                  readDistrictRequest();
                }}
              />
            </Button>

            <Button
              tooltip="PDF"
              styles={{
                backgroundColor: "rgb(10,103,30)",
                color: "rgb(246,238,89)",
              }}
            >
              <PictureAsPdf
                onClick={() => {
                  showModalGeneratorPdf();
                }}
              />
            </Button>

            <Button
              tooltip="Mudar senha"
              styles={{
                backgroundColor: "rgb(10,103,30)",
                color: "rgb(246,238,89)",
              }}
            >
              <LockOutlined
                onClick={() => {
                  showModalChangerPassword();
                }}
              />
            </Button>

            <Button
              tooltip="Menu"
              styles={{
                backgroundColor: "rgb(10,103,30)",
                color: "rgb(246,238,89)",
              }}
            >
              <Add />
            </Button>
          </Container>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  redux: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...FuncionarioCreators,
      ...LogCreators,
      ...PrefeituraCreators,
      ...PrefeituraAddrressCreators,
      ...PrefeituraContactCreators,
      ...DistrictsCreators,
      ...GeneratortsCreators,
      ...UserCreators,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(View);
