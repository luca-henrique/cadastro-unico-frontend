import React, { useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as FuncionarioCreators } from "../../../store/ducks/funcionario";

import MaterialTable from "material-table";
import { Modal, Backdrop } from "@material-ui/core/";

import { Lock, LockOpenOutlined } from "@material-ui/icons/";

import Create from "./Create/";

function View(props) {
  const [selectedRow, setSelectedRow] = useState("");

  const { loadFuncionarioRequest, showModalNewFuncionario } = props;

  const { open } = props.redux.funcionario;

  const data = props.redux.funcionario.funcionarios;

  function hide() {
    const { hideModalFuncionario } = props;
    hideModalFuncionario();
  }

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
          alignItems: "center"
        }}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        {load(data) === true ? (
          <>
            <MaterialTable
              data={data}
              style={{
                width: "60%",
                height: "auto",
                boxShadow: "none",
                color: "rgb(2,99,44)",
                padding: "20px"
              }}
              title="Funcionarios"
              columns={[
                {
                  title: "Nome",
                  field: "nome",
                  headerStyle: {
                    color: "rgb(2,90,10)"
                  }
                },
                {
                  title: "E-mail",
                  field: "email",
                  headerStyle: {
                    color: "rgb(2,90,10)"
                  }
                },

                {
                  title: "Privilegio",
                  field: "admin",
                  headerStyle: {
                    color: "rgb(2,90,10)"
                  },
                  render: rowData => (
                    <>
                      {rowData.admin === true ? <LockOpenOutlined /> : <Lock />}
                    </>
                  ),
                  lookup: { true: "Está", false: "Não está" }
                }
              ]}
              onRowClick={(evt, selectedRow) => {
                setSelectedRow(selectedRow);
              }}
              options={{
                rowStyle: rowData => ({
                  backgroundColor:
                    selectedRow &&
                    selectedRow.tableData.id === rowData.tableData.id
                      ? "#F4FA58"
                      : "#FFF"
                })
              }}
              actions={[
                {
                  icon: "add",
                  tooltip: "Add User",
                  isFreeAction: true,
                  onClick: event => {
                    showModalNewFuncionario();
                  }
                },
                {
                  icon: "close",
                  tooltip: "Fechar",
                  isFreeAction: true,
                  onClick: (event, rowData) => {
                    hide();
                  }
                },
                {
                  icon: "delete",
                  tooltip: "Deletar funcionario",
                  onClick: (event, rowData) => {
                    const { deleteFuncionarioSuccess } = props;
                    deleteFuncionarioSuccess(rowData);
                  }
                }
              ]}
            />
            <Create />
          </>
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
}

const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...FuncionarioCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);
