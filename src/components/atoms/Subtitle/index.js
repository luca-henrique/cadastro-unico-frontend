import React from 'react';

import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

import {COLORS} from '../../../common/colors';

const useStyles = makeStyles(() => ({
  typography: {
    color: COLORS.primaryGreen,
  },
}));

const Subtitle = ({label, variant}) => {
  const classes = useStyles();

  return (
    <Typography variant={variant} className={classes.typography}>
      {label}
    </Typography>
  );
};

Subtitle.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
};

export default Subtitle;
