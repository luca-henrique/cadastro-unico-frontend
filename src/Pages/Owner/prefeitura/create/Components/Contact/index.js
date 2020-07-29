import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as ContactCreators } from "../../../../../../store/ducks/contact_prefecture";

import { Grid, Typography } from "@material-ui/core/";

import TextField from "../../../../../Components/TextField/index";
import { toastr } from "react-redux-toastr";

function Contact(props) {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const { createPrefectureContactRequest } = props;

  function onUpdate(e) {
    e.preventDefault();
    try {
      var cont = {
        prefecture_id: 1,
        numero: number,
        email: email,
      };

      checkAttributesObj(cont);

      createPrefectureContactRequest(cont);
    } catch (err) {
      toastr.error("Verifique o numero ou e-mail");
    }
  }

  function checkAttributesObj(obj) {
    // eslint-disable-next-line no-unused-vars
    for (var [key, value] of Object.entries(obj)) {
      if (typeof value === "undefined" || value === null || value === "") {
        throw new UserException("Null");
      }
    }
  }

  function UserException(message) {
    this.message = message;
    this.name = "UserException";
  }

  function validatePhone(phone) {
    var formatted = phone.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    return formatted;
  }

  return (
    <>
      <form onBlur={onUpdate}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={{ padding: "20px" }}
        >
          <Grid item xs={12} sm={5}>
            <div>
              <Typography
                variant="subtitle2"
                style={{ color: "rgba(0, 0, 0, 0.54)" }}
              >
                Telefone(Fixo/Celular)
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setNumber(validatePhone(e.target.value))}
                value={number}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={2} />

          <Grid item xs={12} sm={5}>
            <div>
              <Typography
                variant="subtitle2"
                style={{ color: "rgba(0, 0, 0, 0.54)" }}
              >
                E-mail
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                type="email"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

const mapStateToProps = (state) => ({
  redux: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...ContactCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
