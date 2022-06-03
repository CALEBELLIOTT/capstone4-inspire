import { apisService } from "../Services/ApisService.js";
import { Pop } from "../Utils/Pop.js";


export class ApisController {
  constructor() {
    this.loadApis()
  }

  async loadApis() {
    try {
      await apisService.getQuote()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, "error")
    }
  }
}