import axios from 'axios'

if (typeof window !== 'undefined') {
  const token = localStorage.getItem('token')
  if (token) axios.defaults.headers.common = { Authorization: token }
}

export const api = axios.create({
  baseURL: 'https://projeto-monitoria-api.herokuapp.com',
})
