import React from "react";

import { useSelector } from "react-redux";

import MaterialTable from "material-table";

export default function Pasta() {
  const data = useSelector(state => state.log.log);

  function changer(array) {
    const log = [];
    for (var i in array) {
      if (i < array.length - 1) {
        var json = JSON.parse(array[i].trim());

        log.push(json);
      }
    }
    return log;
  }

  function load(data) {
    if (Array.isArray(data)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      {load(data) === true ? (
        <>
          <MaterialTable
            style={{
              height: "700px",
              boxShadow: "none",
              color: "rgb(2,99,44)"
            }}
            title="Log"
            data={changer(data)}
            columns={[
              {
                title: "Url",
                field: "url"
              },
              {
                title: "Method",
                field: "method"
              },
              {
                title: "Usuario",
                field: "user_modified.email"
              },

              {
                title: "Data da modificação",
                field: "data_modified"
              },
              {
                title: "Horario da modificação",
                field: "hour_modified"
              }
            ]}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
