import axios from 'axios'

const baseUrl = '/api/porter'

const getAll = async () => {
  const porters = await axios.get(baseUrl)
  return porters.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response
}

const create = async (data) => {
  const response = await axios.post(baseUrl, data)
  return response.data
}

export default { getAll, remove, create }
