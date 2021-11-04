import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const StyledButton = withStyles(() => ({
  root: {
    height: '45px',
    fontSize: '0.99rem',
    width: '100%',
    color: 'white',
    textTransform: 'capitalize',
    backgroundColor: 'rgba(2,99,44,0.7)',
    '&:hover': {
      backgroundColor: 'rgba(2,99,44,0.8)',
    },
  },
}))(Button);

const CustomizedButtons = ({label, onClick, type, variant}, props) => {
  return (
    <StyledButton
      variant={variant}
      fullWidth
      type={type}
      onClick={onClick}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

CustomizedButtons.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomizedButtons;
