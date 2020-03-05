import React from "react";

import { CssBaseline, makeStyles } from "@material-ui/core/";
import { Container, Button, Link } from "react-floating-action-button";

import { Creators as FuncionarioCreators } from "../../store/ducks/funcionario";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Main from "./Components/Table/";
import TopBar from "./Components/TopBar/";

import { Add, Person } from "@material-ui/icons/";

import Funcionario from "./Funcionario/";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100%"
  },
  content: {
    paddingTop: theme.spacing(20),
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F2F2F2"
    //overflowY: "scroll",
  }
}));

function View(props) {
  const classes = useStyles();

  const { showModalFuncionario, loadFuncionarioRequest } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <Container
        styles={{
          position: "absolute",
          bottom: "5px"
        }}
      >
        <Link
          href="#"
          tooltip="Funcionarios"
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
        </Link>
        <Button
          href="#"
          tooltip="Add user link"
          styles={{
            backgroundColor: "rgb(10,103,30)",
            color: "rgb(246,238,89)"
          }}
        />

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
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...FuncionarioCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);
