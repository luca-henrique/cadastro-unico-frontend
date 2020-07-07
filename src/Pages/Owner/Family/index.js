import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as FamilyCreators } from "../../../store/ducks/family";
import { Creators as BoxCreators } from "../../../store/ducks/box";

import { Modal } from "@material-ui/core/";

import Create from "./Create/";
import Update from "./Update/";

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
  const [state] = useState({
    columns: [
      {
        title: "Nome",
        field: "nome",
        headerStyle: {
          color: "rgb(2,90,10)",
        },
      },
      {
        title: "CPF",
        field: "cpf",
        headerStyle: {
          color: "rgb(2,90,10)",
        },
      },
      {
        title: "NIS",
        field: "nis",
        headerStyle: {
          color: "rgb(2,90,10)",
        },
      },

      {
        title: "Situação",
        field: "situacao",
        headerStyle: {
          color: "rgb(2,90,10)",
        },
      },
      {
        title: "Tipo",
        field: "tipo",
        headerStyle: {
          color: "rgb(2,90,10)",
        },
      },
    ],
  });

  const {
    readFamiliesRequest,
    showModalNewFamiliar,
    hideModalFamily,
    deleteFamilyRequest,
    showModalUpdateFamily,
    readBoxesRequest,
  } = props;

  const { id } = props.redux.box;

  /*
  useEffect(() => {
    readFamiliesRequest(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);*/

  async function deleteFamiliar(row) {
    await deleteFamilyRequest(row.id);
    await readFamiliesRequest(id);
  }

  function openTab() {
    window.open("/specific");
  }

  const classes = useStyles();

  const [selectedRow, setSelectedRow] = useState("");
  const data = props.redux.box.families;

  const visible = props.redux.family.open;

  function load(data) {
    if (Array.isArray(data)) {
      return true;
    } else {
      return false;
    }
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
      {load(data) === true ? (
        <div className={classes.modal}>
          <MaterialTable
            title="Grupo Familiar"
            columns={state.columns}
            data={data}
            onRowClick={(evt, selectedRow) => {
              setSelectedRow(selectedRow);
            }}
            options={{
              headerStyle: {
                color: "rgb(2,90,10)",
              },
              actionsCellStyle: { color: "#848484" },
              rowStyle: (rowData) => ({
                backgroundColor:
                  selectedRow &&
                  selectedRow.tableData.id === rowData.tableData.id
                    ? "#F3F781"
                    : "#FFF",
              }),
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
                  readBoxesRequest();
                  hideModalFamily();
                },
              },

              {
                icon: "delete",
                tooltip: "Excluir",
                onClick: (event, rowData) => {
                  deleteFamiliar(rowData);
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
          <Create />
          <Update />
        </div>
      ) : (
        <></>
      )}
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  redux: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...FamilyCreators, ...BoxCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);
