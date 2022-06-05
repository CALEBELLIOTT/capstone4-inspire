import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Tasks.js";
import { Pop } from "../Utils/Pop.js";



const taskApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/caleb/todos',
  timeout: 10000
})

class TasksService {
  async changeCheck(id) {
    let target = ProxyState.tasks.find(t => t.id == id)
    target.completed ? target.completed = false : target.completed = true
    const res = await taskApi.put(id, target)
  }
  async loadTasks() {
    const res = await taskApi.get()
    ProxyState.tasks = res.data.map(t => new Task(t))
  }

  async createTask(task) {
    let data = { description: task }
    let submission = new Task(data)
    ProxyState.tasks = [...ProxyState.tasks, submission]
    const res = await taskApi.post("", submission)
  }

  async deleteTask(id) {
    let pop = await Pop.confirm("are you sure you want to delete this task?", 'This cannot be undone', 'warning', 'delete')
    if (pop == true) {
      const res = await taskApi.delete(id)
      ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }
  }

}

export const tasksService = new TasksService()