import React from "react";

import { Form } from "./style";

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

export default Index;
