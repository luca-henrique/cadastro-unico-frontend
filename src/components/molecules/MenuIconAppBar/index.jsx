import React from 'react';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

import mockMenuIconAppBar from 'src/mock/mockMenuIconAppBar';

const MenuIconAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAnchor = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openAnchor}
        onClose={handleClose}
      >
        {mockMenuIconAppBar.map((item) => {
          return (
            <MenuItem onClick={() => handleClose(item.action)}>
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default MenuIconAppBar;
