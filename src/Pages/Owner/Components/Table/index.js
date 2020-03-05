import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators as CreatorsBox } from "../../../../store/ducks/box";
import { Creators as CreatorsFamily } from "../../../../store/ducks/family";

import WarningIcon from "@material-ui/icons/Warning";
import MaterialTable from "material-table";

import Create from "../../Box/Create";
import Update from "../../Box/Update";

import Family from "../../Family/index";

export default function Table() {
  const data = useSelector(state => state.box.boxes);

  const [ref, setRef] = useState();

  const tableRef = React.createRef();

  const [selectedRow, setSelectedRow] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CreatorsBox.readBoxesRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function load(data) {
    if (Array.isArray(data)) {
      return true;
    } else {
      return false;
    }
  }

  async function remove(id) {
    await dispatch(CreatorsBox.deleteBoxRequest(id));
    await dispatch(CreatorsBox.readBoxesRequest());
  }

  return (
    <>
      {load(data) === true ? (
        <>
          <MaterialTable
            style={{
              boxShadow: "none"
            }}
            tableRef={tableRef}
            title={null}
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
                  dispatch(CreatorsBox.showModalNewBox());
                }
              },
              {
                icon: "visibility",
                tooltip: "Mostrar Familiares",
                onClick: (event, rowData) => {
                  dispatch(CreatorsBox.readFamiliesRequest(rowData.id));
                  dispatch(CreatorsFamily.showModalFamily());
                }
              },
              {
                icon: "delete",
                tooltip: "Excluir",
                onClick: (event, rowData) => {
                  remove(rowData.id);
                }
              },
              {
                icon: "edit",
                tooltip: "Editar",
                onClick: (event, rowData) => {
                  dispatch(CreatorsBox.showModalUpdateBox(rowData));
                }
              },
              {
                icon: "refresh",
                tooltip: "Refresh Data",
                isFreeAction: true,
                onClick: () => dispatch(CreatorsBox.readBoxesRequest())
              }
            ]}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            columns={[
              {
                title: "Codigo",
                field: "id",
                headerStyle: {
                  color: "rgb(2,90,10)"
                }
              },
              {
                title: "Caixa",
                field: "numBox",
                headerStyle: {
                  color: "rgb(2,90,10)"
                }
              },
              {
                title: "Pasta",
                field: "numPaste",
                headerStyle: {
                  color: "rgb(2,90,10)"
                }
              },
              {
                title: "Codigo domiciliar",
                field: "codHome",
                headerStyle: {
                  color: "rgb(2,90,10)"
                }
              },
              {
                title: "Data visita",
                type: "date",
                field: "dateInterview",
                headerStyle: {
                  color: "rgb(2,90,10)"
                }
              },
              {
                title: "Data entrevista",
                type: "date",
                field: "dateVisit",
                headerStyle: {
                  color: "rgb(2,90,10)"
                }
              },
              {
                title: "Local",
                field: "local",
                headerStyle: {
                  color: "rgb(2,90,10)"
                },
                render: rowData => (
                  <>
                    <WarningIcon
                      style={
                        rowData.local === true
                          ? { color: "#088A08" }
                          : { color: "#DF0101" }
                      }
                    />
                  </>
                ),
                lookup: { true: "Está", false: "Não está" }
              }
            ]}
          />

          <Create />

          <Update />

          <Family />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
