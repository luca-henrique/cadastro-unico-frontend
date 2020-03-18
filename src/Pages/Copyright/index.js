import React from "react";
import { Typography, Link } from "@material-ui/core/";

/**
 * Footer com link para site principal para empresa
 */

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://ctmconsultoria.com/index.html">
      CTM consultoria
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

export default Copyright;
