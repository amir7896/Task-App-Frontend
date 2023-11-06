import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import dynamicStyle from "./styles";

const NavBar = () => {
  const classes = dynamicStyle();

  return (
    <AppBar>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textTransform: "uppercase" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Task App
          </Link>
        </Typography>

        <Link className={classes.links}>
          <Button variant="contained">Toggle Mode</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
