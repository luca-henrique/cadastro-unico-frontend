import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Creators as UserCreators } from "../../../../../store/ducks/user";
import AuthActions from "../../../../../store/ducks/auth";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core/";

import {
  Person,
  Home,
  ExitToApp,
  HomeWorkOutlined,
  Group,
  Description,
  Wc,
  AllInbox
} from "@material-ui/icons/";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function LeftBar(props) {
  const { show, signOut } = props;
  const classes = useStyles();

  console.log(props);

  return (
    <div>
      <div
        className={classes.toolbar}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(246,238,89)",
          height: "150px"
        }}
      >
        <Home
          style={{
            fontSize: 80,
            color: "rgba(2,99,44,0.7)",
            margin: "10px"
          }}
        />
      </div>

      <List style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <ListItem
          button
          style={{ backgroundColor: "rgba(2,99,44,0.7)" }}
          onClick={() => {
            show("perfil");
          }}
        >
          <ListItemIcon>
            <Person style={{ fontSize: "35", color: "rgb(246,238,89)" }} />
          </ListItemIcon>
          <ListItemText style={{ color: "rgb(246,238,89)", fontSize: "10px" }}>
            Perfil
          </ListItemText>
        </ListItem>

        <ListItem
          button
          style={{ backgroundColor: "rgba(2,99,44,0.7)" }}
          onClick={() => {
            show("funcionario");
          }}
        >
          <ListItemIcon>
            <Group style={{ fontSize: "35", color: "rgb(246,238,89)" }} />
          </ListItemIcon>
          <ListItemText style={{ color: "rgb(246,238,89)", fontSize: "10px" }}>
            Funcionario
          </ListItemText>
        </ListItem>

        <ListItem
          button
          style={{ backgroundColor: "rgba(2,99,44,0.7)" }}
          onClick={() => {
            show("caixa");
          }}
        >
          <ListItemIcon>
            <AllInbox style={{ fontSize: "35", color: "rgb(246,238,89)" }} />
          </ListItemIcon>
          <ListItemText style={{ color: "rgb(246,238,89)", fontSize: "10px" }}>
            Caixa
          </ListItemText>
        </ListItem>

        <ListItem
          button
          style={{ backgroundColor: "rgba(2,99,44,0.7)" }}
          onClick={() => {
            show("grupo");
          }}
        >
          <ListItemIcon>
            <Wc style={{ fontSize: "35", color: "rgb(246,238,89)" }} />
          </ListItemIcon>
          <ListItemText style={{ color: "rgb(246,238,89)", fontSize: "10px" }}>
            Grupo Familiar
          </ListItemText>
        </ListItem>
        <ListItem
          button
          style={{ backgroundColor: "rgba(2,99,44,0.7)" }}
          onClick={() => {
            show("prefeitura");
          }}
        >
          <ListItemIcon>
            <HomeWorkOutlined
              style={{ fontSize: "35", color: "rgb(246,238,89)" }}
            />
          </ListItemIcon>
          <ListItemText style={{ color: "rgb(246,238,89)", fontSize: "10px" }}>
            Prefeitura
          </ListItemText>
        </ListItem>
        <ListItem
          button
          style={{ backgroundColor: "rgba(2,99,44,0.7)" }}
          onClick={() => {
            show("gerar");
          }}
        >
          <ListItemIcon>
            <Description style={{ fontSize: "35", color: "rgb(246,238,89)" }} />
          </ListItemIcon>
          <ListItemText style={{ color: "rgb(246,238,89)", fontSize: "10px" }}>
            Log
          </ListItemText>
        </ListItem>

        <ListItem
          button
          style={{ backgroundColor: "rgba(2,99,44,0.7)" }}
          onClick={signOut}
        >
          <ListItemIcon>
            <ExitToApp style={{ fontSize: "35", color: "rgb(246,238,89)" }} />
          </ListItemIcon>
          <ListItemText style={{ color: "rgb(246,238,89)", fontSize: "10px" }}>
            Sair
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
}

const mapStateToProps = state => ({
  redux: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserCreators, ...AuthActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);
