import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";



export const bcwApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  timeout: 10000
})

class ApisService {

  async getQuote() {
    const res = await bcwApi.get('quotes')
    ProxyState.quote = res.data
  }

}

export const apisService = new ApisService()