import { RequestStatus } from "../types"

export type SpeechSlice = {
  speeches: string[]
  isSpeechDisabled: boolean

  speechesStatus: RequestStatus
  speechesError: string | null
}
