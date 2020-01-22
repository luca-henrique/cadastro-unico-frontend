import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Grid, Typography, Button } from "@material-ui/core/";
import Modal from "./index";
import TextField from "../../Components/TextField/";

import AuthActions from "../../../store/ducks/auth";

import { Creators as UserCreators } from "../../../store/ducks/user";

function Components(props) {
  const user = JSON.parse(props.redux.user.user);

  console.log(user);
  console.log(props);

  const [email, setEmail] = useState(user.email);

  const { showModalEmail } = props;

  function onUpdate() {
    const { updateUserRequest } = props;
    const updateUser = {
      id: user.id,
      email
    };
    updateUserRequest(updateUser);
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

TextField.defaultProps = {
  value: ""
};

const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AuthActions, ...UserCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Components);
