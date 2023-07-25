import { MessagesSlice } from "./types"

export const initialState: MessagesSlice = {
  messages: [],

  messagesStatus: "initial",
  messagesError: null,
}
