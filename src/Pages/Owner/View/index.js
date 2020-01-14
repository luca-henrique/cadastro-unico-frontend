import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import AuthActions from "../../../store/ducks/auth";
import { Creators as UserCreators } from "../../../store/ducks/user";

import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  useTheme
} from "@material-ui/core/";

import { Menu } from "@material-ui/icons/";

import LeftBar from "./Components/LeftBar/index";

import Perfil from "./Components/Perfil/index";
import Prefeitura from "./Components/Prefeitura/index";
import Funcionario from "./Components/Funcionario/index";

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
    padding: theme.spacing(3),
    height: "900px",
    overflowY: "scroll",
    width: "100%"
  }
}));

function View(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { type } = props.redux.show;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const PAGES = {
    default: <h2>Teste</h2>,
    perfil: <Perfil />,
    prefeitura: <Prefeitura />,
    funcionario: <Funcionario />
  };

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
            <Menu />
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
            <LeftBar />
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
            <LeftBar />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {PAGES[type]}
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
