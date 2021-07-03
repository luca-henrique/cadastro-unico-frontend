import React, { useEffect } from "react";

import { Modal } from "@material-ui/core/";

import MaterialTable from "material-table";

import { makeStyles } from "@material-ui/core/styles";

import history from "~/routes/history";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      width: "100%",
      height: "100%",
      overflowY: "scroll",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
}));

export default (props) => {
  const classes = useStyles();

  const { districts, loading } = props.redux.district;
  const visible = props.redux.district.visible_district;



  useEffect(() => {
    if (visible) {
    }
  }, [visible]);

  function openTab() {
    history.push("/pdf_districts");
  }

  return (
    <Modal
      open={visible}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "visible",
        overflowY: "scroll",
      }}
    >
      <div className={classes.modal}>
        <MaterialTable
          title="Bairros"
          isLoading={loading}
          columns={[
            {
              title: "Código",
              field: "id",
              headerStyle: {
                color: "rgb(2,90,10)",
              },
            },
            {
              title: "Bairro",
              field: "nome",
              headerStyle: {
                color: "rgb(2,90,10)",
              },
            },
          ]}
          data={districts}
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
              tooltip: "Adicionar",
              isFreeAction: true,
              onClick: (event, rowData) => {
              },
            },
            {
              icon: "printer",
              tooltip: "Gerar PDF",
              isFreeAction: true,
              onClick: (event, rowData) => {
              },
            },
            {
              icon: "close",
              tooltip: "Fechar",
              isFreeAction: true,
              onClick: (event, rowData) => {
              },
            },

            {
              icon: "delete",
              tooltip: "Excluir",
              onClick: (event, rowData) => {
              },
            },
            {
              icon: "edit",
              tooltip: "Editar",
              onClick: (event, rowData) => {
              },
            },
          ]}
          options={{
            headerStyle: {
              color: "rgb(2,90,10)",
            },
            actionsCellStyle: { color: "#848484" },
          }}
        />
      </div>
    </Modal>
  );
}
