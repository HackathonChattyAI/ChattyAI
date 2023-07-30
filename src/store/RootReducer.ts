import { combineReducers } from "@reduxjs/toolkit"
import chatgptSlice from "./chatgpt/ChatgptSlice"
import SpeechSlice from "./speech/SpeechSlice"

export const rootReducer = combineReducers({
  chatgpt: chatgptSlice,
  speech: SpeechSlice,
})
