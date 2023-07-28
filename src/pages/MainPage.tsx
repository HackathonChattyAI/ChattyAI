import React, { FC } from "react"
import LayoutWithHeader from "../layouts/LayoutWithHeader/LayoutWithHeader"
import SecondLayout from "../layouts/SecondLayout/SecondLayout"
import InteractionPanel from "../components/InteractionPanel/InteractionPanel"
import TextContent from "../components/TextContent/TextContent"
import { useAppDispatch } from "../hooks/store"
import { addMessage } from "../store/chatgpt/ChatgptActions"
import useSpeechRecognition from "../hooks/useSpeechRecognitionHook"

const MainPage: FC = () => {
  const dispatch = useAppDispatch()
  const useSpeech = useSpeechRecognition()

  const handleSendMessage = (question: string) => {
    dispatch(addMessage(question))
  }

  return (
    <LayoutWithHeader title="Chatty AI" avatar={true}>
      <SecondLayout>
        <TextContent question={useSpeech.text} />
        <InteractionPanel sendMessage={handleSendMessage} useSpeech={useSpeech} />
      </SecondLayout>
    </LayoutWithHeader>
  )
}

export default MainPage
