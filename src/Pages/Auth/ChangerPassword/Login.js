import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { TextField, Grid, Typography, Button } from "@material-ui/core/";
import Modal from "./index";

import AuthActions from "../../../store/ducks/auth";
import { Creators as LoginCreators } from "../../../store/ducks/login";

function Components(props) {
  const [email, setEmail] = useState("");

  const { showModalEmail } = props;

  function onUpdate() {
    console.log(props);

    const { changerEmail } = props;

    changerEmail(email);
  }

  return (
    <>
      <form onBlur={onUpdate}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={5} style={{ marginTop: "15px" }}>
            <div>
              <Typography variant="button">Email</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={2} />
          <Grid item xs={12} sm={5} style={{ marginTop: "40px" }}>
            <div style={{ width: "100%" }}>
              <Button
                onClick={showModalEmail}
                variant="contained"
                style={{ color: "rgb(2,99,44)", width: "100%" }}
              >
                Alterar senha
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
      <Modal />
    </>
  );
}

const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AuthActions, ...LoginCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Components);
