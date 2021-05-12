import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "react-floating-action-button";

import { useSelector, useDispatch } from "react-redux";


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
          }}
        />
      </Button>
      <Button tooltip="Mudar senha" className={style.root}>
        <LockOutlined

        />
      </Button>

      {user.role === true ? (
        <>
          <Button tooltip="Usuários" className={style.root}>
            <GroupAdd

            />
          </Button>
          <Button tooltip="Prefeitura" className={style.root}>
            <HomeWorkOutlined
              style={{ color: "rgb(246,238,89)" }}

            />
          </Button>

          <Button tooltip="Log" className={style.root}>
            <Description

            />
          </Button>
        </>
      ) : (
          <></>
        )}

      <Button tooltip="Bairros" className={style.root}>
        <EditLocation

        />
      </Button>

      <Button tooltip="Gerar Relatórios" className={style.root}>
        <PictureAsPdf

        />
      </Button>

      <Button tooltip="Menu" className={style.root}>
        <Add />
      </Button>
    </Container>
  );
};

export default Index;
