import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Creators as UserCreators } from "../../../store/ducks/user";
import { Creators as BoxCreators } from "../../../store/ducks/caixa";

import MaterialTable from "material-table";
import Modal from "./Create";

const Caixas = props => {
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
        title: "Quantidade de pastas",
        field: "qtdPastas",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Quantidade maxima de pastas",
        field: "qtdMax",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      }
    ],
    data: [
      {
        id: 1,
        qtdPastas: 30,
        qtdMax: 30
      },
      {
        id: 1,
        qtdPastas: 30,
        qtdMax: 30
      },
      {
        id: 1,
        qtdPastas: 30,
        qtdMax: 30
      }
    ]
  });

  const [selectedRow, setSelectedRow] = useState("");

  const { show, showModalNewBox } = props;

  return (
    <>
      <MaterialTable
        style={{ height: "700px", boxShadow: "none", color: "rgb(2,99,44)" }}
        title="Caixas"
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
              showModalNewBox();
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
  bindActionCreators({ ...UserCreators, ...BoxCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Caixas);
