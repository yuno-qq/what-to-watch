import axios from "axios"
import {ActionCreator} from "./reducers/dynamic/dynamic"


const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://mocki.io/v1`,
    timeout: 5000,
    withCredentials: false
  })

  const onSuccess = (response) => response
  const onFail = () => {
    dispatch(ActionCreator.changeServerErrorStatus(true))
  }

  api.interceptors.response.use(onSuccess, onFail)

  return api
}


export default createAPI
