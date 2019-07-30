import axios from 'axios'

const API_BASE_URL = __CONFIG__.apiUrl

export const getUsers = () => {
  return axios.get(`${API_BASE_URL}/users`)
}

export const changeUserStatus = (userInfo) => {
  const { id } = userInfo
  return axios.put(`${API_BASE_URL}/users/${id}`, userInfo)
}
