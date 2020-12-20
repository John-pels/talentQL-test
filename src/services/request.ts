import axios, { AxiosResponse } from 'axios'
import api, { LIMIT } from './index'

const GET_GIPHY = (apiKey: string, keyword: string) =>
  `/search?api_key=${apiKey}&q=${keyword}${LIMIT}`

export const searchRequest = async (apiKey: string, keyword: string) => {
  const response: AxiosResponse<any> = await api.get(GET_GIPHY(apiKey, keyword))
  return response.data.data
}

export const getStates = async () => {
  const response = await axios.get('http://locationsng-api.herokuapp.com/api/v1/states')
  const returnedData = response.data
  return returnedData
}
