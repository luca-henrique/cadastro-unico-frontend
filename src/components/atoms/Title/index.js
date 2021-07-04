import React from "react";
import Typography from "@material-ui/core/Typography";

export default ({ label, variant }) => {
  return (
    <Typography variant={variant} style={{ color: "rgba(2,99,44,0.7)" }}>
      {label}
    </Typography>
  );
};
