import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { TextField, Grid, Typography } from "@material-ui/core/";

const Create = () => {
  return (
    <>
      <form style={{ marginTop: "15px" }}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12}>
            <div>
              <Typography variant="button">Email</Typography>
              <TextField variant="outlined" size="small" fullWidth />
            </div>
          </Grid>
          <Grid item xs={12} sm={5} style={{ marginTop: "15px" }}>
            <div>
              <Typography variant="button">Senha</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                type="password"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={2} />
          <Grid item xs={12} sm={5} style={{ marginTop: "15px" }}>
            <div>
              <Typography variant="button">Repita a senha</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                type="password"
              />
            </div>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Create);
