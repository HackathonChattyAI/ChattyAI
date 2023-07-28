import React, { FC, useCallback } from "react"
import styles from "./InteractionPanel.module.scss"

type Props = {
  sendMessage: (data: string) => void
  useSpeech: {
    text: string
    isListening: boolean
    startListening: () => void
    stopListening: () => void
    hasRecognitionSupport: boolean
  }
}

const InteractionPanel: FC<Props> = props => {
  const { sendMessage, useSpeech } = props
  const { text, isListening, startListening, stopListening, hasRecognitionSupport } = useSpeech

  const handleClick = useCallback(() => {
    stopListening()
    sendMessage(text)
  }, [text])

  return (
    <div className={styles.container}>
      {hasRecognitionSupport ? (
        <>
          <div className={styles.btns}>
            <button className={styles.btn_theme}></button>
            {isListening ? (
              <button className={styles.btn_stop} onClick={handleClick}></button>
            ) : (
              <button className={styles.btn_talk} onClick={startListening}></button>
            )}
            <button className={styles.btn_zoom}></button>
          </div>
        </>
      ) : (
        <h1> ваш браузер ничего не пишет</h1>
      )}
    </div>
  )
}

export default InteractionPanel
