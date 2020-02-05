import React, { useState } from "react";

import MaterialTable, { MTableToolbar } from "material-table";

import { ArrowBackIos } from "@material-ui/icons/";

import Create from "./Create";
import Update from "./Update";

import { useSelector, useDispatch } from "react-redux";

import { Creators as ViewCreators } from "../../../../store/ducks/view";
import { Creators as PasteCreators } from "../../../../store/ducks/paste";
import { Creators as BoxCreators } from "../../../../store/ducks/box";

export default function View() {
  const [state, setState] = useState({
    columns: [
      {
        title: "Caixa",
        field: "box_id",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Pasta",
        field: "numberPaste",
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
        title: "Bairro",
        field: "district",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Data da visita",
        field: "dateVisit",
        type: "date",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      },
      {
        title: "Data da entrevista",
        field: "dateInterview",
        type: "date",
        headerStyle: {
          color: "rgb(2,90,10)"
        }
      }
    ]
  });

  const data = useSelector(state => state.box.pastes);

  const [selectedRow, setSelectedRow] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <MaterialTable
        style={{ height: "700px", boxShadow: "none", color: "rgb(2,99,44)" }}
        title="Pastas"
        columns={state.columns}
        data={data}
        editable={{
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                dispatch(PasteCreators.deletePasteRequest(oldData.id));
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
              dispatch(PasteCreators.showModalNewPaste());
            }
          },
          {
            icon: "visibility",
            tooltip: "Mostrar grupo familiar",
            onClick: (event, rowData) => {
              dispatch(ViewCreators.changerView("familyBox"));
              dispatch(BoxCreators.readFamiliesRequest(rowData.id));
            }
          },
          {
            icon: "edit",
            tooltip: "Editar pasta",
            onClick: (event, rowData) => {
              dispatch(PasteCreators.showModalUpdatePaste(rowData));
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
                  onClick={() => dispatch(ViewCreators.changerView("box"))}
                />
              </div>
            </div>
          )
        }}
      />
      <Create />
      <Update />
    </>
  );
}
