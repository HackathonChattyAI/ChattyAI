import { RootState } from "../index"

const getSpeech = (state: RootState) => state.speech.speeches
const isSpeechDisabled = (state: RootState) => state.speech.isSpeechDisabled

export const SpeechSelectors = {
  getSpeech,
  isSpeechDisabled,
}
