import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core/";

import { Colors } from "~/common/colors/";

const ListItemButton = (props) => {
  const { Component, text } = props;

  return (
    <ListItem button>
      <ListItemIcon>
        <Component style={{ color: Colors.primaryGray }} />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography
            type="body2"
            style={{
              color: Colors.primaryBlack,
            }}
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default ListItemButton;
