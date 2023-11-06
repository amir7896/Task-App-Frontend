import React, { useState } from "react";
import {
  Drawer,
  Button,
  Card,
  CardHeader,
  Grid,
  useMediaQuery,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Chip,
} from "@mui/material";
import { FilterAlt, Close } from "@mui/icons-material";

import { useAppState } from "../../hooks/StateContext";
import { taskStatusValues } from "../../constants/AppConstants";
import dynamicStyle from "./styles";

const TaskFilter = () => {
  const { openDrawer, setOpenDrawer, setTaskStatus, taskStatus } =
    useAppState();
  const classes = dynamicStyle();
  const matches = useMediaQuery("(min-width:450px)");

  const [selectedValue, setSelectedValue] = useState(null);

  const handleOpenFilter = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskStatus(selectedValue);
    setOpenDrawer(false);
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
  };

  const handleClearFilters = (event) => {
    event.preventDefault();
    setTaskStatus(null);
    setSelectedValue(null);
    setOpenDrawer(false);
  };

  const handleDelete = () => {
    setSelectedValue(null);
    setTaskStatus(null);
  };

  return (
    <Grid>
      <Grid sx={{ mt: !matches ? 3 : 0 }}>
        <Grid item>
          {taskStatus !== null && (
            <>
              <Chip
                sx={{ mr: 3 }}
                label={
                  selectedValue !== null && selectedValue === true
                    ? "COMPLETED"
                    : "NOT COMPLETE"
                }
                onClick={handleDelete}
                onDelete={handleDelete}
              />
            </>
          )}
          <Button
            variant="contained"
            startIcon={<FilterAlt />}
            onClick={handleOpenFilter}
          >
            Filter
          </Button>
        </Grid>
      </Grid>
      {/* Filter */}
      <Grid item>
        <Drawer
          classes={{ paper: classes.drawer }}
          anchor="right"
          open={openDrawer}
          onClose={handleDrawerClose}
        >
          <Card>
            <CardHeader
              avatar={
                <Close
                  onClick={handleDrawerClose}
                  style={{ cursor: "pointer" }}
                />
              }
              title="Close"
            />
          </Card>
          <div>
            <Typography className={classes.filterTitle} variant="h6">
              Task Status
            </Typography>
            <Grid className={classes.formGrid}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Complete</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedValue}
                  label="Completed"
                  onChange={handleChange}
                >
                  {taskStatusValues.map((menuItem) => (
                    <MenuItem key={menuItem.value} value={menuItem.value}>
                      {menuItem.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* Form  */}
            <Grid container>
              <Grid
                item
                lg={12}
                xs={12}
                sm={12}
                className={classes.buttonsGrid}
              >
                <Button
                  variant="outlined"
                  onClick={handleClearFilters}
                  className={classes.filterButton}
                >
                  Clear
                </Button>
              </Grid>
              <Grid
                item
                lg={12}
                xs={12}
                sm={12}
                className={classes.buttonsGrid}
              >
                <Button
                  className={classes.filterButton}
                  color="primary"
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Apply Filters
                </Button>
              </Grid>
            </Grid>
          </div>
        </Drawer>
      </Grid>
    </Grid>
  );
};

export default TaskFilter;
