import { combineReducers } from "@reduxjs/toolkit"
import chatgptSlice from "./chatgpt/ChatgptSlice"

export const rootReducer = combineReducers({
  chatgpt: chatgptSlice,
})
