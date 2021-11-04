import React from 'react';

import {Form} from './style';

import PropTypes from 'prop-types';

const Index = ({
  children,
  onSubmit,
  width,
  height,
  border,
  padding,
  justify,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      width={width}
      height={height}
      border={border}
      padding={padding}
      justify={justify}
    >
      {children}
    </Form>
  );
};

Index.propTypes = {
  children: PropTypes.string,
  onSubmit: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  padding: PropTypes.string,
  justify: PropTypes.string,
};

export default Index;
