import React from "react"
import { Route, Routes } from "react-router-dom"
import Main from "./pages/MainPage"
import Authorization from "./components/Authorization/Authorization"

function App() {
  return (
    <Routes>
      <Route path="/ChattyAI" element={<Main />} />
      <Route path="/signin" element={<Authorization />} />
    </Routes>
  )
}

export default App
