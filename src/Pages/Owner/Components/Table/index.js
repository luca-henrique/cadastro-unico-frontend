import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "@material-ui/core/";

import { Creators as CreatorsBox } from "../../../../store/ducks/box";
import { Creators as CreatorsFamily } from "../../../../store/ducks/family";

import WarningIcon from "@material-ui/icons/Warning";
import MaterialTable from "material-table";

import Create from "../../Box/Create";
import Update from "../../Box/Update";
import Family from "../../Family/index";

export default function Table() {
  const data = useSelector(state => state.box.boxes);

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

  function openTab() {
    window.open("/pdf");
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
            localization={{
              header: {
                actions: "Ações"
              },

              body: {
                emptyDataSourceMessage: "Não existe",
                filterRow: {
                  filterTooltip: "Procurar"
                }
              },
              toolbar: {
                searchTooltip: "Procurar",
                searchPlaceholder: "Procurar"
              }
            }}
            options={{
              headerStyle: {
                color: "rgb(2,90,10)"
              },
              actionsCellStyle: { color: "#848484" },
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
                icon: "printer",
                tooltip: "Gerar PDF",
                isFreeAction: true,
                onClick: (event, rowData) => openTab()
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
                tooltip: "Atualizar informações",
                isFreeAction: true,
                onClick: () => dispatch(CreatorsBox.readBoxesRequest())
              }
            ]}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            columns={[
              {
                title: "Codigo",
                field: "id"
              },

              {
                title: "Caixa",
                field: "numBox"
              },
              {
                title: "Pasta",
                field: "numPaste"
              },
              {
                title: "Codigo domiciliar",
                field: "codHome"
              },
              {
                title: "Data visita",
                type: "date",
                field: "dateInterview"
              },
              {
                title: "Data entrevista",
                type: "date",
                field: "dateVisit"
              },
              {
                title: "Local",
                field: "local",

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
