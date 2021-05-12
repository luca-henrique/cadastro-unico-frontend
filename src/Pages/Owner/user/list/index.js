/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, lazy } from "react";



import { useSelector, useDispatch } from "react-redux";

import MaterialTable from "material-table";
import { Modal } from "@material-ui/core/";

import { Lock, LockOpenOutlined } from "@material-ui/icons/";

import { makeStyles } from "@material-ui/core/styles";

import "./index.css";



const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      width: "100%",
      height: "100%",
      overflowY: "scroll",
    },
    [theme.breakpoints.up("md")]: {
      width: "45%",
    },
  },
}));

const View = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const users = useSelector((state) => state.user.users);
  const visible = useSelector((state) => state.user.user_list_view);
  const loading = useSelector((state) => state.user.loading);



  return (
    <>
      <Modal
        open={visible}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={classes.modal}>
          <MaterialTable
            data={users}
            isLoading={loading}
            title="Usuários"
            columns={[
              {
                title: "Nome",
                field: "nome",
              },
              {
                title: "E-mail",
                field: "email",
              },

              {
                title: "Privilegio",
                field: "role",

                render: (rowData) => (
                  <>{rowData.role === true ? <LockOpenOutlined /> : <Lock />}</>
                ),
              },
            ]}
            options={{
              headerStyle: {
                color: "rgb(2,90,10)",
              },
              actionsCellStyle: { color: "#848484" },
            }}
            localization={{
              header: {
                actions: "Ações",
              },

              body: {
                emptyDataSourceMessage: "Não existe",
                filterRow: {
                  filterTooltip: "Procurar",
                },
              },
              toolbar: {
                searchTooltip: "Procurar",
                searchPlaceholder: "Procurar",
              },
            }}
            actions={[
              {
                icon: "add",
                tooltip: "Adicionar usuário",
                isFreeAction: true,

              },

              {
                icon: "close",
                tooltip: "Fechar",
                isFreeAction: true,

              },

              {
                icon: "delete",
                tooltip: "Deletar usuário",

              },

              {
                icon: "edit",
                tooltip: "Editar usuário",

              },
            ]}
          />
        </div>
      </Modal>

    </>
  );
};

export default View;
