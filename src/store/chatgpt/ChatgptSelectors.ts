import { RootState } from "../index"

const getMesages = (state: RootState) => state.chatgpt.messages

export const ChatgptSelectors = {
  getMesages,
}
