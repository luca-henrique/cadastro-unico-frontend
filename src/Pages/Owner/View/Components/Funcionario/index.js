import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Creators as FuncionarioCreators } from "../../../../../store/ducks/funcionario";

import MaterialTable from "material-table";

import Modal from "./Create/";

import PropTypes from "prop-types";

export default function Funcionario() {
  const [selectedRow, setSelectedRow] = useState("");

  const data = useSelector(state => state.funcionario.funcionarios);

  const dispatch = useDispatch();

  function load(data) {
    if (Array.isArray(data)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      {load(data) === true ? (
        <>
          <MaterialTable
            style={{
              height: "700px",
              boxShadow: "none",
              color: "rgb(2,99,44)"
            }}
            title="Funcionarios"
            columns={[
              {
                title: "CPF",
                field: "profile.cpf",
                headerStyle: {
                  color: "rgb(2,90,10)"
                }
              },
              {
                title: "Nome",
                field: "profile.nome",
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
                field: "profile.cargo",
                headerStyle: {
                  color: "rgb(2,90,10)"
                }
              },
              {
                title: "Contato",
                field: "contact.numero",
                headerStyle: {
                  color: "rgb(2,90,10)"
                }
              }
            ]}
            data={data}
            editable={{
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    dispatch(
                      FuncionarioCreators.deleteFuncionarioSuccess(oldData)
                    );
                  }, 600);
                })
            }}
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
                onClick: event =>
                  dispatch(FuncionarioCreators.showModalNewFuncionario())
              }
            ]}
          />
          <Modal />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

Funcionario.propTypes = {
  data: PropTypes.array
};
