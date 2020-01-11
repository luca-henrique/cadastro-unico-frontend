import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AuthActions from "../../../store/ducks/auth";
import { Creators as UserCreators } from "../../../store/ducks/user";
import { ContainerOwner } from "../../Components/index";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Person from "@material-ui/icons/Person";
import Home from "@material-ui/icons/Home";
import Exit from "@material-ui/icons/ExitToApp";

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

function View(props) {
  const { signOut } = props;
  const { showModalNewUser } = props;

  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div
        className={classes.toolbar}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(246,238,89)"
        }}
      >
        <Home
          style={{
            fontSize: 80,
            color: "rgb(2, 99, 44)",
            margin: "10px"
          }}
        />
      </div>

      <List style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <ListItem button style={{ backgroundColor: "rgb(2, 99, 44)" }}>
          <ListItemIcon>
            <Person style={{ fontSize: "35", color: "rgb(246,238,89)" }} />
          </ListItemIcon>
          <ListItemText style={{ color: "rgb(246,238,89)", fontSize: "10px" }}>
            Perfil
          </ListItemText>
        </ListItem>
        <ListItem
          button
          style={{ backgroundColor: "rgb(2, 99, 44)" }}
          onClick={signOut}
        >
          <ListItemIcon>
            <Exit style={{ fontSize: "35", color: "rgb(246,238,89)" }} />
          </ListItemIcon>
          <ListItemText style={{ color: "rgb(246,238,89)", fontSize: "10px" }}>
            Sair
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "rgb(2, 99, 44)" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ color: "rgb(246,238,89)" }}>
            Cadastro único
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla
        </Typography>
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  redux: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AuthActions, ...UserCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);
