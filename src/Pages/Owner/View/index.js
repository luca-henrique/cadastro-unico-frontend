import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Creators as ViewCreators } from "../../../store/ducks/view";

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

/* Componentes que só o usuario tem */
import Prefeitura from "./Components/Prefeitura/";
import Funcionario from "./Components/Funcionario/";

import Perfil from "../../Components/Perfil/";
import LeftBar from "../../Components/LeftBar/";

import Box from "../../Components/Box";
import PastesBox from "../../Components/Box/Paste/";

import Pasta from "../../Components/Paste/";
import Familiar from "../../Components/Family/";

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
    width: drawerWidth,
    backgroundColor: "#D8D8D8"
  },
  content: {
    padding: theme.spacing(3),
    height: "800px",
    overflowY: "scroll",
    width: "100%"
  }
}));

function View(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { type } = props.redux;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const PAGES = {
    default: <div></div>,
    perfil: <Perfil />,
    prefeitura: <Prefeitura />,
    funcionario: <Funcionario />,

    box: <Box />,
    pastesBox: <PastesBox />,

    pasta: <Pasta />,
    familiar: <Familiar />
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "rgb(10,103,30)" }}
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
          <Typography variant="h5" noWrap style={{ color: "rgb(246,238,89)" }}>
            Cadastro único
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            style={{ backgroundColor: "#D8D8D8" }}
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
            style={{ backgroundColor: "#D8D8D8" }}
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
  redux: state.view
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ViewCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);
