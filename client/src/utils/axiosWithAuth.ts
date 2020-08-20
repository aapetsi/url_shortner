import Axios, { AxiosInstance } from 'axios'

export default (): AxiosInstance => {
  const token = localStorage.getItem('token')

  const instance = Axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })

  return instance
}