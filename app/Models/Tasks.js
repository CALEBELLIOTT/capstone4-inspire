import { generateId } from "../Utils/generateId.js";



export class Task {

  constructor(data) {
    this.completed = data.completed || false
    this.description = data.description
    this.id = data.id
  }


  get Template() {
    return `
    <div class="col-1"><input type="checkBox" ${this.completed ? 'checked' : ''} onchange="app.tasksController.changeCheck('${this.id}')" class=""></div>
    <div class="col-9">
      <p class="p-0 m-0">${this.description}</p>
    </div>
    <div class="col-2"><i class="mdi mdi-trash-can selectable"
        onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </div>
    `
  }
}