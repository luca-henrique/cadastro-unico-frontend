import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "react-floating-action-button";

import { useSelector, useDispatch } from "react-redux";

import { Creators as CreatorsUser } from "~/store/ducks/user";
import { Creators as CreatorsLog } from "~/store/ducks/log";
import { Creators as CreatorsDistrict } from "~/store/ducks/district";
import { Creators as CreatorsPrefecture } from "~/store/ducks/prefecture";
import { Creators as CreatorsGeneretePdf } from "~/store/ducks/generete";

import {
  Person,
  Add,
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
  const user = useSelector((state) => state.user.user_joined);

  const prefecture = useSelector((state) => state.prefecture.prefecture);

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
        <Person
          onClick={() => {
            dispatch(CreatorsUser.showUpdateUser(user));
          }}
        />
      </Button>
      <Button tooltip="Mudar senha" className={style.root}>
        <LockOutlined
          onClick={() => {
            dispatch(CreatorsUser.showChangerPasswordView());
          }}
        />
      </Button>

      {user.role === true ? (
        <>
          <Button tooltip="Usuários" className={style.root}>
            <GroupAdd
              onClick={() => {
                dispatch(CreatorsUser.showUserView());
              }}
            />
          </Button>
          <Button tooltip="Prefeitura" className={style.root}>
            <HomeWorkOutlined
              style={{ color: "rgb(246,238,89)" }}
              onClick={() => {
                dispatch(
                  CreatorsPrefecture.showModalUpdatePrefecture(prefecture)
                );
              }}
            />
          </Button>

          <Button tooltip="Log" className={style.root}>
            <Description
              onClick={() => {
                dispatch(CreatorsLog.showModalLog());
              }}
            />
          </Button>
        </>
      ) : (
        <></>
      )}

      <Button tooltip="Bairros" className={style.root}>
        <EditLocation
          onClick={() => {
            dispatch(CreatorsDistrict.showModalDistrict());
          }}
        />
      </Button>

      <Button tooltip="Gerar Relatórios" className={style.root}>
        <PictureAsPdf
          onClick={() => {
            dispatch(CreatorsGeneretePdf.showModalGeneretePdf());
          }}
        />
      </Button>

      <Button tooltip="Menu" className={style.root}>
        <Add />
      </Button>
    </Container>
  );
};

export default Index;
