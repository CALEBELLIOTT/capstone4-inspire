import { ProxyState } from "../AppState.js";
import { bcwApi } from "./ApisService.js";



class ImagesService {

  async getImage() {
    const res = await bcwApi.get('images')
    ProxyState.image = res.data
  }
}

export const imagesService = new ImagesService()