/* eslint-disable array-callback-return */
import React, { useState, memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators as CreatorsBox } from "../../../../store/ducks/box";
import { Creators as CreatorsFamily } from "../../../../store/ducks/family";
import { Creators as CreatorsGenerete } from "../../../../store/ducks/generator";

import WarningIcon from "@material-ui/icons/Warning";
import MaterialTable from "material-table";

import Create from "../create";
import Update from "../update";
import Family from "../../Family/index";

function Table() {
  // eslint-disable-next-line no-unused-vars
  const [selectedRow, setSelectedRow] = useState("");

  const dispatch = useDispatch();

  const data = useSelector((state) => state.box.boxes);

  const loading = useSelector((state) => state.box.loading);

  const updateData = () => dispatch(CreatorsBox.readBoxesRequest());

  useEffect(() => {
    updateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MaterialTable
        style={{
          boxShadow: "none",
        }}
        isLoading={loading}
        title={null}
        data={data}
        onRowClick={(evt, selectedRow) => {
          setSelectedRow(selectedRow);
        }}
        localization={{
          header: {
            actions: "Ações",
          },

          body: {
            emptyDataSourceMessage: "Não existe",
            filterRow: {
              filterTooltip: "Procurar",
            },
          },
          toolbar: {
            searchTooltip: "Procurar",
            searchPlaceholder: "Procurar",
          },
        }}
        options={{
          headerStyle: {
            color: "rgb(2,90,10)",
          },
          actionsCellStyle: { color: "#848484" },
        }}
        actions={[
          {
            icon: "add",
            tooltip: "Adicionar",
            isFreeAction: true,
            onClick: () => {
              dispatch(CreatorsBox.showModalNewBox());
            },
          },

          {
            icon: "visibility",
            tooltip: "Mostrar Familiares",
            onClick: (event, rowData) => {
              dispatch(CreatorsGenerete.generateFamiliesBoxRequest(rowData.id));
              dispatch(CreatorsBox.readFamiliesRequest(rowData.id));
              dispatch(CreatorsFamily.showModalFamily());
            },
          },
          {
            icon: "delete",
            tooltip: "Excluir",
            onClick: (event, rowData) => {
              dispatch(CreatorsBox.deleteBoxRequest(rowData.id));
            },
          },
          {
            icon: "edit",
            tooltip: "Editar",
            onClick: (event, rowData) => {
              console.log(rowData);
              dispatch(CreatorsBox.showModalUpdateBox(rowData));
            },
          },
          {
            icon: "refresh",
            tooltip: "Atualizar informações",
            isFreeAction: true,
            onClick: () => updateData(),
          },
        ]}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        columns={[
          {
            title: "Codigo",
            field: "id",
          },

          {
            title: "Caixa",
            field: "num_box",
          },
          {
            title: "Pasta",
            field: "num_paste",
          },
          {
            title: "Codigo domiciliar",
            field: "cod_home",
          },

          {
            title: "CPF",
            field: "cpf",
          },

          {
            title: "Responsavel",
            field: "nome",
          },

          {
            title: "Data visita",
            type: "date",
            field: "date_visit",
          },
          {
            title: "Data entrevista",
            type: "date",
            field: "date_interview",
          },
          {
            title: "Local",
            field: "local",
            render: (rowData) => (
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
          },
        ]}
      />

      <Create />

      <Update />

      <Family />
    </>
  );
}

export default memo(Table);
