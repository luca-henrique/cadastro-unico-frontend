import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as DistrictCreators } from "../../../store/ducks/district";

import { Modal } from "@material-ui/core/";

import Create from "./Create/";
import Update from "./Update/";

import MaterialTable from "material-table";

import { makeStyles } from "@material-ui/core/styles";

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

function View(props) {
  const [selectedRow] = useState("");

  const { districts } = props.redux.district;

  const classes = useStyles();

  const visible = props.redux.district.open;

  const {
    showModalNewDistrict,
    hideModalDistrict,
    deleteDistrictRequest,
    showModalUpdateDistrict,
  } = props;

  function openTab() {
    window.open("/district");
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
                showModalNewDistrict();
              },
            },
            {
              icon: "printer",
              tooltip: "Gerar PDF",
              isFreeAction: true,
              onClick: (event, rowData) => {
                openTab();
              },
            },
            {
              icon: "close",
              tooltip: "Fechar",
              isFreeAction: true,
              onClick: (event, rowData) => {
                hideModalDistrict();
              },
            },

            {
              icon: "delete",
              tooltip: "Excluir",
              onClick: (event, rowData) => {
                deleteDistrictRequest(rowData.id);
              },
            },
            {
              icon: "edit",
              tooltip: "Editar",
              onClick: (event, rowData) => {
                showModalUpdateDistrict(rowData);
              },
            },
          ]}
          options={{
            headerStyle: {
              color: "rgb(2,90,10)",
            },
            actionsCellStyle: { color: "#848484" },
            rowStyle: (rowData) => ({
              backgroundColor:
                selectedRow && selectedRow.tableData.id === rowData.tableData.id
                  ? "#F3F781"
                  : "#FFF",
            }),
          }}
        />
        <Create />
        <Update />
      </div>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  redux: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...DistrictCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);
