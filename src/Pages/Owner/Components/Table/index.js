/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators as CreatorsBox } from "../../../../store/ducks/box";
import { Creators as CreatorsFamily } from "../../../../store/ducks/family";

import WarningIcon from "@material-ui/icons/Warning";
import MaterialTable from "material-table";

import Create from "../../Box/Create";
import Update from "../../Box/Update";
import Family from "../../Family/index";

import api from "../../../../services/api";

export default function Table() {
  const [selectedRow, setSelectedRow] = useState("");

  const dispatch = useDispatch();

  function remove(id) {
    dispatch(CreatorsBox.deleteBoxRequest(id));
  }

  function openTab() {
    window.open("/pdf");
  }

  return (
    <>
      <MaterialTable
        style={{
          boxShadow: "none"
        }}
        title={null}
        data={query =>
          new Promise((resolve, reject) => {
            var per_page = query.pageSize;
            var page = query.page + 1;
            api
              .post("/search/", { per_page, page })
              .then(response => {
                resolve({
                  data: response.data.data,
                  page: response.data.page - 1,
                  totalCount: parseInt(response.data.total)
                });
              })
              .then(result => {});
          })
        }
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
              selectedRow && selectedRow.tableData.id === rowData.tableData.id
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
            title: "Responsavel",
            field: "nome"
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
                    rowData.local === false
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
  );
}
