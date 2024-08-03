import axios from "axios"


const createAPI = () => {
  const api = axios.create({
    baseURL: `https://mocki.io/v1`,
    timeout: 5000,
    withCredentials: false
  })

  const onSuccess = (response) => response
  const onFail = (err) => err

  api.interceptors.response.use(onSuccess, onFail)

  return api
}


export default createAPI
