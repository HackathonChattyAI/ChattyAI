import React, { FC, useCallback } from "react"
import style from "./InteractionPanel.module.scss"
import Switcher from "../Switcher/Switcher"
import ZoomButton from '../ZoomButton/ZoomButton'

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

  const handleClickStartListening = useCallback(() => {
    stopListening()
    sendMessage(text)
  }, [text, stopListening, sendMessage])

  return (
    <div className={style.container}>
      {hasRecognitionSupport ? (
        <>
          <div className={style.btns}>
            <Switcher />
            {isListening ? (
              <button className={style.btn_stop} onClick={handleClickStartListening}></button>
            ) : (
              <button className={style.btn_talk} onClick={startListening}></button>
            )}
            <ZoomButton />
          </div>
        </>
      ) : (
        <h1> ваш браузер ничего не пишет</h1>
      )}
    </div>
  )
}

export default InteractionPanel
