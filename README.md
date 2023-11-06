## Task Management App Frontend Documentation

## Installation

Before running the frontend , make sure to install the required dependencies. You can do this using the following command:

```bash
npm install


## Table of Contents

1. [Create a Task](#create-a-task)
2. [Get Tasks](#get-tasks)
3. [Get Single Task](#get-single-task)
4. [Update Task](#update-task)
5. [Update Task Status](#update-task-status)
6. [Delete Task](#delete-task)
7. [filter Task](#filter-task)

## 1. Create a Task

- **Instructions**: Click on Create New Task Button for create new task.
- **Description**: Create a new task.
- **Request Body**:
  - `title` (string): The title of the task.
  - `description` (string): The description of the task.
  - `isComplete` (boolean): (Optional) Indicates whether the task is complete.
- **Response**:
  - `success` (boolean): `true` if the task was created successfully.
  - `message` (string): A success message.

## 2.Filter Task

- **Instructions**: For filter task click on filter button and select status and click on Apply Filter Button.
- **Description**: Filter task base on complete and un complete.
- **Request Body**:
  - `isComplete` (boolean): (Filter) Select from option for complete and un complete.
- **Response**:
  - `success` (boolean): `true` if the task was found.
  - `data` (object): The task object base on filter.

## 3. Update Task

- **Instructions**: Click on update icon button for update task.
- **Description**: Update an existing task by its ID.
- **Request Body**:
  - `title` (string): The updated title of the task.
  - `description` (string): The updated description of the task.
  - `isComplete` (boolean): The updated completion status of the task.
- **Response**:
  - `success` (boolean): `true` if the task was updated successfully.
  - `message` (string): A success message.

## 4. Update Task Status

- **Instructions**: Click on checkbox for update task status.
- **Description**: Update an existing task by its ID.
- **Request Body**:
  - `isComplete` (boolean): The updated completion status of the task.
- **Response**:
  - `success` (boolean): `true` if the task status updated successfully.
  - `message` (string): A success message.

## 5. Delete Task

- **Instructions** Click on delete icon for delete task.
- **Description**: Delete a task by its ID.
- **Response**:
  - `success` (boolean): `true` if the task was deleted successfully.
  - `message` (string): A success message.

## 6. View Single Task

- **Instructions**  Click on view icon for view single task.:
- **Description**: Will show the all detail of single task.
- **Response**:
  - `success` (boolean): `true` if the task was found.
  - `data` (object): The task object.



## 7. Toggle Mode

- **Instructions**  For toggle app in dark or light mode click on the switch .
- **Description**: Change the app mode to light and dark mode.
```
