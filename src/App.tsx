import React from "react"
import logo from "./logo.svg"
import "./App.css"
import ChatGptApi from "./api/ChatGptApi"

function App() {
  const body = {
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Say this is a test!"}],
    temperature: 0.7
  }
  
   const sendMessage = async() => {
    const response = await ChatGptApi.sendMessage(body)
    const result = await response.json()
    console.log(result)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <button onClick={sendMessage}>Click</button>
      </header>
    </div>
  )
}

export default App
