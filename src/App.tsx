import React, { useState } from "react"
import Main from "./components/Main/Main"
import ChatGptApi from "./api/ChatGptApi"

function App() {
  const [input, setInput] = useState("")

  const text = input

  const sendMessage = async () => {
    const response = await ChatGptApi.sendMessage(text)
    const result = await response.json()
    setInput("")
    console.log(result)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  return (
    <>
      <Main />
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={sendMessage}>Click</button>
    </>
  )
}

export default App
