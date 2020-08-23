import axios from "axios";

const baseUrl = "/dsa";

const getAll = async () => {
  const dsas = await axios.get(baseUrl);
  return dsas.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response;
};

const create = async (data) => {
  const response = await axios.post(baseUrl, data);
  return response.data;
};

const update = async (id, data) => {
  const response = await axios.put(`${baseUrl}/${id}`, data);
  return response.data;
};
export default { getAll, remove, create, update };
