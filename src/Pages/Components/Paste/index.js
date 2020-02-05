import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators as PasteCreators } from "../../../store/ducks/paste";
import { Creators as ViewCreators } from "../../../store/ducks/view";
import { Creators as BoxCreators } from "../../../store/ducks/box";

import MaterialTable, { MTableToolbar } from "material-table";

import { ArrowBackIos } from "@material-ui/icons/";

import Create from "./Create";
import Update from "../Box/Paste/Update/";

export default function Pasta() {
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

  const [selectedRow, setSelectedRow] = useState("");

  const dispatch = useDispatch();

  const data = useSelector(state => state.paste.pastes);
  console.log(data);

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
                <ArrowBackIos style={{ fontSize: 30 }} />
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
