import { Grid, Switch } from "@mui/material";
import React from "react";
import { useAppState } from "../../hooks/StateContext";

const DarkModeToggle = () => {
  const { isDarkTheme, changeTheme } = useAppState();
  return (
    <Grid>
      <Switch checked={isDarkTheme} onChange={changeTheme} />
    </Grid>
  );
};

export default DarkModeToggle;
