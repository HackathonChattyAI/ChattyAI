import React, { FC } from "react"
import LayoutWithHeader from "../layouts/LayoutWithHeader/LayoutWithHeader"
import SecondLayout from "../layouts/SecondLayout/SecondLayout"
import InteractionPanel from "../components/InteractionPanel/InteractionPanel"
import TextContent from "../components/TextContent/TextContent"
import { useAppDispatch } from "../hooks/store"
import { addMessage } from "../store/chatgpt/ChatgptActions"
import { addSpeech } from "../store/speech/SpeechSlice"
import useSpeechRecognition from "../hooks/useSpeechRecognitionHook"

const MainPage: FC = () => {
  const dispatch = useAppDispatch()
  const useSpeech = useSpeechRecognition()

  const handleSendMessage = (question: string) => {
    dispatch(addMessage(question))
    dispatch(addSpeech(question))
  }

  return (
    <LayoutWithHeader avatar={true}>
      <SecondLayout>
        <TextContent />
        <InteractionPanel sendMessage={handleSendMessage} useSpeech={useSpeech} />
      </SecondLayout>
    </LayoutWithHeader>
  )
}

export default MainPage
