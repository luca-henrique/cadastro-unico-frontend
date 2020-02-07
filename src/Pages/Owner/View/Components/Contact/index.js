import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Creators as ContactCreators } from "../../../../../store/ducks/contact";

import { Grid, Typography } from "@material-ui/core/";

import TextField from "../../../../Components/TextField/index";
import { toastr } from "react-redux-toastr";

export default function Components() {
  const contact = useSelector(state => state.contact.contact);
  const exist = useSelector(state => state.contact.exist);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(contact.numero);

  function onUpdate() {
    try {
      var cont = {
        numero: number
      };

      checkAttributesObj(cont);
      if (exist === true) {
        dispatch(ContactCreators.updateContactRequest(cont));
      } else {
        dispatch(ContactCreators.createContactRequest(cont));
      }
    } catch (err) {
      toastr.error("Verifique o seu numero");
    }
  }

  return (
    <>
      <form onBlur={onUpdate}>
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
                Telefone(fixo)
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                onChange={e => setNumber(validatePhone(e.target.value))}
                value={number}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={2} />
        </Grid>
      </form>
    </>
  );
}

function checkAttributesObj(obj) {
  for (var [key, value] of Object.entries(obj)) {
    console.log(key);
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
