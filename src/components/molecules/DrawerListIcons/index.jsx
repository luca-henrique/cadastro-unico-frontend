import React from 'react';

import mockMenuLeft from 'src/mock/mockDrawerMenuDashboard';

import List from '@material-ui/core/List';
import DrawerMenuIconItem from '../DrawerMenuIconItem';

const DrawerListIcons = () => {
  return (
    <List>
      {mockMenuLeft.map((item, index) => (
        <DrawerMenuIconItem item={item} />
      ))}
    </List>
  );
};

export default DrawerListIcons;
