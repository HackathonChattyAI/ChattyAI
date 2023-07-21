import React from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
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
      </header>
    </div>
  )
}

function Test() {
  return (
    <div>
      <h1>asdasdasd</h1>
      <button className="prettier-class" id="prettier-id">
        Click Here
      </button>
    </div>
  )
}

export default App
