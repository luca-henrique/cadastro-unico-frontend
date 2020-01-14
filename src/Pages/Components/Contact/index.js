import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import AuthActions from "../../../store/ducks/auth";
import { Creators as ContactCreators } from "../../../store/ducks/contact";

import { TextField, Grid, Typography } from "@material-ui/core/";

function Components(props) {
  const [contact, setContact] = useState("");

  function onUpdate() {
    const { changeContact } = props;
    var contato = {
      telefone: contact
    };
    changeContact(contato);
    console.log(props);
  }

  return (
    <>
      <form onBlur={onUpdate}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={{ marginTop: "15px" }}
        >
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="button">Telefone(cel)</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                onChange={e => setContact(e.target.value)}
                value={contact}
              />
            </div>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ContactCreators, ...AuthActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Components);
