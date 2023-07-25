import { createAsyncThunk } from "@reduxjs/toolkit"
import ChatGptApi from "../../api/ChatGptApi"

export const addMessage = createAsyncThunk("message/addMessage", async (data: string, { rejectWithValue }) => {
  try {
    const response = await ChatGptApi.sendMessage(data)
    const result = await response.json()
    // @ts-ignore
    return result.choices[0].message.content
  } catch (e) {
    return rejectWithValue(e)
  }
})
