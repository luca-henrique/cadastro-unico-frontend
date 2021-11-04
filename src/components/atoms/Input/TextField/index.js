import React from 'react';
import propTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'rgba(2,99,44,0.7)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgba(2,99,44,0.7)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(2,99,44,0.7)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(2,99,44,0.7)',
      },
    },
  },
})(TextField);

const ContainerInputGroup = ({
  onChange,
  value,
  label,
  type,
  required,
  placeholder,
}) => {
  return (
    <CssTextField
      id='outlined-full-width'
      label={label}
      placeholder={placeholder}
      fullWidth
      type={type}
      required={required}
      value={value}
      onChange={({target}) => onChange(target.value)}
      InputLabelProps={{
        shrink: true,
      }}
      variant='outlined'
    />
  );
};

ContainerInputGroup.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  required: propTypes.bool,
};

ContainerInputGroup.defaultProps = {
  label: '',
};

export default ContainerInputGroup;
