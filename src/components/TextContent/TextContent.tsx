import React, { FC } from "react"
import style from "./TextContent.module.scss"
import { useAppSelector } from "../../hooks/store"
import { ChatgptSelectors } from "../../store/chatgpt/ChatgptSelectors"
import { SpeechSelectors } from "../../store/speech/SpeechSelectors"
import Message from "../Message/Message"
import { zip } from "../../utils/zip"

const TetxContent: FC = () => {
  const questions = useAppSelector(SpeechSelectors.getSpeech)
  const messages = useAppSelector(ChatgptSelectors.getMesages)
  const result = zip(questions, messages)

  return (
    <div className={style.container}>
      {result.map((res, index) => (
        <Message key={index} question={res[0]} answer={res[1]} />
      ))}
    </div>
  )
}

export default TetxContent
