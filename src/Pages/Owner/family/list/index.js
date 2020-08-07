import React, { useEffect } from "react";

import { Creators as FamilyCreators } from "~/store/ducks/family";
import { Creators as GenereteCreators } from "~/store/ducks/generete";

import { Modal } from "@material-ui/core/";

import { useSelector, useDispatch } from "react-redux";

import MaterialTable from "material-table";

import history from "~/Routes/history";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      width: "100% ",
      height: "100%",
      overflowY: "scroll",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
  },
}));

const View = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const visible = useSelector((state) => state.family.show_family.visible);
  const id = useSelector((state) => state.family.show_family.id);

  const data = useSelector((state) => state.family.group_familiar) || [];

  const loading = useSelector((state) => state.family.loading);

  useEffect(() => {
    if (visible) {
      dispatch(FamilyCreators.readGroupFamiliarRequest(id));
    }
  }, [dispatch, visible, id]);

  function goTo() {
    dispatch(FamilyCreators.hideModalFamily());
    dispatch(GenereteCreators.generateFamiliesBoxRequest(id));
    history.push("/box_with_familiar");
  }

  return (
    <Modal
      open={visible}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "visible",
        overflowY: "scroll",
      }}
    >
      <div className={classes.modal}>
        <MaterialTable
          title="Grupo Familiar"
          data={data}
          isLoading={loading}
          columns={[
            {
              title: "Nome",
              field: "nome",
            },
            {
              title: "CPF",
              field: "cpf",
            },
            {
              title: "NIS",
              field: "nis",
            },

            {
              title: "Situação",
              field: "situacao",
            },
            {
              title: "Tipo",
              field: "tipo",
            },
          ]}
          options={{
            headerStyle: {
              color: "rgb(2,90,10)",
            },
            actionsCellStyle: { color: "#848484" },
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
          actions={[
            {
              icon: "add",
              tooltip: "Adicionar",
              isFreeAction: true,
              onClick: (event, rowData) => {
                dispatch(FamilyCreators.showModalNewFamiliar());
              },
            },

            {
              icon: "printer",
              tooltip: "Gerar PDF",
              isFreeAction: true,
              onClick: (event, rowData) => goTo(),
            },

            {
              icon: "close",
              tooltip: "Fechar",
              isFreeAction: true,
              onClick: (event, rowData) => {
                dispatch(FamilyCreators.hideModalFamily());
              },
            },

            {
              icon: "delete",
              tooltip: "Excluir",
              onClick: (event, rowData) => {
                dispatch(FamilyCreators.deleteFamilyRequest(rowData));
              },
            },
            {
              icon: "edit",
              tooltip: "Editar",
              onClick: (event, rowData) => {
                dispatch(FamilyCreators.showModalUpdateFamily(rowData));
              },
            },
          ]}
        />
      </div>
    </Modal>
  );
};

export default View;