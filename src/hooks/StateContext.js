// DarkModeContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

import TodoApi from "../services/Apis/Task.Api";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [tasksList, setTasksList] = useState([]);
  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    isComplete: false,
  });

  const [openDrawer, setOpenDrawer] = useState(false);
  const [taskStatus, setTaskStatus] = useState(null);

  const light = {
    palette: {
      mode: "light",
    },
  };

  const dark = {
    palette: {
      mode: "dark",
    },
  };

  // Change theme ..
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  //   Get tasks ..
  const getTaskList = async () => {
    try {
      const response = await TodoApi.getTasks(taskStatus);
      setTasksList(response);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return error;
    }
  };

  // Use useEffect to run getTaskList whenever taskStatus changes
  useEffect(() => {
    getTaskList();
  }, [taskStatus]);

  //   Add task
  const addTask = async (newTask) => {
    try {
      const response = await TodoApi.createTask(newTask);
      return response;
    } catch (error) {
      console.error("Error creating task:", error);
      return error;
    }
  };

  //   Update task
  const updateTask = async (taskId, updatedTask) => {
    try {
      const response = await TodoApi.updateTask(taskId, updatedTask);
      return response;
    } catch (error) {
      console.error("Error updating task:", error);
      return error;
    }
  };

  //   Update task complete
  const updateTaskStatus = async (id, value) => {
    const response = await TodoApi.updateComplete(id, { isComplete: value });
    return response;
  };

  // Delete task
  const deleteTask = async (taskId) => {
    try {
      const response = await TodoApi.deleteTask(taskId);
      return response;
    } catch (error) {
      console.error("Error deleting task:", error);
      return error;
    }
  };

  return (
    <StateContext.Provider
      value={{
        isDarkTheme,
        light,
        dark,
        changeTheme,
        taskForm,
        setTaskForm,
        getTaskList,
        tasksList,
        addTask,
        deleteTask,
        updateTask,
        updateTaskStatus,
        openDrawer,
        setOpenDrawer,
        taskStatus,
        setTaskStatus,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(StateContext);
};
