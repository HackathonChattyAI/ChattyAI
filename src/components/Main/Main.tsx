import React, { FC } from "react"
import useSpeechRecognition from "../../hooks/useSpeechRecognitionHook"
import { Link } from "react-router-dom"

const Main: FC = () => {
  const { text, startListening, stopListening, isListening, hasRecognitionSupport } = useSpeechRecognition()

  return (
    <div>
      {hasRecognitionSupport ? (
        <>
          <div>
            <button onClick={startListening}> Начинаю слушать </button>
          </div>

          <div>
            <button onClick={stopListening}>больше не слушаю</button>
          </div>
          {isListening ? <div> ваш браузер сейчас слушает </div> : null}
          {text}
        </>
      ) : (
        <h1> ваш браузер ничего не пишет</h1>
      )}

      <Link to="/signin">на страницу авторизации</Link>
    </div>
  )
}

export default Main
