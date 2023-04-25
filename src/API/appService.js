import axios from "axios";

export class GetSession {
  async getSession(message) {
    try {
      axios.post('https://api.chatgpt.com/v1/sessions', {
        "message": message,
        "context": {}
      })
    } catch (error) {
      return error
    }
  }
}

export class GetResponse {
  async GetResponse(message, sessionId) {
    try {
      axios.post(`https://api.chatgpt.com/v1/sessions/${sessionId}/messages`, {
        "message": message,
        "context": {}
      })
    } catch (error) {
      return error
    }
  }
}

export class GetChatList {
  async GetChatList(userID) {
    try {
      axios.get(`https://api.codepeak.ru/chats/getChats/:${userID}`)
    } catch (error) {
      return error
    }
  }
}