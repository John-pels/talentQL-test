import api from './index'

export const searchRequest = async () => {
  const response = await api.get('/faqs')
  return response.data.data
}
