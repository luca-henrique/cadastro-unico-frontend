import React from 'react';

import styled from 'styled-components';

import {makeStyles} from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MenuIconAppBar from 'src/components/molecules/MenuIconAppBar';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}));

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const StartContainerToolbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ToolbarContentAppBar = ({open, handleDrawerOpen, title}) => {
  const classes = useStyles();
  return (
    <Toolbar>
      <Container>
        <StartContainerToolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            {title}
          </Typography>
        </StartContainerToolbar>
        <MenuIconAppBar />
      </Container>
    </Toolbar>
  );
};

export default ToolbarContentAppBar;
