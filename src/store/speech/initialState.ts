import { SpeechSlice } from "./types"

export const initialState: SpeechSlice = {
  speeches: [],
  isSpeechDisabled: false,

  speechesStatus: "initial",
  speechesError: null,
}
