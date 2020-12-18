import axios from 'axios'
import api from './index'

export const searchRequest = async () => {
  const response = await api.get('/faqs')
  return response.data.data
}

export const getStates = async () => {
  const response = await axios.get('http://locationsng-api.herokuapp.com/api/v1/states')
  const returnedData = response.data
  return returnedData
}
