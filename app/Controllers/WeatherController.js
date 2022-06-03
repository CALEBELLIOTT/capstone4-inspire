import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";


function _draw() {
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
}


export class WeatherController {
  constructor() {
    this.getWeather()
    // ProxyState.on('weather', _draw)
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, "error")
    }
    _draw()
  }

  changeUnit() {
    if (ProxyState.currentUnit == 0) {
      document.getElementById('temperature').innerHTML = `&nbsp;${ProxyState.weather.getFahrenheit().toFixed(0)}&deg;F`
      ProxyState.currentUnit = 1
    } else if (ProxyState.currentUnit == 1) {
      document.getElementById('temperature').innerHTML = `&nbsp;${ProxyState.weather.getCelsius().toFixed(0)}&deg;C`
      ProxyState.currentUnit = 0
    }
  }
}