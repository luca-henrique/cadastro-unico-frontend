import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as LogCreators } from "../../../store/ducks/log";

import MaterialTable from "material-table";
import { Modal, Backdrop } from "@material-ui/core/";

function View(props) {
  const data = props.redux.log.log;
  const { open } = props.redux.log;

  const { hideModalLog } = props;

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
      <Modal
        open={open}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        {load(data) === true ? (
          <>
            <MaterialTable
              style={{
                height: "auto",
                boxShadow: "none",
                color: "rgb(2,99,44)"
              }}
              actions={[
                {
                  icon: "close",
                  tooltip: "Fechar",
                  isFreeAction: true,
                  onClick: (event, rowData) => {
                    hideModalLog();
                  }
                }
              ]}
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
      </Modal>
    </>
  );
}

const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...LogCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);
