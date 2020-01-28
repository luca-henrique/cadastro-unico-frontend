import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Creators as FuncionarioCreators } from "../../../../../store/ducks/funcionario";

import MaterialTable from "material-table";

//import Modal from "./Create/";

export default function Funcionario() {
  const [state, setState] = useState({
    columns: [
      {
        title: "CPF",
        field: "cpf",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Nome",
        field: "nome",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Cargo",
        field: "cargo",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Cidade",
        field: "cidade",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Telefone(fixo)",
        field: "telefone",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "celular",
        field: "celular",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      }
    ],
    data: [
      {
        cpf: "111.111.111-11",
        nome: "Lucas Henrique Paes de Carvalho",
        cargo: "administrador",
        cidade: "São josé do egito",
        telefone: "87 9 98093765",
        celular: "87 9998093765"
      },
      {
        cpf: "111.",
        nome: "Lucas Henrique ",
        cargo: "admin",
        cidade: "São josé",
        telefone: "873765",
        celular: "87093765"
      }
    ]
  });

  const [selectedRow, setSelectedRow] = useState("");

  const data = useSelector(state => state.funcionario.funcionarios);
  const dispatch = useDispatch();

  return (
    <>
      <MaterialTable
        style={{ height: "700px", boxShadow: "none", color: "rgb(2,99,44)" }}
        title="Funcionarios"
        columns={state.columns}
        data={data}
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
                ? "#F4FA58"
                : "#FFF"
          })
        }}
        actions={[
          {
            icon: "add",
            tooltip: "Add User",
            isFreeAction: true,
            onClick: event =>
              dispatch(FuncionarioCreators.showModalNewFuncionario())
          }
        ]}
      />
      {/*<Modal /> */};
    </>
  );
}
