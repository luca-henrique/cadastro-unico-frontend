import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "react-floating-action-button";

import { useSelector, useDispatch } from "react-redux";

import { Creators as CreatorsUser } from "~/store/ducks/user";

import {
  Add,
  Person,
  HomeWorkOutlined,
  Description,
  EditLocation,
  PictureAsPdf,
  LockOutlined,
  GroupAdd,
} from "@material-ui/icons/";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(10,103,30) !important",
    color: "rgb(246,238,89) !important",
  },
});

const Index = () => {
  const role = useSelector((state) => state.user.user_joined.role);

  const style = useStyles();

  const dispatch = useDispatch();

  return (
    <Container
      styles={{
        position: "fixed",
        bottom: "2px",
        right: "5px",
      }}
    >
      <Button tooltip="Minhas informações" className={style.root}>
        <Person onClick={() => {}} />
      </Button>
      {role === true ? (
        <>
          <Button tooltip="Funcionarios" className={style.root}>
            <GroupAdd
              onClick={() => {
                dispatch(CreatorsUser.showUserView());
              }}
            />
          </Button>
          <Button tooltip="Prefeitura" className={style.root}>
            <HomeWorkOutlined
              style={{ color: "rgb(246,238,89)" }}
              onClick={() => {}}
            />
          </Button>

          <Button tooltip="Log" className={style.root}>
            <Description onClick={() => {}} />
          </Button>
        </>
      ) : (
        <></>
      )}

      <Button tooltip="Bairro" className={style.root}>
        <EditLocation onClick={() => {}} />
      </Button>

      <Button tooltip="PDF" className={style.root}>
        <PictureAsPdf onClick={() => {}} />
      </Button>

      <Button tooltip="Mudar senha" className={style.root}>
        <LockOutlined onClick={() => {}} />
      </Button>

      <Button tooltip="Menu" className={style.root}>
        <Add />
      </Button>
    </Container>
  );
};

export default Index;
