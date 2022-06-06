import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";



export const bcwApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  timeout: 10000
})

class ApisService {


}

export const apisService = new ApisService()