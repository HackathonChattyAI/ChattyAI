import React, { FC } from "react"
import styles from "./Message.module.scss"

type Props = {
  question: string
  answer: string
}

const Message: FC<Props> = props => {
  const { question, answer } = props

  return (
    <>
      {question ? <p className={styles.question}>{question}</p> : null}
      {answer ? <p className={styles.answer}>{answer}</p> : null}
    </>
  )
}

export default Message
