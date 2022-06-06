import { ProxyState } from "../AppState.js"
import { bcwApi } from "../Services/ApisService.js"


function _draw() {
  document.getElementById("quote").innerText = `"${ProxyState.quote.content}"`
  document.getElementById("quote-author").innerText = ProxyState.quote.author
}


export class QuotesController {
  constructor() {
    this.getQuote()
    ProxyState.on("quote", _draw)
  }

  async getQuote() {
    const res = await bcwApi.get('quotes')
    ProxyState.quote = res.data
    console.log(ProxyState.quote);
  }

  authorReveal() {
    document.getElementById('quote-author').classList.remove('quote-author')
  }
  authorHide() {
    document.getElementById('quote-author').classList.add('quote-author')
  }
}