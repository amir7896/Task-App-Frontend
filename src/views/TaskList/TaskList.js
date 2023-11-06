import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Delete, Edit, Add, Visibility, FilterAlt } from "@mui/icons-material";
import { toast } from "react-toastify";

import TaskForm from "../TaskForm/TaskForm";
import TaskItem from "../TaskItem/TaskItem";
import TaskFilter from "../TaskFilter/TaskFilter";

import { useAppState } from "../../hooks/StateContext";

const Todos = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [taskID, setTaskID] = useState(null);
  const { getTaskList, tasksList, deleteTask, updateTaskStatus } =
    useAppState();

  // handle check box change ..
  const handleComplete = async (id, value) => {
    updateTaskStatus(id, value).then((res) => {
      if (res.success) {
        toast.success(res.message);
        getTaskList();
      }
    });
  };

  // handle delete task  .
  const handleDeleteTask = async (id) => {
    deleteTask(id)
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
          getTaskList();
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // Hanlde create task  .
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // handle update task
  const handleUpdateTask = (id) => {
    setTaskID(id);
    setOpenDialog(true);
  };

  // Cont handle view task .
  const handleViewTask = (id) => {
    setTaskID(id);
    setOpenView(true);
  };
  return (
    <Grid container>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={handleOpenDialog}
          variant="contained"
          color="primary"
          startIcon={<Add />}
        >
          Create new Task
        </Button>

        {/* Filter Task */}
        <TaskFilter />
      </Grid>
      {/* Todos List */}
      <Grid item md={12} xs={12}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Title</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Description</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Complete</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5">Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasksList &&
              tasksList?.map((todo) => (
                <TableRow key={todo._id}>
                  <TableCell>{todo?.title}</TableCell>
                  <TableCell>{todo?.description}</TableCell>
                  <TableCell>
                    <FormControl>
                      <FormGroup>
                        <FormControlLabel
                          key={todo?.id}
                          control={
                            <Checkbox
                              name="isComplete"
                              checked={todo?.isComplete}
                              onChange={(e) =>
                                handleComplete(todo?._id, e.target.checked)
                              }
                            />
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDeleteTask(todo?._id)}>
                      <Delete color="error" />
                    </IconButton>
                    <IconButton onClick={() => handleUpdateTask(todo?._id)}>
                      <Edit color="primary" />
                    </IconButton>
                    <IconButton onClick={() => handleViewTask(todo?._id)}>
                      <Visibility color="info" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Grid>

      {/* Dialog Form */}
      <TaskForm
        open={openDialog}
        setOpen={setOpenDialog}
        taskID={taskID}
        setTaskID={setTaskID}
      />

      {/* View Task Item */}
      <TaskItem
        taskID={taskID}
        setTaskID={setTaskID}
        open={openView}
        setOpen={setOpenView}
      />
    </Grid>
  );
};

export default Todos;
