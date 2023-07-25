import { Route, Routes } from "react-router-dom"
import Main from "./components/Main/Main"
import Authorization from "./components/Authorization/Authorization"

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Authorization />} />
        <Route path="/ChattyAI" element={<Main />} />
      </Routes>
    </>
  )
}

export default App
