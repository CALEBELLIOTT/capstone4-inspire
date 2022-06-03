

function _draw() {
  let date = new Date()
  let template = `
  <div class="col-12 d-flex flex-column justify-content-center align-items-center text-outline">
  <h1 class="time">${date.toLocaleTimeString().slice(0, 4) + date.toLocaleTimeString().slice(7)}</h1>
  <h1>Hello, Caleb
</div>
  `
  document.getElementById('time').innerHTML = template
}

export class TimeController {
  constructor() {
    setInterval(_draw, 100)
  }
}