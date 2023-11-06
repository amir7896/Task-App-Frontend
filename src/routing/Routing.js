import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Grid } from "@mui/material";

import { TaskList } from "../views";
import { DarkModeToggle } from "../views";
import { useAppState } from "../hooks/StateContext";

const Routing = () => {
  const { isDarkTheme, light, dark } = useAppState();

  return (
    <>
      <ThemeProvider
        theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
      >
        <CssBaseline />
        <Router>
          <DarkModeToggle />
          <Grid sx={{ padding: 1 }}>
            <Routes>
              <Route path="/" element={<TaskList />} />
            </Routes>
          </Grid>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default Routing;
