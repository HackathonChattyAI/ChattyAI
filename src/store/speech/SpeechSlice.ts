import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState } from "./initialState"

export const speechSlice = createSlice({
  name: "speech",
  initialState,
  reducers: {
    addSpeech(state, action: PayloadAction<string>) {
      state.speeches.push(action.payload)
      state.isSpeechDisabled = false
    },
    setIsSpeechDisabled: state => {
      state.isSpeechDisabled = true
    },
  },
})

export const { addSpeech, setIsSpeechDisabled } = speechSlice.actions
export default speechSlice.reducer
