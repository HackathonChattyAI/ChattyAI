import Main from './components/Main/Main'
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
    <>
      <Main />
      <button onClick={sendMessage}>Click</button>
    </>
  )
}

export default App
