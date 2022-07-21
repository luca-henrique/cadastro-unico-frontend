import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';

import {AppBar} from '@material-ui/core';

import ToolbarContentAppBar from 'src/components/organisms/ToolbarContentAppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const AppBarMenu = ({title, open, setOpen}) => {
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <ToolbarContentAppBar
        open={open}
        title={title}
        handleDrawerOpen={handleDrawerOpen}
      />
    </AppBar>
  );
};

export default AppBarMenu;
