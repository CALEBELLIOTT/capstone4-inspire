import { generateId } from "../Utils/generateId.js";



export class Task {

  constructor(data) {
    this.id = data.id || generateId()
    this.completed = data.completed || false
    this.user = data.user || "caleb"
    this.description = data.description
  }


  get Template() {
    return `
    <div class="col-2"><input type="checkBox" ${this.completed ? 'checked' : ''} class=""></div>
    <div class="col-8">
      <p class="p-0 m-0">${this.description}</p>
    </div>
    <div class="col-2"><i class="mdi mdi-trash-can selectable"
        onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </div>
    `
  }
}