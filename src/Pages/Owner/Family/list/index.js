import React, { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as FamilyCreators } from "~/store/ducks/family";

import { Modal } from "@material-ui/core/";

import Create from "../Create";

import Update from "../Update/";

import { useSelector } from "react-redux";

import MaterialTable from "material-table";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      width: "100% ",
      height: "100%",
      overflowY: "scroll",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
  },
}));

function View(props) {
  const {
    showModalNewFamiliar,
    hideModalFamily,
    deleteFamilyRequest,
    showModalUpdateFamily,
    readGroupFamiliarRequest,
  } = props;

  const id = useSelector((state) => state.family.show_family.id);

  useEffect(() => {
    readGroupFamiliarRequest(id);
  }, [id, readGroupFamiliarRequest]);

  function openTab() {
    window.open("/specific");
  }

  const classes = useStyles();

  const data = useSelector((state) => state.family.group_familiar);

  const visible = useSelector((state) => state.family.show_family.visible);

  const loading = useSelector((state) => state.family.loading);

  return (
    <>
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
            title="Grupo Familiar"
            isLoading={loading}
            columns={[
              {
                title: "Nome",
                field: "nome",
              },
              {
                title: "CPF",
                field: "cpf",
              },
              {
                title: "NIS",
                field: "nis",
              },

              {
                title: "Situação",
                field: "situacao",
              },
              {
                title: "Tipo",
                field: "tipo",
              },
            ]}
            data={data}
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
                tooltip: "Adicionar",
                isFreeAction: true,
                onClick: (event, rowData) => {
                  showModalNewFamiliar();
                },
              },

              {
                icon: "printer",
                tooltip: "Gerar PDF",
                isFreeAction: true,
                onClick: (event, rowData) => openTab(),
              },

              {
                icon: "close",
                tooltip: "Fechar",
                isFreeAction: true,
                onClick: (event, rowData) => {
                  hideModalFamily();
                },
              },

              {
                icon: "delete",
                tooltip: "Excluir",
                onClick: (event, rowData) => {
                  deleteFamilyRequest(rowData.id);
                },
              },
              {
                icon: "edit",
                tooltip: "Editar",
                onClick: (event, rowData) => {
                  showModalUpdateFamily(rowData);
                },
              },
            ]}
          />
        </div>
      </Modal>

      <Create />
      <Update />
    </>
  );
}

const mapStateToProps = (state) => ({
  family: state.family,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...FamilyCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);
