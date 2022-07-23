import React from 'react';

import {Link} from 'react-router-dom';

import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core/';

const DrawerMenuIconItem = ({item}) => {
  return (
    <ListItem button key={item.index} component={Link} to={item.to}>
      <ListItemIcon>
        <img src={item.icon} alt='' />
      </ListItemIcon>
      <ListItemText primary={item.name} />
    </ListItem>
  );
};

export default DrawerMenuIconItem;
