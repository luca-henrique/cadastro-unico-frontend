import React from "react";

import AuthActions from "../../../../store/ducks/auth";
import { useDispatch } from "react-redux";

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core/";

import PowerSettingsNewOutlinedIcon from "@material-ui/icons/PowerSettingsNewOutlined";

const TopBar = () => {
  const dispatch = useDispatch();

  function logout() {
    dispatch(AuthActions.signOut());
  }

  return (
    <AppBar position="fixed" style={{ backgroundColor: "rgb(10,103,30)" }}>
      <Toolbar>
        <Typography
          variant="h5"
          style={{
            color: "rgb(246,238,89)",
            flexGrow: 1,
            alignItems: "flex-start",
            fontSize: "28px",
          }}
        >
          Cadastro único
        </Typography>

        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            style={{ color: "rgb(246,238,89)" }}
            onClick={logout}
          >
            <PowerSettingsNewOutlinedIcon style={{ fontSize: 25 }} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
