import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  FormHelperText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useQuery } from "react-query";
import TodoApi from "../../services/Apis/Task.Api";
import { validateForm, hasErrors } from "../../utils/validations";

import { useAppState } from "../../hooks/StateContext";

import dynamicStyle from "./styles";
import { toast } from "react-toastify";

const TaskForm = (props) => {
  const { open, setOpen, taskID, setTaskID } = props;
  const { taskForm, setTaskForm, addTask, updateTask, getTaskList } =
    useAppState();
  const classes = dynamicStyle();
  const [validationErrors, setValidationErrors] = useState({
    title: "",
    description: "",
  });

  const handleClose = () => {
    setOpen(false);
    setTaskID(null);
    setTaskForm({
      title: "",
      description: "",
      isComplete: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setTaskForm((prevTaskForm) => ({
      ...prevTaskForm,
      [name]: newValue,
    }));

    setValidationErrors({
      ...validationErrors,
      [name]: "",
    });
  };

  // Get single task ...
  const { data: singleTask } = useQuery(
    ["GET_SINGLE_STORE", taskID],
    () => TodoApi.getSingleTask(taskID),
    {
      enabled: !!taskID,
      keepPreviousData: true,
    }
  );

  // Set form fields if update task ..
  useEffect(() => {
    if (singleTask !== undefined && taskID !== null) {
      setTaskForm({
        title: singleTask.title,
        description: singleTask.description,
        isComplete: singleTask.isComplete,
      });
    }
  }, [singleTask]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(taskForm);

    if (hasErrors(validationErrors)) {
      setValidationErrors(validationErrors);
    } else {
      if (taskID) {
        updateTask(taskID, taskForm)
          .then((res) => {
            if (res.success) {
              toast.success(res.message);
              getTaskList();
              handleClose();
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      } else {
        addTask(taskForm)
          .then((res) => {
            if (res.success) {
              toast.success(res.message);
              getTaskList();
              handleClose();
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    }
  };

  return (
    <Grid>
      <Dialog
        open={open}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "430px",
              borderRadius: "0",
              border: "0",
            },
          },
        }}
      >
        <DialogTitle className={classes.dialogTitle}>
          {taskID ? "Update  Task" : "Create Task"}

          <IconButton onClick={handleClose}>
            <CloseIcon style={{ color: "white" }} />
          </IconButton>
        </DialogTitle>
        <form autoComplete="off" onSubmit={handleFormSubmit}>
          <DialogContent>
            {/* Title Text Field */}
            <Grid>
              <TextField
                name="title"
                label="Title"
                type="text"
                fullWidth
                size="small"
                variant="standard"
                value={taskForm.title}
                onChange={handleChange}
              />
              <FormHelperText error>{validationErrors.title}</FormHelperText>
            </Grid>

            {/* Description Text Field */}
            <Grid sx={{ mt: 1 }}>
              <TextField
                name="description"
                label="Description"
                type="text"
                fullWidth
                size="small"
                variant="standard"
                value={taskForm.description}
                onChange={handleChange}
              />
              <FormHelperText error>
                {validationErrors.description}
              </FormHelperText>
            </Grid>

            {/* is Complete Check Box */}
            <Grid sx={{ mt: 1 }}>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="isComplete"
                        checked={taskForm.isComplete}
                        onChange={handleChange}
                      />
                    }
                    label="isComplete"
                  />
                </FormGroup>
              </FormControl>
            </Grid>

            {/*  */}
            <DialogActions sx={{ mt: 2, mx: -1 }}>
              <Button
                variant="contained"
                color="inherit"
                onClick={handleClose}
                startIcon={<CloseIcon />}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                type="submit"
              >
                Submit
              </Button>
            </DialogActions>
          </DialogContent>
        </form>
      </Dialog>
    </Grid>
  );
};

export default TaskForm;
