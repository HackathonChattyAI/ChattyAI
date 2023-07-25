const CHATGPT_API_KEY = process.env.REACT_APP_GPT_API_KEY

const baseApiConfig = {
  url: "https://api.openai.com/v1",
  headers: {
    Authorization: `Bearer ${CHATGPT_API_KEY}`,
    "Content-Type": "application/json",
  },
}

export default baseApiConfig
