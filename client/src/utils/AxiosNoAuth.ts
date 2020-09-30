import Axios, { AxiosInstance } from 'axios'

export default (): AxiosInstance => {
  const instance = Axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  return instance
}
