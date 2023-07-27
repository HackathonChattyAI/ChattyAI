import React, { FC } from "react"
import LayoutWithHeader from "../layouts/LayoutWithHeader/LayoutWithHeader"
import SecondLayout from "../layouts/SecondLayout/SecondLayout"
import InteractionPanel from "../components/InteractionPanel/InteractionPanel"
import TextContent from "../components/TextContent/TextContent"
import { useAppDispatch } from "../hooks/store"
import { addMessage } from "../store/chatgpt/ChatgptActions"
import useSpeechRecognition from "../hooks/useSpeechRecognitionHook"

const Main: FC = () => {
  const dispatch = useAppDispatch()
  const useSpeech = useSpeechRecognition()

  const handleSendMessage = (text: string) => {
    dispatch(addMessage(text))
  }

  return (
    <LayoutWithHeader title="Chatty AI">
      <SecondLayout>
        <TextContent text={useSpeech.text} />
        <InteractionPanel sendMessage={handleSendMessage} useSpeech={useSpeech} />
      </SecondLayout>
    </LayoutWithHeader>
  )
}

export default Main
