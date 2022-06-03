import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";


function _draw() {
  document.body.style.backgroundImage = `url('${ProxyState.image.largeImgUrl}')`
}


export class ImagesController {
  constructor() {
    this.getImage()
    ProxyState.on('image', _draw)
  }

  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, "error")
    }
  }

}