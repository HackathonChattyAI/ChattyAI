import React, { FC } from "react"
import useSpeechRecognition from "../../hooks/useSpeechRecognitionHook"
import styles from "./InteractionPanel.module.scss"

const InteractionPanel: FC = () => {
  const { text, startListening, stopListening, isListening, hasRecognitionSupport } = useSpeechRecognition()

  return (
    <div className={styles.container}>
      {hasRecognitionSupport ? (
        <>
          {/* временная запись текста с записи над кнопками */}
          <p className={styles.text}>{text}</p>
          <div className={styles.btns}>
            <button className={styles.btn_theme}></button>
            {isListening ? (
              <button className={styles.btn_stop} onClick={stopListening}></button>
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
