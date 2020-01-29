import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Creators as FuncionarioCreators } from "../../../../../store/ducks/funcionario";

import MaterialTable from "material-table";

import Modal from "./Create/";

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
        title: "Email",
        field: "email",
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
        title: "celular",
        field: "celular",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      }
    ]
  });

  const [selectedRow, setSelectedRow] = useState("");

  const data = useSelector(state => state.funcionario.funcionarios);

  const dispatch = useDispatch();

  console.log(data);

  console.log(selectedRow);

  return (
    <>
      <MaterialTable
        style={{ height: "700px", boxShadow: "none", color: "rgb(2,99,44)" }}
        title="Funcionarios"
        columns={[
          { title: "CPF", field: "profile.cpf" },
          { title: "Nome", field: "profile.nome" },
          { title: "Email", field: "email" },
          { title: "Cargo", field: "profile.cargo" },
          { title: "Contato", field: "contact.numero" }
        ]}
        data={data}
        editable={{
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                dispatch(FuncionarioCreators.deleteFuncionarioSuccess(oldData));
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
      <Modal />
    </>
  );
}
