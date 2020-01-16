import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// import { Container } from './styles';

import MaterialTable, { MTableToolbar } from "material-table";

import { ArrowBackIos } from "@material-ui/icons/";

import Modal from "./Create/";

import { Creators as UserCreators } from "../../../../../store/ducks/user";
import { Creators as PasteCreators } from "../../../../../store/ducks/pasta";

const Pasta = props => {
  const [state, setState] = useState({
    columns: [
      {
        title: "Caixa",
        field: "id_caixa",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Pasta",
        field: "id_pasta",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Codigo domiciliar",
        field: "cod_domiciliar",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Bairro",
        field: "bairro",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Data da visita",
        field: "dt_visita",
        type: "date",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Data da entrevista",
        field: "dt_entrevista",
        type: "date",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      }
    ],
    data: [
      {
        id_caixa: 1,
        id_pasta: 1,
        cod_domiciliar: "161.947.937.17",
        bairro: "Boa vista",
        dt_visita: "16.01.2020",
        dt_entrevista: "25.01.2020"
      }
    ]
  });

  const [selectedRow, setSelectedRow] = useState("");

  const { show, showModalNewPaste } = props;

  return (
    <>
      <MaterialTable
        style={{ height: "700px", boxShadow: "none", color: "rgb(2,99,44)" }}
        title="Pastas"
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
            tooltip: "Adicionar nova pasta",
            isFreeAction: true,
            onClick: event => {
              showModalNewPaste();
            }
          },
          {
            icon: "visibility",
            tooltip: "Mostrar grupo familiar",
            onClick: (event, rowData) => {
              show("familiar");
            }
          }
        ]}
        components={{
          Toolbar: props => (
            <div>
              <MTableToolbar {...props} />
              <div
                style={{
                  marginLeft: "25px",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                <ArrowBackIos
                  style={{ fontSize: 30 }}
                  onClick={() => show("caixa")}
                />
              </div>
            </div>
          )
        }}
      />
      <Modal />
    </>
  );
};

const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserCreators, ...PasteCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pasta);
