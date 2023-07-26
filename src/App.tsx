import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Main from "./components/Main/Main"
import ChatGptApi from "./api/ChatGptApi"
import { useAppDispatch, useAppSelector } from "./hooks/store"
import { addMessage } from "./store/chatgpt/ChatgptActions"
import { ChatgptSelectors } from "./store/chatgpt/ChatgptSelectors"
import Authorization from "./components/Authorization/Authorization"

function App() {
  const dispatch = useAppDispatch()
  const answers = useAppSelector(ChatgptSelectors.getMesages)
  const [input, setInput] = useState("")

  const text = input

  const sendMessage = async () => {
    const response = await ChatGptApi.sendMessage(text)
    const result = await response.json()
    dispatch(addMessage(text))
    setInput("")
    console.log(result)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  return (
    <>
      <Routes>
        <Route path="/ChattyAI" element={<Main />} />
        <Route path="/signin" element={<Authorization />} />
      </Routes>

      <input type="text" value={input} onChange={handleChange} />
      <button onClick={sendMessage}>Click</button>
      {answers.length !== 0 ? answers.map(answer => <div>${answer}</div>) : <div>Nothing</div>}
    </>
  )
}

export default App
