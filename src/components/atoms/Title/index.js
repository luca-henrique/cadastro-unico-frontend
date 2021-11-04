import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Title = ({label, variant}) => {
  return (
    <Typography variant={variant} style={{color: 'rgba(2,99,44,0.7)'}}>
      {label}
    </Typography>
  );
};

Title.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
};

export default Title;
