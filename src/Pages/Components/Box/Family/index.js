import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Creators as FamilyCreators } from "../../../../store/ducks/family";

import MaterialTable from "material-table";

import Create from "./Create/";
import Update from "./Update";

export default function View() {
  const [state, setState] = useState({
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
        title: "Tipo",
        field: "tipo",
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
      }
    ]
  });

  const [selectedRow, setSelectedRow] = useState("");
  const dispatch = useDispatch();

  const data = useSelector(state => state.box.families);
  console.log(data);

  return (
    <>
      <MaterialTable
        style={{ height: "700px", boxShadow: "none", color: "rgb(2,99,44)" }}
        title="Grupo Familiar"
        columns={state.columns}
        data={data}
        editable={{
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                dispatch(FamilyCreators.deleteFamilyRequest(oldData.id));
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
              dispatch(FamilyCreators.showModalNewFamiliar());
            }
          },
          {
            icon: "edit",
            tooltip: "Editar familiar",
            onClick: (event, rowData) => {
              dispatch(FamilyCreators.showModalUpdateFamily(rowData));
            }
          }
        ]}
      />
      <Create />
      <Update />
    </>
  );
}
