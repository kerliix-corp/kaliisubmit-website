import axios from 'axios'

const API = axios.create({
  baseURL: 'https://api.kerliix.com',
  withCredentials: true,
})

export default API
