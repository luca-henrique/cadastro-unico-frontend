import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Creators as UserCreators } from "../../../../../store/ducks/user";
import { Creators as FamiliarCreators } from "../../../../../store/ducks/familiar";

import MaterialTable from "material-table";
import Modal from "./Create/";

const Familiar = props => {
  const [state, setState] = useState({
    columns: [
      {
        title: "id",
        field: "id",
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
        title: "Tipo",
        field: "type",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Situação",
        field: "situation",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      }
    ],
    data: [
      {
        id: 1,
        cpf: "111.111.111-11",
        nis: "11111111111",
        name: "Paes",
        type: "dependente",
        situation: "transferido"
      },
      {
        id: 1,
        cpf: "111.111.111-11",
        nis: "11111111111",
        name: "Paes",
        type: "dependente",
        situation: "transferido"
      }
    ]
  });

  const [selectedRow, setSelectedRow] = useState("");

  const { show, showModalNewFamiliar } = props;

  return (
    <>
      <MaterialTable
        style={{ height: "700px", boxShadow: "none", color: "rgb(2,99,44)" }}
        title="Grupo Familiar"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
        onRowClick={(evt, selectedRow) => {
          setSelectedRow(selectedRow);
        }}
        options={{
          rowStyle: rowData => ({
            backgroundColor:
              selectedRow && selectedRow.tableData.id === rowData.tableData.id
                ? "#F3F781"
                : "#FFF"
          })
        }}
        actions={[
          {
            icon: "add",
            tooltip: "Add User",
            isFreeAction: true,
            onClick: (event, rowData) => {
              showModalNewFamiliar();
            }
          },
          {
            icon: "visibility",
            tooltip: "Mostrar pastas",
            onClick: (event, rowData) => {
              show("pasta");
            }
          }
        ]}
      />
      <Modal />
    </>
  );
};

const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserCreators, ...FamiliarCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Familiar);
