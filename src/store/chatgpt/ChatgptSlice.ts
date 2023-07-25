import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { buildAddMessage } from "./extraReducers"

export const chatgptSlice = createSlice({
  name: "chatgpt",
  initialState,
  reducers: {},
  extraReducers: builder => {
    buildAddMessage(builder)
  },
})

export default chatgptSlice.reducer
