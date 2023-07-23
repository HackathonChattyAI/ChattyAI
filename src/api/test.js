const test = {
  "model": "gpt-3.5-turbo",
  "messages": [{"role": "user", "content": "Say this is a test!"}],
  "temperature": 0.7
}

fetch("https://api.openai.com/v1/chat/completions", {
  method: 'POST',
  headers: {
    'Authorization': "Bearer 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",
    'Content-Type': "application/json"
  },
  body: JSON.stringify(test) 
})
  .then(response => response.json())
  .then(result => console.log(result))
