import FetchApi from "../utils/fetchApi"
import { TSendMessage } from "../models/SendMessageModel"

class ChatGptApi {
  public sendMessage(body: TSendMessage) {
    return FetchApi.post("/chat/completions", { body })
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ChatGptApi()
