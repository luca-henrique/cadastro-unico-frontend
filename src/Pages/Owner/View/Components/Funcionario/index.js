import React, { useState, useEffect, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Creators as FuncionarioCreators } from "../../../../../store/ducks/funcionario";

import MaterialTable from "material-table";

import Modal from "./Create/";

import PropTypes from "prop-types";

export default function Funcionario() {
  const [selectedRow, setSelectedRow] = useState("");

  const data = useSelector(state => state.funcionario.funcionarios);

  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const update = useCallback(() =>
    dispatch(FuncionarioCreators.loadFuncionarioRequest())
  );

  useEffect(() => {
    update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function removeFun(data) {
    await dispatch(FuncionarioCreators.deleteFuncionarioSuccess(data));
    await update();
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
                  dispatch(FuncionarioCreators.showModalNewFuncionario());
                  update();
                }
              },
              {
                icon: "delete",
                tooltip: "Deletar funcionario",
                onClick: (event, rowData) => {
                  removeFun(rowData);
                  update();
                }
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
