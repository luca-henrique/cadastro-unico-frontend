import React from "react";
import { Typography, Link } from "@material-ui/core/";

const Copyright = () => (
  <Typography
    variant="body2"
    color="textSecondary"
    align="center"
    style={{ color: "white" }}
  >
    {"Copyright © "}
    <Link color="inherit" href="https://github.com/luca-henrique">
      Lucas Henrique.
    </Link>
  </Typography>
);

export default Copyright;
