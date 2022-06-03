import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js";


export class TasksController {
  constructor() {
    this.loadTasks()
  }

  async loadTasks() {
    try {
      await tasksService.loadTasks()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }

  async createTask() {
    try {
      await tasksService.createTask()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, "error")
    }
  }
}