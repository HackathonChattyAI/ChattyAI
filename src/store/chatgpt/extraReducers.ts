import { ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { handleError } from "../../utils/handleError"
import { addMessage } from "./ChatgptActions"
import { MessagesSlice } from "./types"

export const buildAddMessage = (builder: ActionReducerMapBuilder<MessagesSlice>) =>
  builder
    .addCase(addMessage.pending, state => {
      state.messagesStatus = "pending"
    })
    .addCase(addMessage.fulfilled, (state, action) => {
      state.messagesStatus = "success"

      state.messages.push(action.payload)
    })
    .addCase(addMessage.rejected, (state, action) => {
      state.messagesStatus = "error"
      state.messagesError = handleError(action.payload)
    })
