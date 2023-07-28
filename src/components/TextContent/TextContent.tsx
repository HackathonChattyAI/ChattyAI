import React, { FC } from "react"
import style from "./TextContent.module.scss"
import { useAppSelector } from "../../hooks/store"
import { ChatgptSelectors } from "../../store/chatgpt/ChatgptSelectors"
import Message from "../Message/Message"

type Props = {
  text: string
}

const TetxContent: FC<Props> = props => {
  const { text } = props
  const messages = useAppSelector(ChatgptSelectors.getMesages)
  const lastMessage = messages.slice(-1)

  return (
    <div className={style.container}>
      {/* <Message /> */}
      <p className={style.question}>{text}</p>
      <p className={style.answer}>{lastMessage}</p>
    </div>
  )
}

export default TetxContent
