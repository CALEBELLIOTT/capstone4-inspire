import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js";



function _draw() {
  let template = ``
  ProxyState.tasks.forEach(t => template += t.Template)
  document.getElementById("tasks").innerHTML = template
  let completed = ProxyState.tasks.filter(t => t.completed == true).length

  document.getElementById('completed').innerText = (`${completed}/${ProxyState.tasks.length}`)
}


export class TasksController {
  constructor() {
    this.loadTasks()
    ProxyState.on('tasks', _draw)
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
    window.event.preventDefault()
    let task = window.event.target.task.value
    try {
      await tasksService.createTask(task)
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, "error")
    }
    document.getElementById('task-form').reset()
    await this.loadTasks()
  }

  async changeCheck(id) {
    try {
      await tasksService.changeCheck(id)
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
    _draw()
  }

  async deleteTask(id) {
    try {
      tasksService.deleteTask(id)
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, "error")
    }
    _draw()
  }
}