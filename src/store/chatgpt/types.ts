import { RequestStatus } from "../types"

export type MessagesSlice = {
  messages: string[]

  messagesStatus: RequestStatus
  messagesError: string | null
}
