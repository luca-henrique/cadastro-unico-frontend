import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as FamilyCreators } from "../../../store/ducks/family";
import { Creators as BoxCreators } from "../../../store/ducks/box";

import { Modal, Backdrop, Fade } from "@material-ui/core/";

import Create from "./Create/";
import Update from "./Update/";

import MaterialTable from "material-table";

function View(props) {
  const [state] = useState({
    columns: [
      {
        title: "Nome",
        field: "nome",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "CPF",
        field: "cpf",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "NIS",
        field: "nis",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },

      {
        title: "Situação",
        field: "situacao",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Tipo",
        field: "tipo",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      }
    ]
  });

  const {
    readFamilyRequest,
    showModalNewFamiliar,
    hideModalFamily,
    deleteFamilyRequest,
    showModalUpdateFamily
  } = props;

  useEffect(() => {
    readFamilyRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        alignItems: "center"
      }}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={typeof visible !== "undefined" ? false : visible}>
        {load(data) === true ? (
          <>
            <MaterialTable
              style={{
                width: "80%",
                height: "auto",
                boxShadow: "none",
                color: "rgb(2,99,44)"
              }}
              title="Grupo Familiar"
              columns={state.columns}
              data={data}
              onRowClick={(evt, selectedRow) => {
                setSelectedRow(selectedRow);
              }}
              options={{
                rowStyle: rowData => ({
                  backgroundColor:
                    selectedRow &&
                    selectedRow.tableData.id === rowData.tableData.id
                      ? "#F3F781"
                      : "#FFF"
                })
              }}
              actions={[
                {
                  icon: "add",
                  tooltip: "Adicionar",
                  isFreeAction: true,
                  onClick: (event, rowData) => {
                    showModalNewFamiliar();
                  }
                },
                {
                  icon: "printer",
                  tooltip: "Gerar PDF",
                  isFreeAction: true,
                  onClick: (event, rowData) => {}
                },
                {
                  icon: "close",
                  tooltip: "Fechar",
                  isFreeAction: true,
                  onClick: (event, rowData) => {
                    hideModalFamily();
                  }
                },

                {
                  icon: "delete",
                  tooltip: "Excluir",
                  onClick: (event, rowData) => {
                    deleteFamilyRequest(rowData.id);
                  }
                },
                {
                  icon: "edit",
                  tooltip: "Editar",
                  onClick: (event, rowData) => {
                    showModalUpdateFamily(rowData);
                  }
                }
              ]}
            />
            <Create />
            <Update />
          </>
        ) : (
          <></>
        )}
      </Fade>
    </Modal>
  );
}

const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...FamilyCreators, ...BoxCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);
