import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import TaskApi from "../../services/Apis/Task.Api";
import dynamicStyle from "./styles";
import { useQuery } from "react-query";

const TaskItem = (props) => {
  const { taskID, setTaskID, open, setOpen } = props;
  const classes = dynamicStyle();
  const [taskData, setTaskData] = useState({});

  const handleClose = () => {
    setOpen(false);
    setTaskID(null);
  };

  const { data } = useQuery("GET_TASK", () => TaskApi.getSingleTask(taskID), {
    enabled: !!taskID,
    keepPreviousData: true,
  });

  return (
    <Dialog
      open={open}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "530px",
            borderRadius: "0",
            border: "0",
          },
        },
      }}
    >
      <DialogTitle className={classes.dialogTitle}>
        Task Details
        <IconButton onClick={handleClose}>
          <Close style={{ color: "white" }} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Card
          sx={{
            mt: 2,
            width: "100%",
            boxShadow: "0px 3px 6px #00000029",
          }}
        >
          <CardContent>
            <Typography variant="body1" gutterBottom>
              <b>Title:</b> {data?.title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, mb: 1.5 }}>
              <b>Description:</b> {data?.description}
            </Typography>
            <Typography variant="body1">
              <b> Status:</b> {data?.isComplete ? "Completed" : "Not Completed"}
            </Typography>
            <Divider style={{ color: "#000", margin: 2 }} />
            <Typography variant="body1">
              <b>Created Date: </b>
              {new Date(data?.createdAt).toLocaleDateString("en-US")}
            </Typography>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default TaskItem;
