import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators as LogCreators } from "../../../../../store/ducks/log";

import MaterialTable, { MTableToolbar } from "material-table";

export default function Pasta() {
  return (
    <>
      <MaterialTable
        style={{ height: "700px", boxShadow: "none", color: "rgb(2,99,44)" }}
        title="Log"
        columns={[
          {
            title: "Url",
            field: "url"
          },
          {
            title: "Method",
            field: "url"
          },
          {
            title: "Usuario",
            field: "url"
          },

          {
            title: "Data da modificação",
            field: "url"
          },
          {
            title: "Horario da modificação",
            field: "url"
          }
        ]}
      />
    </>
  );
}
