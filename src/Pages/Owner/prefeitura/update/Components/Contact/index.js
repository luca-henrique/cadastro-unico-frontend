import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Creators as ContactCreators } from "../../../../../../store/ducks/contact_prefecture";

import { Grid, Typography } from "@material-ui/core/";

import TextField from "../../../../../Components/TextField/index";
import { toastr } from "react-redux-toastr";

export default function Components() {
  const contact = useSelector((state) => state.prefectureContact.contact);

  const dispatch = useDispatch();

  const [number, setNumber] = useState(contact.numero);
  const [email, setEmail] = useState(contact.email);

  useEffect(() => {
    setNumber(contact.numero);
    setEmail(contact.email);
  }, [contact.email, contact.numero]);

  function onUpdate(e) {
    e.preventDefault();
    try {
      var cont = {
        prefecture_id: 1,
        numero: number,
        email: email,
      };

      checkAttributesObj(cont);

      dispatch(ContactCreators.updatePrefectureContactRequest(cont));
    } catch (err) {
      toastr.error("Verifique o seu numero");
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
      <form onBlur={(e) => onUpdate(e)}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={{ marginTop: "10px" }}
        >
          <Grid item xs={12} sm={5}>
            <div>
              <Typography variant="button" style={{ color: "#BDBDBD" }}>
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
              <Typography variant="button" style={{ color: "#BDBDBD" }}>
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
