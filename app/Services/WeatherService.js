import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { bcwApi } from "./ApisService.js"


class WeatherService {


  async getWeather() {
    const res = await bcwApi.get('weather')
    ProxyState.weather = new Weather(res.data)
    console.log(ProxyState.weather);
  }
}


export const weatherService = new WeatherService()