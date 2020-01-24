import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Grid, Typography, Button } from "@material-ui/core/";
import Modal from "./index";
import TextField from "../../Components/TextField/index";

import { Creators as UserCreators } from "../../../store/ducks/user";
import { Creators as LoginCreators } from "../../../store/ducks/login";

export default function View() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const openModalEmail = dispatch(LoginCreators.showModalEmail);

  const [email, setEmail] = useState(user.email);

  function onUpdate() {
    const updateUser = {
      id: user.id,
      email
    };
    dispatch(UserCreators.updateUserRequest(updateUser));
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
                type="email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={2} />
          <Grid item xs={12} sm={5} style={{ marginTop: "40px" }}>
            <div style={{ width: "100%" }}>
              <Button
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
/*
const mapStateToProps = state => ({
  redux: state
});
{/*onClick={showModalEmail}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...AuthActions, ...UserCreators, ...LoginCreators },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(View);
*/
