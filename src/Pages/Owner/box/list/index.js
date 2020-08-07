/* eslint-disable array-callback-return */
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Creators as CreatorsBox } from "~/store/ducks/box";
import { Creators as CreatorsFamily } from "~/store/ducks/family";

import { Creators as CreatorsGeneratePdf } from "~/store/ducks/generete";

import WarningIcon from "@material-ui/icons/Warning";
import MaterialTable from "material-table";

import "./index.css";

function Table() {
  const dispatch = useDispatch();

  const boxes = useSelector((state) => state.box.boxes);

  const loading = useSelector((state) => state.box.loading);

  useEffect(() => {
    dispatch(CreatorsBox.readBoxRequest());
  }, [dispatch]);

  return (
    <>
      <MaterialTable
        style={{
          boxShadow: "none",
        }}
        title={null}
        data={boxes}
        isLoading={loading}
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
            icon: "person",
            tooltip: "Procurar Familiar",
            isFreeAction: true,
            onClick: () => {},
          },

          {
            icon: "printer",
            tooltip: "Gerar PDF",
            isFreeAction: true,
            onClick: () => {
              dispatch(CreatorsGeneratePdf.showModalGenereteBoxPdf());
            },
          },

          {
            icon: "visibility",
            tooltip: "Mostrar Familiares",
            onClick: (event, rowData) => {
              dispatch(CreatorsFamily.showModalFamily(rowData.id));
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
              dispatch(CreatorsBox.showModalUpdateBox(rowData));
            },
          },
          {
            icon: "refresh",
            tooltip: "Atualizar informações",
            isFreeAction: true,
            onClick: () => dispatch(CreatorsBox.readBoxRequest()),
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
            title: "Responsável",
            field: "responsible.nome",
          },

          {
            title: "CPF",
            field: "responsible.cpf",
          },

          { title: "Bairro", field: "district" },

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
              <WarningIcon
                style={
                  rowData.local === false
                    ? { color: "#088A08" }
                    : { color: "#DF0101" }
                }
              />
            ),
          },
        ]}
      />
    </>
  );
}

export default memo(Table);
