import React, { FC } from "react"
import style from "./TextContent.module.scss"
import { useAppSelector } from "../../hooks/store"
import { ChatgptSelectors } from "../../store/chatgpt/ChatgptSelectors"
import Message from "../Message/Message"

type Props = {
  question: string
}

const TetxContent: FC<Props> = props => {
  const { question } = props
  const messages = useAppSelector(ChatgptSelectors.getMesages)
  const answer = messages[messages.length - 1]

  return (
    <div className={style.container}>
      <Message question={question} answer={answer} />
    </div>
  )
}

export default TetxContent
