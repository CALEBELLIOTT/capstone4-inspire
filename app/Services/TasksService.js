import { ProxyState } from "../AppState.js";



const taskApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/caleb/todos',
  timeout: 10000
})

class TasksService {
  async loadTasks() {
    const res = await taskApi.get()
    ProxyState.tasks = res.data
  }

  createTask() {
    throw new Error("Method not implemented.");
  }

}

export const tasksService = new TasksService()