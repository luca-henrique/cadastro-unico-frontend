/* eslint-disable array-callback-return */
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import WarningIcon from "@material-ui/icons/Warning";
import MaterialTable from "material-table";

import "./index.css";

function Table() {
  const dispatch = useDispatch();

  const boxes = useSelector((state) => state.box.boxes);

  const loading = useSelector((state) => state.box.loading);

  useEffect(() => {
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
              console.log('teste')
            },
          },

          {
            icon: "printer",
            tooltip: "Gerar PDF",
            isFreeAction: true,

          },

          {
            icon: "visibility",
            tooltip: "Mostrar Familiares",

          },
          {
            icon: "delete",
            tooltip: "Excluir",

          },
          {
            icon: "edit",
            tooltip: "Editar",

          },
          {
            icon: "refresh",
            tooltip: "Atualizar informações",
            isFreeAction: true,

          },
        ]}

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
