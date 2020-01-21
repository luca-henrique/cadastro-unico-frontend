import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Grid, Typography, Button } from "@material-ui/core/";
import Modal from "./index";
import TextField from "../../Components/TextField/";

import AuthActions from "../../../store/ducks/auth";
import { Creators as LoginCreators } from "../../../store/ducks/login";

import { Creators as UserCreators } from "../../../store/ducks/user";

function Components(props) {
  const { user } = props.redux.user;
  console.log(user);

  const [email, setEmail] = useState();

  const { showModalEmail } = props;

  function onUpdate() {
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
              <Typography variant="button" style={{ color: "#BDBDBD" }}>
                Email
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                required
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
  bindActionCreators(
    { ...AuthActions, ...LoginCreators, ...UserCreators },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Components);
