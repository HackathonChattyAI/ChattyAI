import FetchApi from "../utils/fetchApi"
import { TSendMessage } from "../models/SendMessageModel"

class ChatGptApi {
  static getDefaultPropertyBody(text: string): TSendMessage {
    return {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: text }],
      temperature: 0.7,
    }
  }

  public sendMessage(text: string) {
    const body = ChatGptApi.getDefaultPropertyBody(text)
    return FetchApi.post("/chat/completions", { body })
  }
}

export default new ChatGptApi()
