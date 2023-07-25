import React, { useState, FC } from "react"
import ChatGptApi from "../../api/ChatGptApi"

const Gpt: FC = () => {
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
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={sendMessage}>Click</button>
    </div>
  )
}

export default Gpt
