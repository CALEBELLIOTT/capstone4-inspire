

export class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.location = data.name
  }


  getCelsius() {
    return this.temp - 273.15
  }

  getFahrenheit() {
    return (this.temp - 273.15) * 1.8 + 32
  }

  get Template() {
    return `
    <div class="col-12 d-flex flex-column align-items-end">
    <div class="col-12 d-flex flex-column align-items-end">
      <div class="selectable" onclick="app.weatherController.changeUnit()">
        <h1 class="font-weight-bold mx-3 mt-3 mb-0 text-outline"><i class="mdi mdi-cloud"></i><span
            id="temperature">&nbsp;${this.getCelsius().toFixed(0)}&deg;C</span><i class="mdi"></i>
        </h1>
        <p class="text-light mx-3 my-0 py-0 text-center text-outline">${this.location}</p>
      </div>
    </div>
  </div>
    `
  }
}