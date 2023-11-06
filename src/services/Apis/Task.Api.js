import { api } from "../../utils";
import {
  CREATE_TASK,
  DELETE_TASK,
  GET_SINGLE_TASK,
  GET_TASKS,
  UPDATE_COMPLETE,
  UPDATE_TASK,
} from "../ApiConstants";

class TaskApi {
  static sharedIstance = new TaskApi();

  constructor() {
    if (TaskApi.sharedIstance != null) {
      return TaskApi.sharedIstance;
    }
  }

  //   Get task .
  async getTasks(status) {
    try {
      const response = await api.get(`${GET_TASKS}?completed=${status}`);
      const { success, data } = response.data;
      if (success) {
        return data;
      }
    } catch (error) {
      return error.response.data;
    }
  }

  // get single task  ..
  async getSingleTask(id) {
    try {
      const response = await api.get(`${GET_SINGLE_TASK}${id}`);
      const { success, data } = response.data;
      if (success) {
        return data;
      }
    } catch (error) {
      return error.response.data;
    }
  }
  // create task ..
  async createTask(body) {
    try {
      const response = await api.post(`${CREATE_TASK}`, body);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
  // update task ..
  async updateTask(id, body) {
    try {
      const response = await api.put(`${UPDATE_TASK}/${id}`, body);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  // delete task ..
  async deleteTask(id) {
    try {
      const response = await api.delete(`${DELETE_TASK}/${id}`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  // update complete .
  async updateComplete(id, body) {
    try {
      const response = await api.put(`${UPDATE_COMPLETE}/${id}`, body);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export default TaskApi.sharedIstance;
