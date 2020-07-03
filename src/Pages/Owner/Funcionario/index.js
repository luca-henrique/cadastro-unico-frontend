import React, { useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as FuncionarioCreators } from "../../../store/ducks/funcionario";
import { Creators as UserCreators } from "../../../store/ducks/user";

import MaterialTable from "material-table";
import { Modal, Backdrop } from "@material-ui/core/";

import { Lock, LockOpenOutlined } from "@material-ui/icons/";

import Create from "./Create/";

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
      width: "45%",
    },
  },
}));

function View(props) {
  const [selectedRow, setSelectedRow] = useState("");

  const { showModalNewFuncionario } = props;

  const { open } = props.redux.funcionario;

  const data = props.redux.funcionario.funcionarios;

  function hide() {
    const { hideModalFuncionario } = props;
    hideModalFuncionario();
  }

  const classes = useStyles();

  function load(data) {
    if (Array.isArray(data)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <Modal
        open={open}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {load(data) === true ? (
          <div className={classes.modal}>
            <MaterialTable
              data={data}
              title="Funcionarios"
              columns={[
                {
                  title: "Nome",
                  field: "nome",
                  headerStyle: {
                    color: "rgb(2,90,10)",
                  },
                },
                {
                  title: "E-mail",
                  field: "email",
                  headerStyle: {
                    color: "rgb(2,90,10)",
                  },
                },

                {
                  title: "Privilegio",
                  field: "admin",
                  headerStyle: {
                    color: "rgb(2,90,10)",
                  },
                  render: (rowData) => (
                    <>
                      {rowData.admin === true ? <LockOpenOutlined /> : <Lock />}
                    </>
                  ),
                  lookup: { true: "Está", false: "Não está" },
                },
              ]}
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
                      ? "#F4FA58"
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
                  tooltip: "Add User",
                  isFreeAction: true,
                  onClick: (event) => {
                    showModalNewFuncionario();
                  },
                },
                {
                  icon: "close",
                  tooltip: "Fechar",
                  isFreeAction: true,
                  onClick: (event, rowData) => {
                    hide();
                  },
                },

                {
                  icon: "delete",
                  tooltip: "Deletar funcionario",
                  onClick: (event, rowData) => {
                    const { deleteFuncionarioSuccess } = props;
                    deleteFuncionarioSuccess(rowData);
                  },
                },
              ]}
            />
            <Create />
          </div>
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({
  redux: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...FuncionarioCreators, ...UserCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);
