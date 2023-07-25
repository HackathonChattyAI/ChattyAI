import { RootState } from "../index"

const getMesages = (state: RootState) => state.chatgpt

export const ChatgptSelectors = {
  getMesages,
}
