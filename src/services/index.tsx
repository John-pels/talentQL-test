import axios from 'axios'

export const LIMIT = '&limit=30&offset=0&rating=G&lang=en'
export const API_KEY = 'OYa73aJOBfbenMLiAav9ZXswodSdoTTW'
export const BASE_URL = 'https://api.giphy.com/v1/gifs'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default api
